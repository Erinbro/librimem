import { IBook } from '@librimem/api-interfaces';
import { db } from '../storage';

/**
 * Class with CRUD methods for the book storage
 * in IndexedDB
 */
export class BookStorageApi {
  private bookStorage = db.books
  /**
   * Adds book to IndexedDB
   */
  public async addBook(book: Omit<IBook, "id">) {
    return await this.bookStorage.add(book)
  }

  public async getBook(id: number) {
    return await this.bookStorage.get(id)
  }

  public async getBooks() {
    return await this.bookStorage.toArray()
  }
}
