import { IChapter, ICommentary, IEntityStatus, IEntityType, IOpinion, ISummary } from '@librimem/api-interfaces';

export class Chapter implements IChapter {
  type: IEntityType = IEntityType.CHAPTER
  title = "";
  content?: string | undefined;
  id: string | number = new Date().getTime().toString();
  read = false;
  pages?: string | undefined;
  status?: IEntityStatus | undefined;
  progres?: number | undefined;
  favorite?: boolean | undefined;
  subjects?: number[] | undefined;
  commentary?: ICommentary | undefined;
  comments?: number[] | undefined;
  opinion?: IOpinion | undefined;
  citations?: number[] | undefined;
  events?: number[] | undefined;
  flashcards?: number[] | undefined;
  notes?: number[] | undefined;
  questions?: number[] | undefined;
  summary?: ISummary | undefined;
  words?: number[] | undefined;

}
