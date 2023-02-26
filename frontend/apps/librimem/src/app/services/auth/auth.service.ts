import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { IUser } from '@librimem/api-interfaces';
import { selectUserStateUser } from '../../state/user/user.selector';
import { JwtHelperService } from "@auth0/angular-jwt"
import { AUTHENTICATED } from '../../state/user/user.actions';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  user!: Omit<IUser, "id">

  constructor(private store: Store<IStore>, public jwtHelper: JwtHelperService) {
    store.select(selectUserStateUser).subscribe((user) => {
      if (!user) return;
      this.user = user;
    })
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token")

    if (!token) return false

    this.store.dispatch(AUTHENTICATED())

    return this.jwtHelper.isTokenExpired(token);
  }

  public getUserToken(): string {
    return this.user.token as string;
  }

}
