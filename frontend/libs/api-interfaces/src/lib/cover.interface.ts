/**
 * Cover of a readable
 */
export interface ICover {
  id: number
  /**
   * The id of the readable this cover belongs to.
   * (foreign key)
   */
  readableId: number
  /**
   * BOOK, CHAPTER, ARTICLE
   */
  readableType: string;
  /**
   * base64 encoded value of the cover
   */
  data: string;
}
