import { Dispatch } from '@reduxjs/toolkit';
import { AlertsAction } from '../actions/alertsActions';
import { ActionType } from '../actionTypes';

export const setAlert =
  (message: string, type: 'error') => (dispatch: Dispatch<AlertsAction>) => {
    dispatch({ type: ActionType.SET_ALERT, payload: { message, type } });

    const timer = setTimeout(() => {
      dispatch({ type: ActionType.REMOVE_ALERT });
    }, 3000);
    return () => clearTimeout(timer);
  };
