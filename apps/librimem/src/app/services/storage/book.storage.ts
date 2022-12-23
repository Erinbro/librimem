import { Injectable } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { db } from '../../storage/storage';
import { Store } from '@ngrx/store';
import { ADD_BOOK } from '../../state/book/book.action';

@Injectable({
  providedIn: 'root'
})
/**
 * Service
 */
export class BookPersistence {
  constructor(private store: Store) { }

  public async addBook(book: Omit<IBook, 'id'>): Promise<IBook> {
    return await db.books.add(book).then(async (id) => {
      // NOTE Add to store
      return await this.getBookAfterInsertion(id).then((insertedBook) => {
        this.store.dispatch(ADD_BOOK({ newBook: insertedBook }))
        return insertedBook;
      })
    })
  }

  async getBooks(): Promise<IBook[]> {
    return await db.books.toArray().then((books) => books) as unknown as IBook[];
  }

  private async getBookAfterInsertion(id: number | string): Promise<IBook> {
    if (typeof id === 'string') id = Number(id)
    return await db.books.get(id).then((book) => book as IBook)
  }

  public async getBook(id: number | string): Promise<IBook | undefined> {
    if (typeof id === 'string') id = Number(id)
    return await db.books.get(id).then((book) => book as IBook)
  }

  public async updateBook(book: IBook): Promise<IBook> {
    const id = await db.books.put(book).then((id) => id)
    return await this.getBookAfterInsertion(id);
  }


  // async deleteBook(id: number | string): Promise<any> {

  // }

}
