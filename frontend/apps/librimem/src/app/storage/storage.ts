import { IBook, IChapter, ICover, IFlashcard, INote } from "@librimem/api-interfaces";
import Dexie, { Table } from "dexie";

/**
 * Class for the configuration of dexie.js
 */
export class StorageDB extends Dexie {
  books!: Table<IBook, number>;
  chapters!: Table<IChapter, number>;
  flashcards!: Table<IFlashcard, number>;
  notes!: Table<INote, number>;
  epubs!: Table<{ title: string, epub: string }, number>
  pdfs!: Table<{ title: string, epub: string }, number>
  covers!: Table<ICover, number>


  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      // NOTE iid stands for indexedDB id
      // We discriminate between the id that is created in the
      // backend and the id created in the frontend
      books: '++id',
      chapters: "++id",
      epubs: "++id",
      pdfs: "++id",
      covers: "++id"
    });
  }
}

/**
 * Singleton of Dexie DB for IndexedDB
 */
export const db = new StorageDB();
