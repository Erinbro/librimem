import { IEntityType, ICommentary, IOpinion, ISummary, IEntityStatus, IBook } from '@librimem/api-interfaces';

export class Book implements IBook {
  title = "";
  author_prename = "";
  author_name = "";
  currentPage?: number | undefined;
  publishingHouse?: string | undefined;
  language?: string | undefined;
  rating?: number | undefined;
  cover?: string | undefined;
  id: string | number = 0;
  type: IEntityType = IEntityType.BOOK;
  read = false;
  pages?: string | undefined;
  status?: IEntityStatus | undefined = IEntityStatus.TO_READ;
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
