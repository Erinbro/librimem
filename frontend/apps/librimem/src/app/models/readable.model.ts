import { IReadable } from "@librimem/api-interfaces";

export class Readable implements Omit<IReadable, "id"> {
  type = "BOOK"
  entityId = 0;
  title = "";
  data = "";
  cover = "";
}
