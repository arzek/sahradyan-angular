import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app.state';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      AppState
    ]),
    !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
