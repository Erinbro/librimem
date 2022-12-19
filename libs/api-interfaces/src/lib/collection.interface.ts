export interface ICollection {
  id?: number;
  name: string;
  /**
   * IDs of the entities that belong to this collection
   */
  collection: number[];
}
