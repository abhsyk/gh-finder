import { ActionType } from '../actionTypes';

export interface FetchStartAction {
  type: ActionType.FETCH_START;
}
export interface FetchEndAction {
  type: ActionType.FETCH_END;
}
export interface FetchErrorAction {
  type: ActionType.FETCH_ERROR;
  payload: string;
}

export type UIAction = FetchStartAction | FetchEndAction | FetchErrorAction;
