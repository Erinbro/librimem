import { ISubject } from "./subject.interface";
import { IEntity, IEntityType } from './entity.interface';

export interface IChapter extends IEntity { // IEntity adds pages, read
  id?: number;
  type: IEntityType.CHAPTER;
}


