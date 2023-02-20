import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { ActionType } from '../actionTypes';
import { User } from '../../interfaces/User';
import { UserDetailAction } from '../actions/userDetailActions';

export const getSingleUser =
  (login: string) => async (dispatch: Dispatch<UserDetailAction>) => {
    dispatch({ type: ActionType.CLEAR_ONE_USER });
    // dispatch({ type: ActionType.FETCH_USERS });

    try {
      const { data } = await axios.get<User>(
        `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      dispatch({ type: ActionType.GET_SINGLE_USER, payload: data });
    } catch (err: any) {
      console.log(err);

      // dispatch({ type: ActionType.FETCH_USERS_ERROR, payload: err.message });
    }
  };
