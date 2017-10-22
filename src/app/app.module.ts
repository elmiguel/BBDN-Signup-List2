import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseModule } from './modules/course/course.module';
import { UserModule } from './modules/user/user.module';
import { ListModule } from './modules/list/list.module';
import { GroupModule } from './modules/group/group.module';
import { AppService } from './app.service';
import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from './app-reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    GroupModule,
    ListModule,
    UserModule,
    StoreModule.forRoot(APP_REDUCER, { initalState: ApplicationState })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
