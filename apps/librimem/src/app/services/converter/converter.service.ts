import { Inject, Injectable } from '@angular/core';
import { DeltaOperation } from "quill"
import * as cheerio from "cheerio"

@Injectable({
  providedIn: 'root'
})
export class Converter {
  /**
   * Container for ebook
   */
  dummyDOMElement = document.createElement('template')

  headers: HTMLHeadingElement[] | null = null
  paragraphs: HTMLParagraphElement[] = []

  constructor() {
  }

  /**
   * Main method that kick starts the conversion
   */
  convert() {
  }

  extractHeaders(file: string) {
    this.dummyDOMElement.innerHTML = file;
    const headers: any[] = [];
    const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    for (let i = 0; i < headerTags.length; i++) {
      const headerTag = headerTags[i];
      const currentHeaders: HTMLCollection = this.dummyDOMElement.getElementsByTagName(headerTag)
      this.dummyDOMElement.getElementsByTagName(headerTag)

      headers.concat(currentHeaders)
    }

    console.log(`headers: ${headers[0]}`)

    return headers;
  }

  extractParagraphs(file: string) { }

  /**
   * Finds the html section with the contents
   */
  findContentsPage(file: string) {
    // the contents section has the following attributes:
    // 1) It is in the beginning (in 99% of the cases)
    // 2) It has a overproportional amount of numbers to text

  }


}

