import { User } from '../../interfaces/User';
import { GithubsAction } from '../actions/githubsActions';
import { ActionType } from '../actionTypes';

interface GithubsState {
  users: User[];
  loading: boolean;
}

const initialState: GithubsState = {
  users: [],
  loading: false,
};

const reducer = (state: GithubsState = initialState, action: GithubsAction) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return { ...state, loading: true };
    case ActionType.FETCH_USERS_COMPLETE:
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
