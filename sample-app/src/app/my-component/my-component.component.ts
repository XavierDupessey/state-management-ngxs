import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '../user-state/user.model';
import { UserSelectors } from '../user-state/user.selectors';

@Component({
  selector: 'my-component',
  template: `<table>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Birthdate</td>
      <td>Age</td>
    </tr>
    <tr *ngFor="let user of over25">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.birthDate | date }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>`,
})
export class MyComponent {
  over25: User[] = [];

  constructor(private readonly store: Store) {
    this.store.select(UserSelectors.overAgeFn).subscribe((overAgeFn) => {
      this.over25 = overAgeFn(25);
    });
  }
}
