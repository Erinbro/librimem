import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, of, from, concat, merge } from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { bookSearchResult, booksSearchResult } from 'apps/librimem/src/assets/data/openlibrary';
import { filter, map, mergeMap, pluck, tap, catchError, takeUntil, switchMap } from 'rxjs/operators';

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
  /**
   * books
   */
  searchResults$ = new Observable<ISearchResults>()
  /**
   * Cover
   */
  bookResults$ = new Observable<ISearchBookResult>()

  constructor(private http: HttpClient) { }

  getBooks(title: string) {
    return this.searchBooksByTitle(title).pipe(
      switchMap((c) => {
        const filtered = c.filter((n) => n ? true : false)
        return filtered.map((n) => {
          if (!n) return undefined
          return this.getBookById(n.isbn[0]).pipe(
            map((t) => {
              n.cover = t.medium
              return n
            })
          )
        })
      }),
    ) as unknown as Observable<ISearchResults['docs']>
  }

  searchBooksByTitle(title: string) {
    console.log(`calelld`);

    return this.http.get<ISearchResults>(this.baseUrl + this.formatTitle(title)).pipe(
      // map((val) => val.docs),
      // filter((v) => v ? true : false),
      // mergeMap((s) => {
      //   const res = s.map((n) => this.getBookById(n.isbn[0]).pipe(
      //     map((k) => k.medium),
      //   ))
      //   return combineLatest([
      //     of(s),
      //     res
      //   ])
      // }),
      // map(([t, v]) => {
      //   v.pipe(
      //     map((r) => t.map((x) => x.cover = r))
      //   )
      //   return t
      // })
      map((v) => v['docs']),
    )

  }

  /**
   * Returns cover of book if it exists
   * @param isbn
   * @returns
   */
  getBookById(isbn: string) {
    // FIXME restore
    const response = this.http.get<ISearchBookResult>(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`).pipe(
      map((val) => {
        const key = Object.keys(val)
        const obj = val[key[0]]
        return obj.cover
      })
    )

    // const formatedResponse = bookSearchResult['ISBN:9780945001102'].cover
    return response
  }

  // getCoverOfBook(coverId: number) {

  // }




  /**
   * turns whitespace to '_'
   * @param title
   */
  private formatTitle(title: string) {
    return title.split(" ").join("+")
  }

}
