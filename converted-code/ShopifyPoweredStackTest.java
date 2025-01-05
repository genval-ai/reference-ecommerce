import org.junit.jupiter.api.Test;
import software.amazon.awscdk.App;
import software.amazon.awscdk.assertions.Template;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ShopifyPoweredStackTest {

    @Test
    void testApiGatewayCreated() {
        App app = new App();
        ShopifyPoweredStack stack = new ShopifyPoweredStack(app, "MyTestStack");
        Template template = Template.fromStack(stack);

        template.hasResourceProperties("AWS::ApiGateway::RestApi", Map.of(
                "Name", "Shopify Powered API"
        ));
    }

    @Test
    void testLambdaFunctionsCreated() {
        App app = new App();
        ShopifyPoweredStack stack = new ShopifyPoweredStack(app, "MyTestStack");
        Template template = Template.fromStack(stack);

        assertEquals(3, template.resourceCountIs("AWS::Lambda::Function"));
    }

    @Test
    void testApiGatewayResourcesCreated() {
        App app = new App();
        ShopifyPoweredStack stack = new ShopifyPoweredStack(app, "MyTestStack");
        Template template = Template.fromStack(stack);

        assertEquals(6, template.resourceCountIs("AWS::ApiGateway::Resource")); // 3 main resources + 3 proxy resources
    }

    @Test
    void testLambdaPermissionsGranted() {
        App app = new App();
        ShopifyPoweredStack stack = new ShopifyPoweredStack(app, "MyTestStack");
        Template template = Template.fromStack(stack);

        assertEquals(3, template.resourceCountIs("AWS::Lambda::Permission"));
    }
}