import { Dispatch } from '@reduxjs/toolkit';
import { AlertsAction } from '../actions/alertsActions';
import { ActionType } from '../actionTypes';

export const setAlert =
  (message: string, type: string) => (dispatch: Dispatch<AlertsAction>) => {
    dispatch({ type: ActionType.SET_ALERT, payload: { message, type } });

    const timer = setTimeout(() => {
      dispatch({ type: ActionType.REMOVE_ALERT });
    });
    return () => clearTimeout(timer);
  };
