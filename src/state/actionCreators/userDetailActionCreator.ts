import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { ActionType } from '../actionTypes';
import { User } from '../../interfaces/User';
import { Action } from '../actions';

export const fetchUser =
  (login: string, path: string, actionType: ActionType) =>
  async <T>(dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CLEAR_ONE_USER });
    dispatch({ type: ActionType.FETCH_START });

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/users/${login}${path}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      console.log(data);

      dispatch({ type: actionType, payload: data });
      dispatch({ type: ActionType.FETCH_END });
    } catch (err: any) {
      console.log(err);

      dispatch({ type: ActionType.FETCH_ERROR, payload: err.message });
    }
  };

export const getSingleUser = (login: string) =>
  fetchUser(login, '', ActionType.GET_SINGLE_USER);

export const getUserRepos = (login: string) =>
  fetchUser(login, '/repos', ActionType.GET_USER_REPOS);

// export const getSingleUser =
//   (login: string) => async (dispatch: Dispatch<Action>) => {
//     dispatch({ type: ActionType.CLEAR_ONE_USER });
//     dispatch({ type: ActionType.FETCH_START });

//     try {
//       const { data } = await axios.get<User>(
//         `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
//         {
//           headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//           },
//         }
//       );

//       dispatch({ type: ActionType.GET_SINGLE_USER, payload: data });
//       dispatch({ type: ActionType.FETCH_END });
//     } catch (err: any) {
//       console.log(err);

//       dispatch({ type: ActionType.FETCH_ERROR, payload: err.message });
//     }
//   };

// export const getUserRepos =
//   (login: string) => async (dispatch: Dispatch<Action>) => {
//     dispatch({ type: ActionType.FETCH_START });
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,
//         {
//           headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//           },
//         }
//       );

//       dispatch({ type: ActionType.GET_USER_REPOS, payload: data });
//       dispatch({ type: ActionType.FETCH_END });
//     } catch (err: any) {
//       dispatch({ type: ActionType.FETCH_ERROR, payload: err.message });
//     }
//   };
