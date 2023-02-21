import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/Book';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IBook } from '@librimem/api-interfaces';

/**
 * HTTP client for {book microservice backend}/api/v1/book
 */
@Injectable({
  providedIn: 'root'
})
export class BookClient {

  url = environment.bookAPI

  constructor(private http: HttpClient) { }

  // NOTE CREATE
  public addBook(newBook: IBook) {
    return this.http.post<IBook>(this.url, newBook);
  }

  // NOTE READ
  /**
   * Gets all books from the backend
   */
  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  public getBook() {
    return
  }

  // NOTE UPDATE
  public updateBook(updatedBook: IBook) {
    return this.http.put<IBook>(this.url, updatedBook)
  }

  // NOTE DELETE
  public deleteBook(bookId: number) {
    return this.http.delete<IBook>(this.url + `/${bookId}`)
  }

}
