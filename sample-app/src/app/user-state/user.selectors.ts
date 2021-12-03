import { Selector } from '@ngxs/store';
import { User } from './user.model';
import { UserState, UserStateModel } from './user.state';

export type OverAgeFn = (age: number) => User[];

export class UserSelectors {
  @Selector([UserState])
  static overAgeFn(state: UserStateModel): OverAgeFn {
    return (age: number) =>
      state.users
        .map((user) => ({
          ...user,
          age: this.age(user.birthDate),
        }))
        .filter((user) => user.age > age);
  }

  private static age(birthDate: Date): number {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
