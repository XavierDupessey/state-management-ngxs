import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { random } from 'lodash';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserActions } from './user.actions';
import { User } from './user.model';

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
      .pipe(
        map((users) =>
          users.map((user) => ({
            ...user,
            birthDate: new Date(random(1950, 2020), random(11), random(1, 25)),
          }))
        ),
        tap((users) => patchState({ users }))
      );
  }
}
