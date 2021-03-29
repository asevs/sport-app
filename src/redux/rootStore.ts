import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { roomReducer } from './Room/RoomReducer';
import { AppActions } from './models/actions';

const logger = createLogger();

export const rootReducer = combineReducers({ roomReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
