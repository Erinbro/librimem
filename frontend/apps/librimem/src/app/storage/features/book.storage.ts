import { IBook } from '@librimem/api-interfaces';
import { db } from '../storage';
import { Injectable } from '@angular/core';

@Injectable()
/**
 * Class with CRUD methods for the book storage
 * in IndexedDB
 */
export class BookStorageApi {
  private bookStorage = db.books
  /**
   * Adds book to IndexedDB
   */
  public async addBook(book: IBook): Promise<IBook> {
    const addedBookId = await this.bookStorage.add(book)
    const addedBook = await this.bookStorage.get(addedBookId)
    return addedBook as IBook
  }

  public async getBook(id: number) {
    return await this.bookStorage.get(id)
  }

  public async getBooks(): Promise<IBook[]> {
    return await this.bookStorage.toArray()
  }

  public async updateBook(book: IBook) {
    await this.bookStorage.delete(book.id)
    const updatedBookId = await this.bookStorage.add(book)
    const updatedBook = await this.bookStorage.get(updatedBookId)
    return updatedBook as IBook
  }

  public async deleteBook(id: number) {
    const deletedBook = await this.bookStorage.get(id)
    if (!deletedBook) return
    await this.bookStorage.delete(id)
    return deletedBook as IBook;
  }
}