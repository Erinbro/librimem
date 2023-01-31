import { IEntity, IEntityType } from './entity.interface';
import { IAttribute } from './attribute.interface';

export interface IChapter extends IEntity { // IEntity adds pages, read
  title: string,
  /**
   * ID of the book
   */
  entityId: number;
}


