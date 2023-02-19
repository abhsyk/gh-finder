import { ActionType } from '../actionTypes';

export interface SetAlertAction {
  type: ActionType.SET_ALERT;
  payload: { message: string; type: 'error' };
}

export interface RemoveAlertAction {
  type: ActionType.REMOVE_ALERT;
}

export type AlertsAction = SetAlertAction | RemoveAlertAction;
