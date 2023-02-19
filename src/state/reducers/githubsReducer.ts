import { User } from '../../interfaces/User';
import { GithubsAction } from '../actions/githubsActions';
import { ActionType } from '../actionTypes';

interface GithubsState {
  users: User[];
  user: User | null;
  loading: boolean;
}

const initialState: GithubsState = {
  users: [],
  user: null,
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
    case ActionType.GET_ONE_USER_COMPLETE:
      return { ...state, user: action.payload, loading: false };
    case ActionType.CLEAR_ONE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
