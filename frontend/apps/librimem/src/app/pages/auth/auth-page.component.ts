import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserStateIsAuthenticated } from '../../state/user/user.selector';
import { IStore } from '../../state/store';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'librimem-auth-page',
  template: `
  <div class="auth-page">
  <p>You are not yet logged in or are not registered.</p>
  <div>
    <div class="auth-page__register">
        <librimem-primary-button content="Register" (click)="goToOtherAuthPage('register')" />
    </div>
    <div class="auth-page__login">
      <librimem-primary-button content="Sign In"   (click)="goToOtherAuthPage('login')" />
    </div>
  </div>
</div>
  `,
  styleUrls: ['./auth-page.component.scss'],
  providers: [AuthService]
})
export class AuthPageComponent implements OnInit, OnDestroy {

  userSubscription!: Subscription;
  isAuthenticated = false

  constructor(private router: Router, private store: Store<IStore>) {

  }

  ngOnInit(): void {
    this.userSubscription = this.store.select(selectUserStateIsAuthenticated).subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  goToOtherAuthPage(page: "register" | "login") {
    console.log(`page: ${page}`);

    if (page === "register") {
      this.router.navigate(["auth", "register"])
    }
    else {
      this.router.navigate(["auth", "login"])
    }
  }
}
