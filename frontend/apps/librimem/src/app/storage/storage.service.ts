import { Injectable } from '@angular/core';
import { db } from './storage';

/**
 * Service for IndexedDB
 */
@Injectable()
export class StorageService {
  bookStorage = db.books
  chapterStorage = db.chapters


  /**
   * Persists the resources in IndexedDB in
   * the backend
   */
  public persistInBackend() {

  }

}
