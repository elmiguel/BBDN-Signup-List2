import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseComponent],
  providers: [CourseService]
})
export class CourseModule { }
