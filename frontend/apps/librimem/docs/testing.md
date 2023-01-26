# Testing

This documents the testing strategies for the broject LibriMem.

## Types of Tests

We have three types of tests. Unit tests that executed with Jest, integration tests that are run with Testing Library Angular and end to end tests that are handled by Cypress in a proper folder.

## Naming Convention

We have the unit and integration tests in the feature folder together. The unit test ends with _.test.ts and the integration test ends with _.spec.ts.

## Tools

### Jest

Best for its speed.

### Testing Library Angular

Testing Library gives us a way to render the component.

### Cypress

End to end tests should be run in the browser.

## Namespaces

In unit tests we namespace the functions and methods with '[]' to identify them.
