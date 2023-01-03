# Notes

## LINUX

## JAVASCRIPT

- `Blob`
- `ArrayBuffer`: The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.
- `URL.createObjectURL()`: creates an url that leads to a blob (binary large object)
- `Uint8Array`
- `TextDecoder`: The TextDecoder interface represents a decoder for a specific text encoding, such as UTF-8, ISO-8859-2, KOI8-R, GBK, etc. A decoder takes a stream of bytes as input and emits a stream of code points.
- `TextEncoder`: `The TextEncoder interface takes a stream of code points as input and emits a stream of UTF-8 bytes.`
- `FileReader`
- `ProgressEvent`
- `EventTarget`

## ANGULAR

- `RouterModule`: module to register a routing module

### QUILLJS

## NEST.JS

- `@Controller()`: annotation for controller from `@nestjs/common`
- `@Get()`: annotation for http GET request that gets handled in controller
- **routing**: get, add, put, post
- `@HttpCode()`: By default, NestJS responds with a 200 OK status code with the exception of 201 Created for the POST. We can easily change that with the @HttpCode() decorator.
- **route parameter**: When we implement an API, we often need to refer to a specific element. We can do so with route parameters. They are special URL segments used to capture values specified at their position. To create a route parameter, we need to prefix its name with the : sign.

The way to extract the value of a route parameter is to use the @Param() decorator. Thanks to it, we have access to it in the arguments of our route handl

## PDF.JS

- `PDFWorker`
