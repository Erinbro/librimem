import { IAttribute } from './attribute.interface';
export interface ICitation extends IAttribute {
  /**
   * The title of the citation
   */
  title?: string;
  /**
   * The citation itself in HTML
   */
  citation: string;
  /**
   * The page number where we find the citation
   */
  page?: number;
  /**
   * Decides if this citation is a favorite
   */
  favorite: boolean;
}
