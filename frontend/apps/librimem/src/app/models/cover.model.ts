import { ICover } from '@librimem/api-interfaces';

export class Cover implements Omit<ICover, "id">{
  readableId = 0;
  readableType = "";
  data = "";

}
