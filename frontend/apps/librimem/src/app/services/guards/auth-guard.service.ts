import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
/**
 * Handles guard if user is authenticated
 */
@Injectable()
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    // If the user is not authenticated
    if (!this.auth.isAuthenticated()) {
      // then we redirect the user to the login page
      this.router.navigate(["auth/login"])
      return false
    }
    return true;
  }

}
