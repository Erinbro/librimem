import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthClientService } from '../../../../services/http/user.client.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'librimem-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss'],
})
export class OauthComponent implements OnInit {

  url = ""

  constructor(private userClient: AuthClientService) { }

  ngOnInit(): void {
    this.url = environment.userAPI
  }

  oauth2() {
    this.userClient.oauth2().subscribe((v) => {
      console.log(v);

    })
  }



}
