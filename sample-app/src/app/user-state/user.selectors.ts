import { Selector } from '@ngxs/store';
import { User } from './user.model';
import { UserState, UserStateModel } from './user.state';

export class UserSelectors {
  @Selector([UserState])
  static users(state: UserStateModel): User[] {
    return state.users;
  }
}
