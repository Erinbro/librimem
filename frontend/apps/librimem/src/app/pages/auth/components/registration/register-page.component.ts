import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../services/auth/auth.service';
import { AuthClientService } from '../../../../services/http/user.client.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { selectUserStateUser } from '../../../../state/user/user.selector';
import { User } from '../../../../models/user.model';
import { REGISTER } from '../../../../state/user/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'librimem-register-page',
  templateUrl: "./register-page.component.html",
  styleUrls: ['./register-page.component.scss'],
  providers: [AuthService]
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  authSubscription!: Subscription;
  userForm!: FormGroup

  constructor(private store: Store<IStore>, private authService: AuthService, private authClientService: AuthClientService, private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(new User());
  }

  ngOnDestroy(): void {
    // this.authSubscription.unsubscribe()
  }

  register() {
    this.authSubscription = this.authClientService
      .register(this.userForm.getRawValue()).subscribe((res) => {
        localStorage.setItem("token", res.token);
        const username = this.userForm.getRawValue().username;
        this.store.dispatch(REGISTER({ username }))
        this.router.navigate(["books"])
      })
  }

  referToLoginPage() {
    this.router.navigate(["auth", "login"])
  }
}
