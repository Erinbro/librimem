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
  templateUrl: "./login-page.component.html",
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userForm!: FormGroup

  constructor(private store: Store<IStore>, private authClientService: AuthClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(new User())
  }

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

  referToRegisterPage() {
    this.router.navigate(["auth", "register"])
  }
}
