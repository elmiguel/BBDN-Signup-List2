import { Action } from '@ngrx/store';
import { CourseState } from './course-model';

export enum CourseActionTypes {
  ADD_COURSE = '[Course] Add Course',
  ADD_COURSE_SUCCESS = '[Course] Add Course Success',
  ADD_COURSE_FAILURE = '[Course] Add Course Failure',
  LOAD_COURSE = '[Course] Load Course',
  LOAD_COURSE_SUCCESS = '[Course] Load Course Success',
  LOAD_COURSE_FAILURE = '[Course] Load Course Failure',
  REMOVE_COURSE = '[Course] Remove Course',
  REMOVE_COURSE_SUCCESS = '[Course] Remove Course Success',
  REMOVE_COURSE_FAILURE = '[Course] Remove Course Failure',
  ADD_COURSES = '[Course] Add Courses',
  ADD_COURSES_SUCCESS = '[Course] Add Courses Success',
  ADD_COURSES_FAILURE = '[Course] Add Courses Failure',
  LOAD_COURSES = '[Course] Load Courses',
  LOAD_COURSES_SUCCESS = '[Course] Load Courses Success',
  LOAD_COURSES_FAILURE = '[Course] Load Courses Failure',
  REMOVE_COURSES = '[Course] Remove Courses',
  REMOVE_COURSES_SUCCESS = '[Course] Remove Courses Success',
  REMOVE_COURSES_FAILURE = '[Course] Remove Courses Failure'
}

export class AddCourseAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSE;

  constructor (public payload: CourseState) {}
}

export class AddCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSE_SUCCESS;

  constructor (public payload: CourseState) {}
}

export class AddCourseFailureAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSE_FAILURE;

  constructor (public payload: CourseState) {}
}

export class LoadCourseAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE;

  constructor (public payload: CourseState) {}
}

export class LoadCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_SUCCESS;

  constructor (public payload: CourseState) {}
}

export class LoadCourseFailureAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_FAILURE;

  constructor (public payload: CourseState) {}
}

export class RemoveCourseAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSE;

  constructor (public payload: CourseState) {}
}

export class RemoveCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSE_SUCCESS;

  constructor (public payload: CourseState) {}
}

export class RemoveCourseFailureAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSE_FAILURE;

  constructor (public payload: CourseState) {}
}

export class AddCoursesAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSES;

  constructor (public payload: Array<CourseState>) {}

}

export class AddCoursesSuccessAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSES_SUCCESS;

  constructor (public payload: Array<CourseState>) {}
}

export class AddCoursesFailureAction implements Action {
  readonly type = CourseActionTypes.ADD_COURSES_FAILURE;

  constructor (public payload: CourseState) {}
}

export class LoadCoursesAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES;

  constructor (public payload: Array<CourseState>) {}
}

export class LoadCoursesSuccessAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES_SUCCESS;

  constructor (public payload: Array<CourseState>) {}
}

export class LoadCoursesFailureAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES_FAILURE;

  constructor (public payload: Array<CourseState>) {}
}

export class RemoveCoursesAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSES;

  constructor (public payload: Array<CourseState>) {}
}

export class RemoveCoursesSuccessAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSES_SUCCESS;

  constructor (public payload: Array<CourseState>) {}
}

export class RemoveCoursesFailureAction implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSES_FAILURE;

  constructor (public payload: Array<CourseState>) {}
}

export type CourseActions =
AddCourseAction |
AddCourseSuccessAction |
AddCourseFailureAction |
LoadCourseAction |
LoadCourseSuccessAction |
LoadCourseFailureAction |
RemoveCourseAction |
RemoveCourseSuccessAction |
RemoveCourseFailureAction |
AddCoursesAction |
AddCoursesSuccessAction |
AddCoursesFailureAction |
LoadCoursesAction |
LoadCoursesSuccessAction |
LoadCoursesFailureAction |
RemoveCoursesAction |
RemoveCoursesSuccessAction |
RemoveCoursesFailureAction;

