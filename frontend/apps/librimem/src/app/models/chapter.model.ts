import { IChapter, ICommentary, IEntityStatus, IEntityType, IOpinion, ISummary } from '@librimem/api-interfaces';

/**
 * Used to create the initial chapter that
 * gets first populated by the form and then
 * send to the backend
 */
export class Chapter implements Omit<IChapter, "id"> {
  userId = 0
  entityId = 0;
  type = "CHAPTER"
  isPublic = false;
  index = ""
  title = "";
  content?: string | undefined;
  read = false;
  page = 0;
  progress = 1;
  favorite = false
  createdAt = new Date().toJSON();
  updatedAt = new Date().toJSON();
}
