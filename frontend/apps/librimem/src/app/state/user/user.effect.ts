import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthClientService } from '../../services/http/user.client.service';
import { LOGIN } from './user.actions';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserEffects {
  constructor(private actions$: Actions, private userClient: AuthClientService) { }

}
