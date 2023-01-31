import { IAttribute } from './attribute.interface';

/**
 * Interface for a note
 */
export interface INote extends IAttribute {
  title: string;
  note: string;
}
