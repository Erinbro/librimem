import { IEntity, IEntityType } from './entity.interface';
import { IAttribute } from './attribute.interface';

export interface IChapter extends IEntity { // IEntity adds pages, read
  title: string,
  /**
   * ID of the book
   */
  entityId: number;
  /**
   * e.g. 1.1.1
   */
  index: string;
  /**
   * Number of page where chapter starts
   */
  page?: number;
}


