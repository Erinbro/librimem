import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { bookSearchResult, booksSearchResult } from 'apps/librimem/src/assets/data/openlibrary';

interface ISearchResults {
  docs:
  {
    author_alternative_name?: string
    author_key: string[]
    author_name: string[]
    edition_key: string[]
    isbn: string[]
    language: string[]
    number_of_pages_median: number
    subject: string[]
    title: string
    cover?: string
  }[]
  numFound: number;
  q: string;
}

/**
 * Result with ISBN query
 */
interface ISearchBookResult {
  [ISBN: string]: {
    authors: [
      {
        [index: number]: {
          name: string;
          url: string;
        }
      }
    ]
    cover: {
      large: string;
      medium: string;
      small: string;
    }
  }

}

/**
 * Client for openlibrary.org
 */
@Injectable({
  providedIn: "root"
})
export class OpenLibraryClient {
  baseUrl = "https://openlibrary.org/search.json?q="

  constructor(private http: HttpClient) { }

  searchBooksByTitle(title: string) {
    // FIXME Restore
    // const response = this.http.get<ISearchResults>(this.baseUrl + this.formatTitle(title))
    // response.subscribe((res) => {
    //   console.log(res);

    // })
    // return response

    let formatedResponse = booksSearchResult.docs as ISearchResults['docs']
    formatedResponse = formatedResponse.map((b) => {
      if (!b.isbn) return b
      const cover = this.getBookById(b.isbn[0]).medium
      b.cover = cover
      return b
    })

    return of(
      formatedResponse
    )
  }

  getBookById(isbn: string) {
    // FIXME restore
    // const response = this.http.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    // response.subscribe((res) => {
    //   console.log(res);
    // })
    const formatedResponse = bookSearchResult['ISBN:9780945001102'].cover
    return formatedResponse
  }




  /**
   * turns whitespace to '_'
   * @param title
   */
  private formatTitle(title: string) {
    return title.split(" ").join("+")
  }

}
