import { UIAction } from '../actions/uiActions';
import { ActionType } from '../actionTypes';

interface UIState {
  loading: boolean;
  error: string | null;
}

const initialState: UIState = {
  loading: false,
  error: null,
};

const reducer = (state: UIState = initialState, action: UIAction) => {
  switch (action.type) {
    case ActionType.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
