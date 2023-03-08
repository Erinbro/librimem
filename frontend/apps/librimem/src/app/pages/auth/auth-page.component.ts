import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserStateIsAuthenticated } from '../../state/user/user.selector';
import { IStore } from '../../state/store';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'librimem-auth-page',
  templateUrl: "./auth-page.component.html",
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

  logout() {
    window.localStorage.removeItem("token")
    window.location.reload()
  }
}
