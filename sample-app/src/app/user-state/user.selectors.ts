import { Selector } from '@ngxs/store';
import { User } from './user.model';
import { UserState, UserStateModel } from './user.state';

export class UserSelectors {
  @Selector([UserState])
  static premium(state: UserStateModel): User[] {
    const premium = new Set(state.premiumIds);
    return state.users.filter((user) => premium.has(user.id));
  }

  @Selector([UserState])
  static users(state: UserStateModel): User[] {
    return state.users.map((user) => ({
      ...user,
      age: this.age(user.birthDate),
    }));
  }

  private static age(birthDate: Date): number {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
