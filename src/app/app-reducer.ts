import { ActionReducerMap } from '@ngrx/store';
import { courseReducer } from './modules/course/course-reducer';
import { groupReducer } from './modules/group/group-reducer';
import { userReducer } from './modules/user/user-reducer';
import { CourseState, INITIAL_COURSE_STATE } from './modules/course/course-model';
import { GroupState, INITIAL_GROUP_STATE } from './modules/group/group-model';
import { UserState, INITIAL_USER_STATE } from './modules/user/user-model';
// import states and their reducers

export interface ApplicationState {
  courses: CourseState;
  groups: GroupState;
  users: UserState;
}
export const INITIAL_APP_STATE: ApplicationState = {
  courses: INITIAL_COURSE_STATE,
  groups: INITIAL_GROUP_STATE,
  users: INITIAL_USER_STATE
};

export const APP_REDUCER: ActionReducerMap<ApplicationState> = {
  courses: courseReducer,
  groups: groupReducer,
  users: userReducer,
  // lists: listReducer,
};

