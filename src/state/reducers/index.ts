import { combineReducers } from '@reduxjs/toolkit';
import githubsReducer from './githubsReducer';
import alertsReducer from './alertsActionReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  githubs: githubsReducer,
  alerts: alertsReducer,
});

export default reducers;
