import { User } from '../../interfaces/User';
import { ActionType } from '../actionTypes';

export interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
  payload: User[];
}

export interface ClearUsersAction {
  type: ActionType.CLEAR_USERS;
}

export type GithubsAction = FetchUsersAction | ClearUsersAction;
