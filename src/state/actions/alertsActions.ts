import { ActionType } from '../actionTypes';

export interface SetAlertAction {
  type: ActionType.SET_ALERT;
  payload: { message: string; type: string };
}

export interface RemoveAlertAction {
  type: ActionType.REMOVE_ALERT;
}

export type AlertsAction = SetAlertAction | RemoveAlertAction;
