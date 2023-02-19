import { AlertsAction } from '../actions/alertsActions';
import { ActionType } from '../actionTypes';

interface AlertsState {
  message: string | null;
  type: 'error' | null;
}

const initialState: AlertsState = {
  message: null,
  type: null,
};

const reducer = (state: AlertsState = initialState, action: AlertsAction) => {
  switch (action.type) {
    case ActionType.SET_ALERT:
      const { message, type } = action.payload;
      return { ...state, message, type };
    case ActionType.REMOVE_ALERT:
      return { ...state, message: null, type: null };
    default:
      return state;
  }
};

export default reducer;
