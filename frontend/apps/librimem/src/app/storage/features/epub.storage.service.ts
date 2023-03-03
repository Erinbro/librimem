import { Injectable } from '@angular/core';
import { db } from '../storage';

/**
 * Interacts with IndexedDB to crudify epubs
 */
@Injectable()
export class EpubStorageService {
  private epubStorage = db.epubs;

  /**
 * Saves epub with base65 encoding
 * @param epub
 */
  public async addEpub(epub: { title: string, epub: string }) {
    this.epubStorage.put(epub)
  }

  public async getEpubs() {
    return await this.epubStorage.toArray();
  }

  public async getEpub(id: number) {
    this.epubStorage.get(id);
  }

  // FIXME
  public async updateEpub(updatedEpub: Blob) {
    return;
  }


}
