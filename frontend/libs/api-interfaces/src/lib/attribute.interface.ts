export interface IAttribute {
  /**
   * ID of the attribute
   */
  id: string;
  /**
   * Type of the attribute
   * Possible values are: "WORD" | "SUMMARY" | "NOTE"
   * | "FLASHCARD"
   */
  type: string
  /**
   * ID of the entity it corresponds to
   */
  entityId: string;
  /**
   * ID of the chapter this attribute belongs to
   */
  chapterId: string;
  /**
   * Decides if it is a favorite
   */
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
}
