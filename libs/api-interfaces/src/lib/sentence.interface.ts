import { IEntity } from "./entity.interface";

export interface ISentence extends Partial<IEntity> {
    id?: number;
    /**
     * Content of the sentence
     */
    words: {
        /**
         * NOTE The value is the ID of the word.
         */
        [position: number]: number
    }
}
