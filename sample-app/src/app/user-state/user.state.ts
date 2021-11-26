import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { UserActions } from './user.actions';

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [],
  },
})
@Injectable()
export class UserState {
  constructor(private readonly httpClient: HttpClient) {}

  @Action(UserActions.Load)
  load({ patchState }: StateContext<UserStateModel>): Observable<unknown> {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(tap((users) => patchState({ users })));
  }
}
