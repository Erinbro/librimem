import { IBook, IChapter } from "@librimem/api-interfaces";
import Dexie, { Table } from "dexie";

export class StorageDB extends Dexie {
  books!: Table<Omit<IBook, "id">, number>;
  chapters!: Table<IChapter, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      books: '++id',
      chapters: "++id"
    });
  }
}

/**
 * Singleton of Dexie DB for IndexedDB
 */
export const db = new StorageDB();
