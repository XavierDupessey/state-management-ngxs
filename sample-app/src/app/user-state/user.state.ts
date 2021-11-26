import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { User } from './user.model';

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [{ id: 1, name: 'Marty McFly' }],
  },
})
@Injectable()
export class UserState {}
