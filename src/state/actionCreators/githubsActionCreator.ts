import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { ClearUsersAction, GithubsAction } from '../actions/githubsActions';
import { ActionType } from '../actionTypes';
import { User } from '../../interfaces/User';

export const searchUsers =
  (text: string) => async (dispatch: Dispatch<GithubsAction>) => {
    dispatch({ type: ActionType.FETCH_USERS });

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

      dispatch({ type: ActionType.FETCH_USERS_COMPLETE, payload: data.items });
    } catch (err: any) {
      console.log(err);

      dispatch({ type: ActionType.FETCH_USERS_ERROR, payload: err.message });
    }
  };

export const getOneUser =
  (login: string) => async (dispatch: Dispatch<GithubsAction>) => {
    dispatch({ type: ActionType.CLEAR_ONE_USER });
    dispatch({ type: ActionType.FETCH_USERS });

    try {
      const { data } = await axios.get<User>(
        `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      dispatch({ type: ActionType.GET_ONE_USER_COMPLETE, payload: data });
    } catch (err: any) {
      console.log(err);

      dispatch({ type: ActionType.FETCH_USERS_ERROR, payload: err.message });
    }
  };

export const clearUsers = (): ClearUsersAction => {
  return { type: ActionType.CLEAR_USERS };
};
