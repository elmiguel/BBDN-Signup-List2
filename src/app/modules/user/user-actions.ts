import { Action } from '@ngrx/store';
import { User } from './user-model';

export enum UserActionTypes {
  ADD_USER = '[User] Add User',
  ADD_USER_SUCCESS = '[User] Add User Success',
  ADD_USER_FAILURE = '[User] Add User Failure',
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  LOAD_USER_FAILURE = '[User] Load User Failure',
  REMOVE_USER = '[User] Remove User',
  REMOVE_USER_SUCCESS = '[User] Remove User Success',
  REMOVE_USER_FAILURE = '[User] Remove User Failure',
  ADD_USERS = '[User] Add Users',
  ADD_USERS_SUCCESS = '[User] Add Users Success',
  ADD_USERS_FAILURE = '[User] Add Users Failure',
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAILURE = '[User] Load Users Failure',
  REMOVE_USERS = '[User] Remove Users',
  REMOVE_USERS_SUCCESS = '[User] Remove Users Success',
  REMOVE_USERS_FAILURE = '[User] Remove Users Failure'
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor (public payload: User) {}
}

export class AddUserSuccessAction implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;

  constructor (public payload: User) {}
}

export class AddUserFailureAction implements Action {
  readonly type = UserActionTypes.ADD_USER_FAILURE;

  constructor (public payload: User) {}
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LOAD_USER;

  constructor (public payload: User) {}
}

export class LoadUserSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;

  constructor (public payload: User) {}
}

export class LoadUserFailureAction implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAILURE;

  constructor (public payload: User) {}
}

export class RemoveUserAction implements Action {
  readonly type = UserActionTypes.REMOVE_USER;

  constructor (public payload: User) {}
}

export class RemoveUserSuccessAction implements Action {
  readonly type = UserActionTypes.REMOVE_USER_SUCCESS;

  constructor (public payload: User) {}
}

export class RemoveUserFailureAction implements Action {
  readonly type = UserActionTypes.REMOVE_USER_FAILURE;

  constructor (public payload: User) {}
}

export class AddUsersAction implements Action {
  readonly type = UserActionTypes.ADD_USERS;

  constructor (public payload: Array<User>) {}

}

export class AddUsersSuccessAction implements Action {
  readonly type = UserActionTypes.ADD_USERS_SUCCESS;

  constructor (public payload: Array<User>) {}
}

export class AddUsersFailureAction implements Action {
  readonly type = UserActionTypes.ADD_USERS_FAILURE;

  constructor (public payload: User) {}
}

export class LoadUsersAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS;

  constructor (public payload: Array<User>) {}
}

export class LoadUsersSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor (public payload: Array<User>) {}
}

export class LoadUsersFailureAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAILURE;

  constructor (public payload: Array<User>) {}
}

export class RemoveUsersAction implements Action {
  readonly type = UserActionTypes.REMOVE_USERS;

  constructor (public payload: Array<User>) {}
}

export class RemoveUsersSuccessAction implements Action {
  readonly type = UserActionTypes.REMOVE_USERS_SUCCESS;

  constructor (public payload: Array<User>) {}
}

export class RemoveUsersFailureAction implements Action {
  readonly type = UserActionTypes.REMOVE_USERS_FAILURE;

  constructor (public payload: Array<User>) {}
}

export type UserActions =
AddUserAction |
AddUserSuccessAction |
AddUserFailureAction |
LoadUserAction |
LoadUserSuccessAction |
LoadUserFailureAction |
RemoveUserAction |
RemoveUserSuccessAction |
RemoveUserFailureAction |
AddUsersAction |
AddUsersSuccessAction |
AddUsersFailureAction |
LoadUsersAction |
LoadUsersSuccessAction |
LoadUsersFailureAction |
RemoveUsersAction |
RemoveUsersSuccessAction |
RemoveUsersFailureAction;
