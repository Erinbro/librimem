import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { IUser } from '@librimem/api-interfaces';
import { selectUserStateUser } from '../../state/user/user.selector';
import { JwtHelperService } from "@auth0/angular-jwt"

@Injectable()
export class AuthService {

  user!: IUser

  constructor(store: Store<IStore>, public jwtHelper: JwtHelperService) {
    store.select(selectUserStateUser).subscribe((user) => {
      if (!user) return;
      this.user = user;
    })
  }

  public isAuthenticated(): boolean {
    const token = this.user.token

    if (!token) return false

    return this.jwtHelper.isTokenExpired(token);
  }

  public getUserToken(): string {
    return this.user.token as string;
  }

}
