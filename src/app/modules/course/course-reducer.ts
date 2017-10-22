import { CourseActions, CourseActionTypes } from './course-actions';
import { CourseState, INITIAL_COURSE_STATE } from './course-model';


export function courseReducer(state: CourseState = INITIAL_COURSE_STATE, action: CourseActions) {
  switch (action.type) {
    case CourseActionTypes.ADD_COURSE: return { ...state, addCourse: action.payload };
    case CourseActionTypes.ADD_COURSE_FAILURE: return { ...state, addCourseFailure: action.payload };
    case CourseActionTypes.ADD_COURSE_SUCCESS: return { ...state, addCourseSuccess: action.payload };
    case CourseActionTypes.LOAD_COURSE: return { ...state, loadCourse: action.payload };
    case CourseActionTypes.LOAD_COURSE_FAILURE: return { ...state, loadCourseFailure: action.payload };
    case CourseActionTypes.LOAD_COURSE_SUCCESS: return { ...state, loadCourseSuccess: action.payload };
    case CourseActionTypes.REMOVE_COURSE: return { ...state, removeCourse: action.payload };
    case CourseActionTypes.REMOVE_COURSE_FAILURE: return { ...state, removeCourseFailure: action.payload };
    case CourseActionTypes.REMOVE_COURSE_SUCCESS: return { ...state, removeCourseSuccess: action.payload };
    case CourseActionTypes.ADD_COURSES: return { ...state, addCourses: action.payload };
    case CourseActionTypes.ADD_COURSES_FAILURE: return { ...state, addCoursesFailure: action.payload };
    case CourseActionTypes.ADD_COURSES_SUCCESS: return { ...state, addCoursesSuccess: action.payload };
    case CourseActionTypes.LOAD_COURSES: return { ...state, loadCourses: action.payload };
    case CourseActionTypes.LOAD_COURSES_FAILURE: return { ...state, loadCoursesFailure: action.payload };
    case CourseActionTypes.LOAD_COURSES_SUCCESS: return { ...state, loadCoursesSuccess: action.payload };
    case CourseActionTypes.REMOVE_COURSES: return { ...state, removeCourses: action.payload };
    case CourseActionTypes.REMOVE_COURSES_FAILURE: return { ...state, removeCoursesFailure: action.payload };
    case CourseActionTypes.REMOVE_COURSES_SUCCESS: return {   ...state, removeCoursesSuccess: action.payload };
    default : return state;
  }
}
