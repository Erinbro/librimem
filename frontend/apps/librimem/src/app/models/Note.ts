import { INote } from '@librimem/api-interfaces';

export class Note implements Omit<INote, "id">{
  title = "";
  note = "";
  type = "CHAPTER";
  entityId = "";
  chapterId = "";
  favorite = false;
  createdAt = new Date().toJSON();
  updatedAt = new Date().toJSON();
}
