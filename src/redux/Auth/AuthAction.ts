import { Dispatch } from 'redux';
import API from '../../utils/API';
import { AppActions } from '../models/actions';

import {
  AUTHORIZATION_USER_REQUEST,
  AUTHORIZATION_USER_SUCCESS,
  AUTHORIZATION_USER_FAILURE,
} from './models/actions';
import { Auth, LoginCredentials } from './models/Auth';

const requestAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_REQUEST,
  loading: true,
  auth: {
    token: '',
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
    token: '',
    isLoggedIn: false,
  },
  error: 'Unable to authorization',
});

export const loginUser = (loginCredentials: LoginCredentials) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(requestAuth());
    return (
      API.post('/login', loginCredentials)
        .then((res) => {
          const token = `Bearer ${res.headers.authorization}`;
          localStorage.setItem('token', token);
          API.defaults.headers.common['Authorization'] = token;
          dispatch;
          console.log(res.headers.authorization);
        })
        // .then((res) => {
        //   dispatch(receiveAuth(res.data))
        // })
        .catch((err) => {
          dispatch(invalidateAuth());
        })
    );
  };
};

// fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
//   .then((res) => res.json())
//   .then((json) => dispatch(receiveAuth(json)))
//   .catch((err) => dispatch(invalidateAuth()));
