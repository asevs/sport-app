import { Dispatch } from 'redux';
import API from '../../utils/API';
import { AppActions } from '../models/actions';
import jwt_decode from 'jwt-decode';
import {
  AUTHORIZATION_USER_REQUEST,
  AUTHORIZATION_USER_SUCCESS,
  AUTHORIZATION_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './models/actions';
import { LoginCredentials } from './models/Auth';

const requestAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_REQUEST,
  loading: true,
  auth: {
    isLoggedIn: false,
  },
  error: '',
});
const receiveAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_SUCCESS,
  loading: false,
  auth: {
    isLoggedIn: true,
  },
  error: '',
});
const invalidateAuth = (): AppActions => ({
  type: AUTHORIZATION_USER_FAILURE,
  loading: false,
  auth: {
    isLoggedIn: false,
  },
  error: 'Unable to authorization',
});

const reqLogoutUser = (): AppActions => ({
  type: LOGOUT_USER,
  loading: true,
  auth: {
    isLoggedIn: true,
  },
  error: '',
});

const receiveLogoutUser = (): AppActions => ({
  type: LOGOUT_USER_SUCCESS,
  loading: false,
  auth: {
    isLoggedIn: false,
  },
  error: '',
});

const invalidateLogoutUser = (): AppActions => ({
  type: LOGOUT_USER_FAILURE,
  loading: false,
  auth: {
    isLoggedIn: true,
  },
  error: 'Unable to logout',
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
      })
      .then(() => {
        dispatch(receiveAuth());
      })
      .catch((err) => {
        dispatch(invalidateAuth());
        return err;
      });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(reqLogoutUser());
    try {
      localStorage.removeItem('token');
      delete API.defaults.headers.common['Authorization'];
      dispatch(receiveLogoutUser());
    } catch (err) {
      dispatch(invalidateLogoutUser());
    }
    return;
  };
};
