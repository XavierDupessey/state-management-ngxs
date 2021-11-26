import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserState, UserStateModel } from '../user-state/user.state';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let component: MyComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserState]), HttpClientTestingModule],
      declarations: [MyComponent],
    }).overrideComponent(MyComponent, { set: { template: '' } });

    component = TestBed.createComponent(MyComponent).componentInstance;

    const userInitialState: UserStateModel = {
      users: [{ id: 1, name: 'Marty McFly' }],
    };

    TestBed.inject(Store).reset({ user: userInitialState });
  });

  it('should get users', (done) => {
    component.users$.subscribe((users) => {
      expect(users).toEqual([{ id: 1, name: 'Marty McFly' }]);
      done();
    }, done.fail);
  });
});
