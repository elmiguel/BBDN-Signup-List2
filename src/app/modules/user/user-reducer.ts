import { UserState, INITIAL_USER_STATE } from './user-model';
import { UserActions, UserActionTypes } from './user-actions';



export function userReducer(state: UserState =  INITIAL_USER_STATE, action: UserActions) {
  switch (action.payload) {
    case UserActionTypes.ADD_USER: return { ...state, addUser: action.payload };
    case UserActionTypes.ADD_USER_FAILURE: return { ...state, addUserFailure: action.payload };
    case UserActionTypes.ADD_USER_SUCCESS: return { ...state, addUserSuccess: action.payload };
    case UserActionTypes.LOAD_USER: return { ...state, loadUser: action.payload };
    case UserActionTypes.LOAD_USER_FAILURE: return { ...state, loadUserFailure: action.payload };
    case UserActionTypes.LOAD_USER_SUCCESS: return { ...state, loadUserSuccess: action.payload };
    case UserActionTypes.REMOVE_USER: return { ...state, removeUser: action.payload };
    case UserActionTypes.REMOVE_USER_FAILURE: return { ...state, removeUserFailure: action.payload };
    case UserActionTypes.REMOVE_USER_SUCCESS: return { ...state, removeUserSuccess: action.payload };
    case UserActionTypes.ADD_USERS: return { ...state, addUsers: action.payload };
    case UserActionTypes.ADD_USERS_FAILURE: return { ...state, addUsersFailure: action.payload };
    case UserActionTypes.ADD_USERS_SUCCESS: return { ...state, addUsersSuccess: action.payload };
    case UserActionTypes.LOAD_USERS: return { ...state, loadUsers: action.payload };
    case UserActionTypes.LOAD_USERS_FAILURE: return { ...state, loadUsersFailure: action.payload };
    case UserActionTypes.LOAD_USERS_SUCCESS: return { ...state, loadUsersSuccess: action.payload };
    case UserActionTypes.REMOVE_USERS: return { ...state, removeUsers: action.payload };
    case UserActionTypes.REMOVE_USERS_FAILURE: return { ...state, removeUsersFailure: action.payload };
    case UserActionTypes.REMOVE_USERS_SUCCESS: return { ...state, removeUsersSuccess: action.payload };
    default: return state;
  }
}
