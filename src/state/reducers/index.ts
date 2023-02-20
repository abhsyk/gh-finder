import { combineReducers } from '@reduxjs/toolkit';
import githubsReducer from './githubsReducer';
import alertsReducer from './alertsReducer';
import userDetailsReducer from './userDetailsReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  githubs: githubsReducer,
  alerts: alertsReducer,
  userDetails: userDetailsReducer,
});

export default reducers;
