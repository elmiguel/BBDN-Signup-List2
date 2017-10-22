import { CourseState } from './modules/course/course-model';
import { courseReducer } from './modules/course/course-reducer';
import { ActionReducerMap } from '@ngrx/store';
// import states and their reducers

export interface ApplicationState {
  courses: CourseState;
}

export const APP_REDUCER: ActionReducerMap<ApplicationState> = {
  courses: courseReducer
  // users: UserReducer,
  // lists: ListReducer,
  // groups: GroupReducer
};

