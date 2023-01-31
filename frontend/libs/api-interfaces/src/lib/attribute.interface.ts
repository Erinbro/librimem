export interface IAttribute {
  /**
   * ID of the attribute
   */
  id: number;
  /**
   * Type of the attribute
   */
  type: "SUMMARY" | "NOTE" | "FLASHCARD" | "CITATION";
  /**
   * ID of the entity it corresponds to
   */
  entityId: number;
  /**
   * ID of the chapter this attribute belongs to
   */
  chapterId: number;
  /**
   * Decides if it is a favorite
   */
  favorite: boolean;
}
