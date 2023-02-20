import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { ClearUsersAction } from '../actions/githubsActions';
import { ActionType } from '../actionTypes';
import { User } from '../../interfaces/User';
import { Action } from '../actions';

export const searchUsers =
  (text: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_START });

    const params = new URLSearchParams({ q: text });

    try {
      const { data } = await axios.get<{ items: User[] }>(
        `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      dispatch({ type: ActionType.FETCH_USERS, payload: data.items });
      dispatch({ type: ActionType.FETCH_END });
    } catch (err: any) {
      console.log(err);

      dispatch({ type: ActionType.FETCH_ERROR, payload: err.message });
    }
  };

export const clearUsers = (): ClearUsersAction => {
  return { type: ActionType.CLEAR_USERS };
};
