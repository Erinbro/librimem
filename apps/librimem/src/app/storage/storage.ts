import { IBook } from "@librimem/api-interfaces";
import Dexie, { Table } from "dexie";

export class StorageDB extends Dexie {
  books!: Table<Omit<IBook, 'id'>, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      books: '++id',
    });
  }
}

/**
 * Instance of Dexie DB for IndexedDB
 */
export const db = new StorageDB();
