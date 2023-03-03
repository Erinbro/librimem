import { Injectable } from '@angular/core';
import { db } from '../storage';
import { ICover } from '@librimem/api-interfaces';

/**
 * Crudify covers of books with IndexedDB
 */
@Injectable()
export class CoverStorageService {
  private coverStorage = db.covers

  public async addCover(cover: ICover) {
    await this.coverStorage.add(cover)
  }

  public async getCover(readableId: number, readableType: "BOOK") {
    const res = await this.coverStorage.where("readableId").equals(readableId).first();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`cover res: ${res.token}`);
  }

  public async getCovers() {

  }
}
