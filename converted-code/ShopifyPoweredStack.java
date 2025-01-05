import software.amazon.awscdk.core.*;
import software.amazon.awscdk.services.lambda.*;
import software.amazon.awscdk.services.apigateway.*;
import software.amazon.awscdk.services.iam.*;

import java.util.Map;

public class ShopifyPoweredStack extends Stack {
    public ShopifyPoweredStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public ShopifyPoweredStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        // Create API Gateway
        RestApi api = RestApi.Builder.create(this, "ShopifyPoweredApi")
                .restApiName("Shopify Powered API")
                .description("API for Shopify-powered e-commerce capabilities")
                .build();

        // Create Lambda functions
        Function productManagementLambda = Function.Builder.create(this, "ProductManagementLambda")
                .runtime(Runtime.NODEJS_18_X)
                .handler("index.handler")
                .code(Code.fromAsset("../../../integration/shopify-product-management"))
                .environment(Map.of(
                        "SHOPIFY_SHOP_DOMAIN", System.getenv("SHOPIFY_SHOP_DOMAIN") != null ? System.getenv("SHOPIFY_SHOP_DOMAIN") : "",
                        "SHOPIFY_ACCESS_TOKEN", System.getenv("SHOPIFY_ACCESS_TOKEN") != null ? System.getenv("SHOPIFY_ACCESS_TOKEN") : "",
                        "SHOPIFY_API_VERSION", System.getenv("SHOPIFY_API_VERSION") != null ? System.getenv("SHOPIFY_API_VERSION") : ""
                ))
                .build();

        Function orderManagementLambda = Function.Builder.create(this, "OrderManagementLambda")
                .runtime(Runtime.NODEJS_18_X)
                .handler("index.handler")
                .code(Code.fromAsset("../../../integration/shopify_order_management"))
                .environment(Map.of(
                        "SHOPIFY_SHOP_DOMAIN", System.getenv("SHOPIFY_SHOP_DOMAIN") != null ? System.getenv("SHOPIFY_SHOP_DOMAIN") : "",
                        "SHOPIFY_ACCESS_TOKEN", System.getenv("SHOPIFY_ACCESS_TOKEN") != null ? System.getenv("SHOPIFY_ACCESS_TOKEN") : "",
                        "SHOPIFY_API_VERSION", System.getenv("SHOPIFY_API_VERSION") != null ? System.getenv("SHOPIFY_API_VERSION") : ""
                ))
                .build();

        Function cartManagementLambda = Function.Builder.create(this, "CartManagementLambda")
                .runtime(Runtime.NODEJS_18_X)
                .handler("index.handler")
                .code(Code.fromAsset("../../../integration/elastic-path-cart"))
                .environment(Map.of(
                        "ELASTIC_PATH_API_BASE_URL", System.getenv("ELASTIC_PATH_API_BASE_URL") != null ? System.getenv("ELASTIC_PATH_API_BASE_URL") : "",
                        "ELASTIC_PATH_CLIENT_ID", System.getenv("ELASTIC_PATH_CLIENT_ID") != null ? System.getenv("ELASTIC_PATH_CLIENT_ID") : "",
                        "ELASTIC_PATH_CLIENT_SECRET", System.getenv("ELASTIC_PATH_CLIENT_SECRET") != null ? System.getenv("ELASTIC_PATH_CLIENT_SECRET") : ""
                ))
                .build();

        // Create API Gateway resources and methods
        Resource productManagementResource = api.getRoot().addResource("product-management");
        productManagementResource.addProxy(ProxyResourceOptions.builder()
                .defaultIntegration(new LambdaIntegration(productManagementLambda))
                .anyMethod(true)
                .build());

        Resource orderManagementResource = api.getRoot().addResource("order-management");
        orderManagementResource.addProxy(ProxyResourceOptions.builder()
                .defaultIntegration(new LambdaIntegration(orderManagementLambda))
                .anyMethod(true)
                .build());

        Resource cartManagementResource = api.getRoot().addResource("cart-management");
        cartManagementResource.addProxy(ProxyResourceOptions.builder()
                .defaultIntegration(new LambdaIntegration(cartManagementLambda))
                .anyMethod(true)
                .build());

        // Grant API Gateway permission to invoke Lambda functions
        productManagementLambda.grantInvoke(new ServicePrincipal("apigateway.amazonaws.com"));
        orderManagementLambda.grantInvoke(new ServicePrincipal("apigateway.amazonaws.com"));
        cartManagementLambda.grantInvoke(new ServicePrincipal("apigateway.amazonaws.com"));

        // Output the API Gateway URL
        new CfnOutput(this, "ApiUrl", CfnOutputProps.builder()
                .value(api.getUrl())
                .description("URL of the API Gateway")
                .build());
    }
}