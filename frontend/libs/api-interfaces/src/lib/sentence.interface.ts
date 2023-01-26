import { IEntity } from "./entity.interface";

export interface ISentence extends Partial<IEntity> {
  /**
   * Content of the sentence
   */
  data: {
    /**
     * NOTE The value is the ID of the word.
     */
    [position: number]: number
  }
}
