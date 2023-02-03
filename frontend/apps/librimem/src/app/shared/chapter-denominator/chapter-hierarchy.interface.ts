import { IChapter } from '@librimem/api-interfaces';
/**
 * Represents the hierarchy of the chapters
 * At the moment 7 levels of chapters are allowed
 */
export interface IChapterHierachry {
  /**
   * The actual chapter
   */
  chapter?: IChapter;
  /**
   * Amount of chapters of the book
   */
  chapterAmount?: number;
  index?: string;
  sub?: {
    chapter?: IChapter;
    index?: string;
    sub?: {

      chapter?: IChapter;
      index?: string;
      sub?: {
        chapter?: IChapter;
        index?: string;
        sub?: {
          chapter?: IChapter;
          index?: string;
          sub?: {

            chapter?: IChapter;
            index?: string;
            sub?: {
              chapter?: IChapter;
              index?: string;
              sub?: {
                chapter?: IChapter;
                index?: string;
              }[]

            }[]
          }[]

        }[]
      }[]
    }[]

  }[]

}
