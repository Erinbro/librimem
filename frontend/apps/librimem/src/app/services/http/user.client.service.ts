import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@librimem/api-interfaces';

/**
 * Handles the authentication logic
 */
@Injectable({
  providedIn: "root"
})
export class AuthClientService {

  url = environment.userAPI

  constructor(private http: HttpClient) { }

  /**
   * Adds a new user
   */
  public register(user: Omit<IUser, "id">) {
    return this.http.post(this.url + "/register", user);
  }
  /**
   * Authenticate user for a session
   */
  public login(user: IUser) {
    this.http.post(this.url + "/authenticate", user)
  }
  /**
   * Deletes the account
   */
  public deleteUser() { }

  public oauth2() {
    return this.http.get(this.url + "/oauth2")
  }


}
