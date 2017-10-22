import { Action } from '@ngrx/store';
import { GroupState } from './group-model';

export enum GroupActionTypes {
  ADD_GROUP = '[Group] Add Group',
  ADD_GROUP_SUCCESS = '[Group] Add Group Success',
  ADD_GROUP_FAILURE = '[Group] Add Group Failure',
  LOAD_GROUP = '[Group] Load Group',
  LOAD_GROUP_SUCCESS = '[Group] Load Group Success',
  LOAD_GROUP_FAILURE = '[Group] Load Group Failure',
  REMOVE_GROUP = '[Group] Remove Group',
  REMOVE_GROUP_SUCCESS = '[Group] Remove Group Success',
  REMOVE_GROUP_FAILURE = '[Group] Remove Group Failure',
  ADD_GROUPS = '[Group] Add Groups',
  ADD_GROUPS_SUCCESS = '[Group] Add Groups Success',
  ADD_GROUPS_FAILURE = '[Group] Add Groups Failure',
  LOAD_GROUPS = '[Group] Load Groups',
  LOAD_GROUPS_SUCCESS = '[Group] Load Groups Success',
  LOAD_GROUPS_FAILURE = '[Group] Load Groups Failure',
  REMOVE_GROUPS = '[Group] Remove Groups',
  REMOVE_GROUPS_SUCCESS = '[Group] Remove Groups Success',
  REMOVE_GROUPS_FAILURE = '[Group] Remove Groups Failure'
}

export class AddGroupAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUP;

  constructor (public payload: GroupState) {}
}

export class AddGroupSuccessAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUP_SUCCESS;

  constructor (public payload: GroupState) {}
}

export class AddGroupFailureAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUP_FAILURE;

  constructor (public payload: GroupState) {}
}

export class LoadGroupAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUP;

  constructor (public payload: GroupState) {}
}

export class LoadGroupSuccessAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUP_SUCCESS;

  constructor (public payload: GroupState) {}
}

export class LoadGroupFailureAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUP_FAILURE;

  constructor (public payload: GroupState) {}
}

export class RemoveGroupAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUP;

  constructor (public payload: GroupState) {}
}

export class RemoveGroupSuccessAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUP_SUCCESS;

  constructor (public payload: GroupState) {}
}

export class RemoveGroupFailureAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUP_FAILURE;

  constructor (public payload: GroupState) {}
}

export class AddGroupsAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUPS;

  constructor (public payload: Array<GroupState>) {}

}

export class AddGroupsSuccessAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUPS_SUCCESS;

  constructor (public payload: Array<GroupState>) {}
}

export class AddGroupsFailureAction implements Action {
  readonly type = GroupActionTypes.ADD_GROUPS_FAILURE;

  constructor (public payload: GroupState) {}
}

export class LoadGroupsAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUPS;

  constructor (public payload: Array<GroupState>) {}
}

export class LoadGroupsSuccessAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUPS_SUCCESS;

  constructor (public payload: Array<GroupState>) {}
}

export class LoadGroupsFailureAction implements Action {
  readonly type = GroupActionTypes.LOAD_GROUPS_FAILURE;

  constructor (public payload: Array<GroupState>) {}
}

export class RemoveGroupsAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUPS;

  constructor (public payload: Array<GroupState>) {}
}

export class RemoveGroupsSuccessAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUPS_SUCCESS;

  constructor (public payload: Array<GroupState>) {}
}

export class RemoveGroupsFailureAction implements Action {
  readonly type = GroupActionTypes.REMOVE_GROUPS_FAILURE;

  constructor (public payload: Array<GroupState>) {}
}


export type GroupActions =
  AddGroupAction |
  AddGroupSuccessAction |
  AddGroupFailureAction |
  LoadGroupAction |
  LoadGroupSuccessAction |
  LoadGroupFailureAction |
  RemoveGroupAction |
  RemoveGroupSuccessAction |
  RemoveGroupFailureAction |
  AddGroupAction |
  AddGroupSuccessAction |
  AddGroupFailureAction |
  LoadGroupAction |
  LoadGroupSuccessAction |
  LoadGroupFailureAction |
  RemoveGroupAction |
  RemoveGroupSuccessAction |
  RemoveGroupFailureAction;
