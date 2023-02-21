import { IUser } from "@librimem/api-interfaces";

export class User implements Omit<IUser, "id"> {
  username = ""
  password = ""
}
