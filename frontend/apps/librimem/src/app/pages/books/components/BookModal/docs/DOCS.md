# DOCS

## File to base64

This documentation explains the code.

```js
 loadFile(ev: Event) {
    const file = this.readableInput.nativeElement.files[0]

    const reader = new FileReader()
    reader.addEventListener("load", (event) => this.propageBase64(event, this.addEpub.bind(this)))
  }

  propageBase64(ev: Event, addEpub: (readableData: string) => void) {
    const formatedUrl = ev.target.result.replace('data:application/epub+zip;base64,', '')
    addEpub(formatedUrl)
  }

  addEpub(readableData: string) {
    console.log(`readableData: ${readableData}`);
    this.epubStorageService.addEpub({ title: "", epub: readableData })
  }
```

\*\*The given code is in Typescript language which contains a string sequence consisting of two parts separated by a comma.

The first part of the string sequence is 'data:application/epub+zip;base64,'. It is called a Data URI Scheme prefix, as it defines that the data is encoded as Base64 and the MIME media type is application/epub+zip.

The Data URI Scheme prefix is used to embed external files or resources within a web page or script without the need for separate HTTP requests to fetch the content. It also allows providing metadata describing the content, such as its file format, encoding, etc., along with the data itself.

The second part of the string sequence is an empty string, represented by '' after the comma. It is used to indicate that there is no actual data present in this string sequence, only the metadata.

Therefore, the whole code 'data:application/epub+zip;base64, '' is used to define the metadata for an external EPUB file embedded in a web page or script but does not contain any actual EPUB data encoded in Base 64. This can be seen in HTML tags where this string is used as the href attribute value of an anchor (a) tag or within CSS style attributes.\*\*
