import { IEntityType } from './entity.interface';

export interface IWord {
  id: number;
  /**
   * Possibilities: "TERM"
   */
  type: string;
  /**
   * The actual word
   */
  word: string;
  /**
   * The meaning of the word
   */
  meaning: string;
}

enum IWordType {
  /**
   * A word whose significanse we do not know
   */
  LOANWORD = "LOANWORD",
  /**
   * A word that is part of the terminology
   */
  TERM = "TERM",
}
