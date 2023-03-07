export interface IReadable {
  id: number;
  entityId: number;
  /**
   * Types: BOOK, CHAPTER, ARTICLE
   */
  type: string;
  title: string;
  /**
   * base64 string of the binary data
   */
  data: string;
  /**
   * base64 string of the cover
   */
  cover: string;
}
