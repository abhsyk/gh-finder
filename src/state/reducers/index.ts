import { combineReducers } from '@reduxjs/toolkit';
import githubsReducer from './githubsReducer';
import alertsReducer from './alertsReducer';
import userDetailReducer from './userDetailReducer';
import uiReducer from './uiReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  githubs: githubsReducer,
  alerts: alertsReducer,
  userDetail: userDetailReducer,
  ui: uiReducer,
});

export default reducers;
