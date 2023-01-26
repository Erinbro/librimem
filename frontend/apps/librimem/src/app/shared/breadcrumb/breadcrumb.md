# Breadcrumb

The BreadcrumbComponent is a component that holds the current routes of the application. Its purpose is to show the user his current position in the component tree.

## Properties

It has the `params` property. `params` is an array that holds the `params` and `joinedParams` subproperties.

`params` is an array of strings which are the properly formated parts of the routes that are shown in the template. `joinedParams` is an array of strings that holds the absolute route.

## Service

The BreadcrumService holds important functions that are responsible for:

- formating the visual string (`param`) and the absolute link (`joinedParam`).

### API

Here is an explanation of the API.

####
