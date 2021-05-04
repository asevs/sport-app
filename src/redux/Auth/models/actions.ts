import { Auth } from './Auth';

export const AUTHORIZATION_USER_REQUEST = 'AUTHORIZATION_USER_REQUEST';
export const AUTHORIZATION_USER_SUCCESS = 'AUTHORIZATION_USER_SUCCESS';
export const AUTHORIZATION_USER_FAILURE = 'AUTHORIZATION_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

interface AuthAsync {
  loading: boolean;
  auth: Auth;
  error: string;
}

interface AuthorizationUserRequest extends AuthAsync {
  type: typeof AUTHORIZATION_USER_REQUEST;
}
interface AuthorizationUserSuccess extends AuthAsync {
  type: typeof AUTHORIZATION_USER_SUCCESS;
}
interface AuthorizationUserFailure extends AuthAsync {
  type: typeof AUTHORIZATION_USER_FAILURE;
}

interface LogoutUser extends AuthAsync {
  type: typeof LOGOUT_USER;
}

interface LogoutUserSuccess extends AuthAsync {
  type: typeof LOGOUT_USER_SUCCESS;
}

interface LogoutUserFailure extends AuthAsync {
  type: typeof LOGOUT_USER_FAILURE;
}

export type AuthActionTypes =
  | AuthorizationUserRequest
  | AuthorizationUserSuccess
  | AuthorizationUserFailure
  | LogoutUser
  | LogoutUserSuccess
  | LogoutUserFailure;
