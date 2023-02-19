import { User } from '../../interfaces/User';
import { ActionType } from '../actionTypes';

export interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
}

export interface FetchUsersCompleteAction {
  type: ActionType.FETCH_USERS_COMPLETE;
  payload: User[];
}

export interface FetchUsersErrorAction {
  type: ActionType.FETCH_USERS_ERROR;
  payload: string;
}

export interface ClearUsersAction {
  type: ActionType.CLEAR_USERS;
}

export interface GetOneUserCompleteAction {
  type: ActionType.GET_ONE_USER_COMPLETE;
  payload: User;
}

export type GithubsAction =
  | FetchUsersAction
  | FetchUsersCompleteAction
  | FetchUsersErrorAction
  | ClearUsersAction
  | GetOneUserCompleteAction;
