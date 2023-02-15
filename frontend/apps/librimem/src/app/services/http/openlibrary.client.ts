import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ISearchResults {
  docs: {
    [id: number]: {
      author_alternative_name?: string
      author_key: string[]
      author_name: string[]
      edition_key: string[]
      isbn: string[]

    }
  }
  numFound: number;
  q: string;
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
    const response = this.http.get(this.baseUrl + this.formatTitle(title))
    response.subscribe((res) => {
      console.log(res);

    })
  }

  getBookById(id: string) {

  }

  /**
   * turns whitespace to '_'
   * @param title
   */
  private formatTitle(title: string) {
    return title.split(" ").join("+")
  }

}
