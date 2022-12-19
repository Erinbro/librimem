import { IEntity, IEntityType } from './entity.interface';

export interface IChapter extends IEntity { // IEntity adds pages, read
  type: IEntityType.CHAPTER;
  /**
   * HTML
   */
  content: string;
}


