import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookClient {

  constructor(private http: HttpClient) { }

  // NOTE CREATE
  public async addBook() { }

  // NOTE READ
  public async getBooks() { }

  public async getBook() { }

  // NOTE UPDATE
  public async updateBook() { }

  // NOTE DELETE
  public async deleteBook() { }

}
