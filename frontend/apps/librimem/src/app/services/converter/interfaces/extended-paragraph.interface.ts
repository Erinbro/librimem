/**
 * Interface for a paragraph with extended data
 */
export interface IExtendedParagraph extends HTMLParagraphElement {
  /**
   * Copy of the id
   */
  idCopy: string | number;
  /**
   * The number of words inside the
   */
  numberOfWords: number;
}
