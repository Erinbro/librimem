import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@librimem/api-interfaces';
import { Observable } from 'rxjs';

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
  public register(user: Omit<IUser, "id">): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.url + "/register", user);
  }
  /**
   * Authenticate user for a session
   */
  public login(user: IUser) {
    return this.http.post<{ token: string }>(this.url + "/authenticate", user)
  }

  // FIXME
  /**
   * Deletes the account
   */
  public deleteUser() {
    return;
  }

  public oauth2() {
    return this.http.get(this.url + "/oauth2")
  }


}
