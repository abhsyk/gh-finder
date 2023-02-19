import { AlertsAction } from '../actions/alertsActions';
import { ActionType } from '../actionTypes';

interface AlertsState {
  message: string;
  type: string;
}

const initialState: AlertsState = {
  message: '',
  type: '',
};

const reducer = (state: AlertsState = initialState, action: AlertsAction) => {
  switch (action.type) {
    case ActionType.SET_ALERT:
      const { message, type } = action.payload;
      return { ...state, message, type };
    case ActionType.REMOVE_ALERT:
      return { ...state, message: '', type: '' };
    default:
      return state;
  }
};

export default reducer;
