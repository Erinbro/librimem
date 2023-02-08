import { Language, IEntityType, ICommentary, IOpinion, ISummary, IEntityStatus, IBook } from '@librimem/api-interfaces';

/**
 * Book for creating a book without id
 * It is created on the client side.
 */
export class Book implements Omit<IBook, "id"> {
  userId = 0;
  type: IEntityType = "BOOK";
  read = false;
  title = "";
  author_prename = "";
  author_name = "";
  current_page?: number | undefined;
  publishing_house?: string | undefined;
  language?: Language
  rating?: number | undefined;
  cover?: string | undefined;
  opinion?: IOpinion | undefined;
  pages?: string | undefined;
  status?: IEntityStatus = "TO_READ";
  progres?: number | undefined;
  favorite?: boolean | undefined;
  subjects?: number[] | undefined;
  commentary?: ICommentary | undefined;
  createdAt = new Date().toJSON();
  updatedAt = new Date().toJSON();
  // comments?: number[] | undefined;
  // citations?: number[] | undefined;
  // events?: number[] | undefined;
  // flashcards?: number[] | undefined;
  // notes?: number[] | undefined;
  // questions?: number[] | undefined;
  // summary?: ISummary | undefined;
  // words?: number[] | undefined;
}
