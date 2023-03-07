import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { AuthClientService } from '../../../../services/http/user.client.service';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import { LOGIN } from '../../../../state/user/user.actions';

@Component({
  selector: 'librimem-login-page',
  template: `
  <div class="login-page">
    <form [formGroup]="userForm">

    <div class="login-page__username">
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput formControlName="username" />
      </mat-form-field>
    </div>
    <div class="login-page__password">
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" formControlName="password" />
      </mat-form-field>
    </div>
    </form>
    <div class="login-page__button">
      <librimem-primary-button (click)="login()" content="Login" />
    </div>

  </div>
  `,
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userForm!: FormGroup

  constructor(private store: Store<IStore>, private authClientService: AuthClientService, private formBuilder: FormBuilder, private router: Router) { }

  login() {
    const user = this.userForm.getRawValue()
    localStorage.removeItem("token")
    this.authClientService.login(user).subscribe((token) => {
      localStorage.setItem("token", token.token)
      this.store.dispatch(LOGIN({ user }))
      this.router.navigate(["books"]).then(() => {
        window.location.reload()
      })
    })
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(new User())
  }
}
