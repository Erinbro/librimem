import { INote } from '@librimem/api-interfaces';

export class Note implements Omit<INote, "id">{
  userId = 0;
  title = "";
  note = "";
  type = "CHAPTER";
  entityId = 0;
  chapterId = 0;
  favorite = false;
  createdAt = new Date().toJSON();
  updatedAt = new Date().toJSON();
}
