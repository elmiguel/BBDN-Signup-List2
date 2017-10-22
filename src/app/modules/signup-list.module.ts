import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course/course.service';
import { GroupService } from './group/group.service';
import { UserService } from './user/user.service';
import { ListService } from './list/list.service';
import { CourseModule } from './course/course.module';
import { GroupModule } from './group/group.module';
import { ListModule } from './list/list.module';
import { UserModule } from './user/user.module';
import { CourseComponent } from './course/course.component';
import { GroupComponent } from './group/group.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    CourseModule,
    GroupModule,
    ListModule,
    UserModule
  ],
  declarations: [
    CourseComponent,
    GroupComponent,
    ListComponent,
    UserComponent
  ],
  exports: [
    CourseComponent,
    GroupComponent,
    ListComponent,
    UserComponent
  ],
  providers: []
})
export class SignUpListModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: SignUpListModule, providers: [
      CourseService,
      GroupService,
      ListService,
      UserService
    ]};
  }}
