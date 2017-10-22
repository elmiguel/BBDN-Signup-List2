import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppService } from './app.service';
import { Store, StoreModule } from '@ngrx/store';
import { APP_REDUCER, ApplicationState, INITIAL_APP_STATE } from './app-reducer';
import { SignUpListModule } from './modules/signup-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpListModule.forRoot(),
    StoreModule.forRoot(APP_REDUCER, { initialState: INITIAL_APP_STATE } )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
