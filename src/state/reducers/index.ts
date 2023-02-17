import { combineReducers } from '@reduxjs/toolkit';
import githubsReducer from './githubsReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  githubs: githubsReducer,
});

export default reducers;
