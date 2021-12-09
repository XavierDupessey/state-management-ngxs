import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
      <li *ngFor="let item of items">
        <span>{{ item.id }}: </span>
        <span>{{ item.name }}</span>
      </li>
    </ul>

    <button (click)="update()">update</button>`,
})
export class AppComponent {
  items = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2 ' },
  ];

  update() {
    this.items = [
      { id: 1, name: 'item 1' },
      { id: 2, name: this.items[1].name + '.' },
    ];
  }
}
