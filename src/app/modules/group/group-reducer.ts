import { GroupActions, GroupActionTypes} from './group-actions';
import { GroupState, INITIAL_GROUP_STATE } from './group-model';

export function groupReducer(state: GroupState =  INITIAL_GROUP_STATE, action: GroupActions) {
  switch (action.payload) {
    case GroupActionTypes.ADD_GROUP: return { ...state, addGroup: action.payload };
    case GroupActionTypes.ADD_GROUP_FAILURE: return { ...state, addGroupFailure: action.payload };
    case GroupActionTypes.ADD_GROUP_SUCCESS: return { ...state, addGroupSuccess: action.payload };
    case GroupActionTypes.LOAD_GROUP: return { ...state, loadGroup: action.payload };
    case GroupActionTypes.LOAD_GROUP_FAILURE: return { ...state, loadGroupFailure: action.payload };
    case GroupActionTypes.LOAD_GROUP_SUCCESS: return { ...state, loadGroupSuccess: action.payload };
    case GroupActionTypes.REMOVE_GROUP: return { ...state, removeGroup: action.payload };
    case GroupActionTypes.REMOVE_GROUP_FAILURE: return { ...state, removeGroupFailure: action.payload };
    case GroupActionTypes.REMOVE_GROUP_SUCCESS: return { ...state, removeGroupSuccess: action.payload };
    case GroupActionTypes.ADD_GROUPS: return { ...state, addGroups: action.payload };
    case GroupActionTypes.ADD_GROUPS_FAILURE: return { ...state, addGroupsFailure: action.payload };
    case GroupActionTypes.ADD_GROUPS_SUCCESS: return { ...state, addGroupsSuccess: action.payload };
    case GroupActionTypes.LOAD_GROUPS: return { ...state, loadGroups: action.payload };
    case GroupActionTypes.LOAD_GROUPS_FAILURE: return { ...state, loadGroupsFailure: action.payload };
    case GroupActionTypes.LOAD_GROUPS_SUCCESS: return { ...state, loadGroupsSuccess: action.payload };
    case GroupActionTypes.REMOVE_GROUPS: return { ...state, removeGroups: action.payload };
    case GroupActionTypes.REMOVE_GROUPS_FAILURE: return { ...state, removeGroupsFailure: action.payload };
    case GroupActionTypes.REMOVE_GROUPS_SUCCESS: return { ...state, removeGroupsSuccess: action.payload };
    default: return state;
  }
}
