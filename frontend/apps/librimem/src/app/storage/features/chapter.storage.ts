import { IChapter } from '@librimem/api-interfaces';
import { db } from '../storage';
import { LOG } from '../../utils/logger';

type ChapterWithoutId = Omit<IChapter, "id">

export class ChapterStorageApi {
  private chapterStorage = db.chapters

  public async addChapter(chapter: ChapterWithoutId) {
    return await this.chapterStorage.add(chapter);
  }

  public async getChapter(id: number) {
    return await this.chapterStorage.get(id);
  }

  public async getChapters() {
    return await this.chapterStorage.toArray();
  }

  public async updateChapter(updatedChapter: ChapterWithoutId) {
    LOG.info(`Deleted Chapter in IndexedDB with title: ${updatedChapter.title}`)
    // this.chapterStorage.delete(updatedChapter)
  }

  public async deleteChapter(id: number) {

  }


  public async deleteAllChapterofBook(bookId: number) {

  }
}
