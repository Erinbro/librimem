import { IFlashcard } from '@librimem/api-interfaces';

export class Flashcard implements Omit<IFlashcard, "id">{
  question = "";
  answer?: string | undefined;
  userId = 0;
  type = "FLASHCARD";
  entityId = 0;
  chapterId = 0;
  favorite = false;
  createdAt = new Date().toJSON();
  updatedAt = new Date().toJSON();
  status = "TODO"
}
