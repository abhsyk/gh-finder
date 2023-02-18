import { User } from '../../interfaces/User';
import { ActionType } from '../actionTypes';

export interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
}

export interface FetchUsersCompleteAction {
  type: ActionType.FETCH_USERS_COMPLETE;
  payload: User[];
}

export interface ClearUsersAction {
  type: ActionType.CLEAR_USERS;
}

export type GithubsAction =
  | FetchUsersAction
  | FetchUsersCompleteAction
  | ClearUsersAction;
