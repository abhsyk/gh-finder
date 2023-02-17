import { User } from '../../interfaces/User';
import { ActionType } from '../actionTypes';

export interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
  payload: User[];
}

export type GithubsAction = FetchUsersAction;
