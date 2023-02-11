import { IAttribute } from './attribute.interface';
/**
 * Interface for Flashcard
 */
export interface IFlashcard extends IAttribute {
  question: string;
  answer?: string;
  /**
   * TODO | LEARNING | LEARNT
   */
  status: string;
}

