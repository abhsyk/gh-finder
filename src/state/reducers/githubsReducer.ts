import { User } from '../../interfaces/User';
import { GithubsAction } from '../actions';
import { ActionType } from '../actionTypes';

interface GithubsState {
  users: User[];
}

const initialState: GithubsState = {
  users: [],
};

const reducer = (state: GithubsState = initialState, action: GithubsAction) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;
