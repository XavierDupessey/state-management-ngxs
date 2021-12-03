import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
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
    <tr *ngFor="let user of users$ | async">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.birthDate | date }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>`,
})
export class MyComponent {
  @Select(UserSelectors.over25) readonly users$!: Observable<User[]>;
}
