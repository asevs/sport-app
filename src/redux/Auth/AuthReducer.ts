import {
  AuthActionTypes,
  AUTHORIZATION_USER_REQUEST,
  AUTHORIZATION_USER_SUCCESS,
  AUTHORIZATION_USER_FAILURE,
} from './models/actions';
import { Auth } from './models/Auth';

interface AuthState {
  loading: boolean;
  auth: Auth;
  error: string;
}
const defaultState: AuthState = {
  loading: false,
  auth: {
    token: '',
    isLoggedIn: false,
  },
  error: '',
};

export const authReducer = (
  state = defaultState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AUTHORIZATION_USER_REQUEST:
      return {
        loading: true,
        auth: {
          token: '',
          isLoggedIn: false,
        },
        error: '',
      };
    case AUTHORIZATION_USER_SUCCESS:
      return { loading: false, auth: action.auth, error: '' };
    case AUTHORIZATION_USER_FAILURE:
      return {
        loading: false,
        auth: {
          token: '',
          isLoggedIn: false,
        },
        error: '',
      };

    default:
      return state;
  }
};
