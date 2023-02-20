import { User } from '../../interfaces/User';
import { ActionType } from '../actionTypes';

export interface GetSingleUserAction {
  type: ActionType.GET_SINGLE_USER;
  payload: User;
}
export interface GetUserReposAction {
  type: ActionType.GET_USER_REPOS;
  payload: any;
}
export interface ClearOneUserAction {
  type: ActionType.CLEAR_ONE_USER;
}

export type UserDetailAction =
  | GetSingleUserAction
  | GetUserReposAction
  | ClearOneUserAction;
