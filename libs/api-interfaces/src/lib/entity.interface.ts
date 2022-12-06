enum IEntityType {
  COLLECTION = "COLLECTION",
  BOOK = "BOOK",
  CHAPTER = "CHAPTER"
}
/**
 * Could be a Collection, Book or Chapter
 */
export interface IEntity {
  id?: number;
  type: IEntityType;
}
