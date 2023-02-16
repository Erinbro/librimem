import { IChapter } from '@librimem/api-interfaces';
import { db } from '../storage';
import { Injectable } from '@angular/core';

type ChapterWithoutId = Omit<IChapter, "id">

@Injectable({
  providedIn: "root"
})
export class ChapterStorageApi {
  private chapterStorage = db.chapters

  public async addChapter(chapter: IChapter) {
    return await this.chapterStorage.add(chapter);
  }

  public async getChapter(id: number) {
    return await this.chapterStorage.get(id);
  }

  public async getChapters(entityId: number) {
    let result
    try {
      result = await this.chapterStorage.where("entityId").equals(entityId).toArray();
    } catch (err) {
      console.log(`Error in fetching chapters: ${err}`);
    }
    return result;

  }

  public async updateChapter(updatedChapter: ChapterWithoutId) {
    // this.chapterStorage.delete(updatedChapter)
  }

  public async deleteChapter(id: number) {

  }


  public async deleteAllChapterofBook(bookId: number) {

  }
}
