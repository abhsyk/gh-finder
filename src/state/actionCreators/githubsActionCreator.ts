import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { GithubsAction } from '../actions/githubsActions';
import { ActionType } from '../actionTypes';

export const fetchUsers = () => async (dispatch: Dispatch<GithubsAction>) => {
  dispatch({ type: ActionType.FETCH_USERS });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    dispatch({ type: ActionType.FETCH_USERS_COMPLETE, payload: data });
  } catch (err) {}
};
