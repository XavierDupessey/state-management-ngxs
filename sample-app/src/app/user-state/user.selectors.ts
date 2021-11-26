import { Selector } from '@ngxs/store';
import { User } from './user.model';
import { UserState, UserStateModel } from './user.state';

export class UserSelectors {
  @Selector([UserState])
  static premiumIdsSlice(state: UserStateModel): number[] {
    return state.premiumIds;
  }

  @Selector([UserSelectors.premiumIdsSlice])
  static premiumIdsSet(premiumIdsSlice: number[]): Set<number> {
    return new Set(premiumIdsSlice);
  }

  @Selector([UserSelectors.premiumIdsSet, UserSelectors.usersSlice])
  static premium(premiumIdsSet: Set<number>, usersSlice: User[]): User[] {
    return usersSlice.filter((user) => premiumIdsSet.has(user.id));
  }

  @Selector([UserState])
  static usersSlice(state: UserStateModel): User[] {
    return state.users;
  }
}
