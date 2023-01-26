import { IEntityType } from './entity.interface';
export interface IWord {
  id?: number;
  type: IWordType;
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
  /**
   * Could be a person, company, animal, ...
   */
  SUBJECT = "SUBJECT"
}
