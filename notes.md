# Notes

## LINUX

## JAVASCRIPT

### QUILLJS

## NEST.JS

- `@Controller()`: annotation for controller from `@nestjs/common`
- `@Get()`: annotation for http GET request that gets handled in controller
- **routing**: get, add, put, post
- `@HttpCode()`: By default, NestJS responds with a 200 OK status code with the exception of 201 Created for the POST. We can easily change that with the @HttpCode() decorator.
- **route parameter**: When we implement an API, we often need to refer to a specific element. We can do so with route parameters. They are special URL segments used to capture values specified at their position. To create a route parameter, we need to prefix its name with the : sign.

The way to extract the value of a route parameter is to use the @Param() decorator. Thanks to it, we have access to it in the arguments of our route handl
