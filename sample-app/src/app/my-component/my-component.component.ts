import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '../user-state/user.model';
import { UserSelectors } from '../user-state/user.selectors';

@Component({
  selector: 'my-component',
  template: `<table>
    <tr>
      <td>Name</td>
    </tr>
    <tr *ngFor="let user of users$ | async">
      <td>{{ user.name }}</td>
    </tr>
  </table>`,
})
export class MyComponent {
  @Select(UserSelectors.users) readonly users$!: Observable<User[]>;
}
