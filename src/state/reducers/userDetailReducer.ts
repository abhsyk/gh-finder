import { Repository } from '../../interfaces/Repository';
import { User } from '../../interfaces/User';
import { UserDetailAction } from '../actions/userDetailActions';
import { ActionType } from '../actionTypes';

interface UserDetailState {
  user: User | null;
  repos: Repository[];
}

const initialState = {
  user: null,
  repos: [],
};

const reducer = (
  state: UserDetailState = initialState,
  action: UserDetailAction
) => {
  switch (action.type) {
    case ActionType.GET_SINGLE_USER:
      return { ...state, user: action.payload, loading: false };
    case ActionType.CLEAR_ONE_USER:
      return { ...state, user: null };
    case ActionType.GET_USER_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};

export default reducer;
