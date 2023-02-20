import { User } from '../../interfaces/User';
import { GithubsAction } from '../actions/githubsActions';
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
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ActionType.CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default reducer;
