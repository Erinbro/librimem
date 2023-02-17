import { IChapter } from '@librimem/api-interfaces';
import { db } from '../storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ChapterStorageApi {
  private chapterStorage = db.chapters

  public async addChapter(chapter: IChapter) {
    console.log(`called addedChapter`);

    const addedChapterId = await this.chapterStorage.add(chapter)
    const addedChapter = await this.chapterStorage.get(addedChapterId)
    return addedChapter as IChapter;
  }

  public async getChapter(id: number) {
    return await this.chapterStorage.get(id);
  }

  public async getChapters(entityId: number) {
    let result
    try {
      result = await this.chapterStorage.where({ entityId }).toArray();
    } catch (err) {
      console.log(`Error in fetching chapters: ${err}`);
    }
    return result;

  }

  public async updateChapter(updatedChapter: IChapter) {
    this.chapterStorage.put(updatedChapter)
    return updatedChapter
  }

  public async deleteChapter(id: number) {
    const deletedChapter = await this.chapterStorage.get(id)

    await this.chapterStorage.delete(id)
    return deletedChapter as IChapter;
  }


  public async deleteAllChapterofBook(entityId: number) {
    const deletedChapters = await this.chapterStorage.where({ entityId }).toArray()
    await this.chapterStorage.where({ entityId }).delete()
    return deletedChapters
  }
}
