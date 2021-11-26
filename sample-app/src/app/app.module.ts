import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my-component.component';
import { UserState } from './user-state/user.state';

@NgModule({
  declarations: [AppComponent, MyComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production,
      executionStrategy: NoopNgxsExecutionStrategy,
      selectorOptions: { injectContainerState: false, suppressErrors: false },
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      maxAge: 50,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
