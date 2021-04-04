import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';

import {
  AUTHORIZATION_USER_REQUEST,
  AUTHORIZATION_USER_SUCCESS,
  AUTHORIZATION_USER_FAILURE,
} from './models/actions';
import { Auth } from './models/Auth';

const requestAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_REQUEST,
  loading: true,
  auth: {
    userId: 1,
    login: '',
    password: '',
    token: '',
    photo: '',
    isLoggedIn: false,
  },
  error: '',
});
const receiveAuth = (auth: Auth): AppActions => ({
  type: AUTHORIZATION_USER_SUCCESS,
  loading: false,
  auth: auth,
  error: '',
});
const invalidateAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_FAILURE,
  loading: false,
  auth: {
    userId: 1,
    login: '',
    password: '',
    token: '',
    photo: '',
    isLoggedIn: false,
  },
  error: 'Unable to authorization',
});

export const boundRequestAuth = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(requestAuth());
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveAuth(json)))
      .catch((err) => dispatch(invalidateAuth()));
  };
};
