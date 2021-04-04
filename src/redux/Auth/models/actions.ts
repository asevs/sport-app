import { Auth } from './Auth';

export const AUTHORIZATION_USER_REQUEST = 'AUTHORIZATION_USER_REQUEST';
export const AUTHORIZATION_USER_SUCCESS = 'AUTHORIZATION_USER_SUCCESS';
export const AUTHORIZATION_USER_FAILURE = 'AUTHORIZATION_USER_FAILURE';

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

export type AuthActionTypes =
  | AuthorizationUserRequest
  | AuthorizationUserSuccess
  | AuthorizationUserFailure;
