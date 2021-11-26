import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserActions } from './user-state/user.actions';

@Component({
  selector: 'app-root',
  template: `<my-component></my-component>`,
})
export class AppComponent {
  constructor(private readonly store: Store) {
    this.store.dispatch(new UserActions.Load());
  }
}
