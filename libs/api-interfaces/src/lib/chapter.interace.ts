import { ISubject } from "./subject.interface";

export interface IChapter {
  id?: number;
  /**
   * List of subjects that appear in the chapter
   */
  subjects: ISubject[];
}
