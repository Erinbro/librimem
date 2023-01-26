import { IEntity } from "./entity.interface";

export interface IParagraph extends Partial<IEntity> {
    id?: number;
    paragraph: {
        /**
         * NOTE The value is the position of the sentence in the paragraph and the value is the ID of the sentence.
         */
        [sentencePosition: number]: number;
    }
}

