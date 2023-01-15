import { ISummary } from './summary.interface';
import { ICommentary } from './commentary.interface';
import { IOpinion } from './opinion.interface';

export enum IEntityType {
  COLLECTION = "COLLECTION",
  BOOK = "BOOK",
  CHAPTER = "CHAPTER",
  GENRE = "GENRE"
}

export enum IEntityStatus {
  READ = 'READ',
  READING = 'READING',
  TO_READ = 'TO_READ'
}

// TODO Finish
enum IEntityAttribute {
  COMMENTARY = 'COMMENTARY',
  CITATION = 'CITATION',
}


/**
 * Could be a Collection, Book or Chapter
 */
export interface IEntity {
  id: string | number;
  /**
   * Each entity can be whole read or not.
   */
  read: boolean;
  /**
   * Each entity could have an amount of pages.
   */
  pages?: string;
  status?: IEntityStatus;
  progres?: number;
  /**
   * Decides if the entity is part of the favorits.
   */
  favorite?: boolean;
  /**
   * List of subjects that are related DIRECTLY to the entity
   */
  subjects?: number[];
  commentary?: ICommentary;
  comments?: number[];
  opinion?: IOpinion;
  citations?: number[];
  events?: number[];
  flashcards?: number[];
  notes?: number[];
  questions?: number[];
  /**
   * There is only one summary for each entity.
   */
  summary?: ISummary;
  words?: number[];
}
