import { ISummary } from './summary.interface';
import { ICommentary } from './commentary.interface';
import { IOpinion } from './opinion.interface';

export type IEntityType =
  "BOOK" |
  "CHAPTER"

export type IEntityStatus =
  'READ' |
  'READING' |
  'TO_READ'

// TODO Finish
export type IEntityAttribute =
  'COMMENTARY' |
  'CITATION' |
  "SUMMARY"


/**
 * Could be a Collection, Book or Chapter
 */
export interface IEntity {
  id: string;
  /**
   * Each entity can be whole read or not.
   */
  read: boolean;
  /**
   * Each entity could have an amount of pages.
   */
  pages?: string;
  // TODO implement IEntityStatus
  status?: string;
  progres?: number;
  summary?: ISummary;
  favorite?: boolean;
  // subjects?: number[];
  // commentary?: ICommentary;
  // comments?: number[];
  // opinion?: IOpinion;
  // citations?: number[];
  // events?: number[];
  // flashcards?: number[];
  // notes?: number[];
  // questions?: number[];
  // words?: number[];
}
