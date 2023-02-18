import { IChapter } from '@librimem/api-interfaces';
import { db } from '../storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ChapterStorageApi {
  private chapterStorage = db.chapters

  public async addChapter(chapter: IChapter) {
    console.log(`addChapter called`);

    const addedChapterId = await this.chapterStorage.add(chapter)
    const addedChapter = await this.chapterStorage.get(addedChapterId)
    return addedChapter as IChapter;
  }

  public async getChapter(id: number) {
    return await this.chapterStorage.get(id);
  }

  public async getChapters(entityId: number) {
    let result: IChapter[]
    const allChapters = await this.chapterStorage.toArray();
    const filteredChapters = allChapters.filter((c) => c.entityId === entityId)

    return filteredChapters
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
    const allChapters = await this.chapterStorage.toArray()
    const filteredChapters = allChapters.filter((b) => b.entityId !== entityId)
    const deletedChapters = allChapters.filter((b) => b.entityId === entityId)
    await this.chapterStorage.clear()
    await this.chapterStorage.bulkAdd(filteredChapters)
    return deletedChapters
  }
}
