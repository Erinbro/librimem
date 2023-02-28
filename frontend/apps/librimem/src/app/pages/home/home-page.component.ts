import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'librimem-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  constructor(private router: Router) { }

  navigateToAuth(page: string) {
    switch (page) {
      case "register": {
        this.router.navigate(["auth", "register"])
      }
        break;
      case "login": {
        this.router.navigate(["auth", "login"])
      }
        break;
    }
  }


}

