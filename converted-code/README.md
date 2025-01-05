# TypeScript to Java Conversion for AWS CDK Project

This folder contains the result of converting the original TypeScript AWS CDK project to Java. The conversion process involved the following steps:

1. Converting the main CDK stack (`ShopifyPoweredStack.ts` to `ShopifyPoweredStack.java`)
2. Converting the CDK app entry point (`shopify-powered-stack.ts` to `ShopifyPoweredStackApp.java`)
3. Converting the test file (`shopify-powered-stack.test.ts` to `ShopifyPoweredStackTest.java`)
4. Creating a `pom.xml` file for Maven project configuration
5. Adjusting import statements and syntax to match Java conventions
6. Replacing TypeScript-specific constructs with Java equivalents

## Key Changes

- **Language Syntax**: Converted TypeScript syntax to Java, including type declarations, lambda expressions, and method calls.
- **CDK Constructs**: Updated the CDK construct usage to match the Java CDK library.
- **Testing**: Converted Jest tests to JUnit 5 tests.
- **Build System**: Replaced npm/yarn with Maven for dependency management and build processes.
- **Project Structure**: Adjusted the project structure to follow Java conventions.

## Notes

- The converted code assumes Java 11 or later.
- Some manual adjustments may be needed, especially for complex TypeScript features that don't have direct Java equivalents.
- Environment variables are handled slightly differently in Java; the conversion uses `System.getenv()`.
- The `cdk.json` file may need manual updates to reflect the Java-based entry point.

## Next Steps

1. Review the converted code for any inconsistencies or errors.
2. Update the `cdk.json` file to use the Java entry point.
3. Test the Java CDK app to ensure it functions as expected.
4. Update any CI/CD pipelines to use Maven instead of npm/yarn.

For any issues or further refinements, please consult the AWS CDK documentation for Java.