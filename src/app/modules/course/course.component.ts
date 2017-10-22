import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../app-reducer';
import { Store } from '@ngrx/store';
import { CourseService } from './course.service';

@Component({
  selector: 'bb-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
  }

}
