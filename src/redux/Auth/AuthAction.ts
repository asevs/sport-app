import { Dispatch } from 'redux';
import API from '../../utils/API';
import { AppActions } from '../models/actions';
import jwt_decode from 'jwt-decode';

import {
  AUTHORIZATION_USER_REQUEST,
  AUTHORIZATION_USER_SUCCESS,
  AUTHORIZATION_USER_FAILURE,
} from './models/actions';
import { LoginCredentials } from './models/Auth';

const requestAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_REQUEST,
  loading: true,
  auth: {
    token: '',
    isLoggedIn: false,
  },
  error: '',
});
const receiveAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_SUCCESS,
  loading: false,
  auth: {
    token: 'saved token',
    isLoggedIn: true,
  },
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
    return API.post('/login', loginCredentials)
      .then((res) => {
        const token = res.headers.authorization;
        localStorage.setItem('token', token);
        API.defaults.headers.common['Authorization'] = token;
        const userInfoDecoded = jwt_decode(token);
        console.log(userInfoDecoded);
      })
      .then(() => {
        dispatch(receiveAuth());
      })
      .catch((err) => {
        dispatch(invalidateAuth());
      });
  };
};
