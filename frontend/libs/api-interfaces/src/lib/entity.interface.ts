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
  id: number;
  /**
   * ID of user
   */
  userId: number;
  /**
   * Each entity could have an amount of pages.
   */
  pages?: string;
  // TODO implement IEntityStatus
  status?: string;
  progres?: number;
  summary?: ISummary;
  isPublic: boolean;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
}
