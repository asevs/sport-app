import React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { AppState } from '../redux/rootStore';
import { NonAuthRoutes } from '../routes';

export interface IAuthRouteProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const AuthRoute = ({ Component, path, exact = false }: IAuthRouteProps) => {
  const auth = useSelector<AppState, AppState['authReducer']>(
    (state: AppState) => state.authReducer
  );
  const isAuthed = !!localStorage.getItem('token');
  // const isAuthed = auth.auth.isLoggedIn;
  const message = 'Zaloguj się aby zobaczyć żądane treści.';
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: NonAuthRoutes.login,
              state: { message, requestPath: path },
            }}
          />
        )
      }
    />
  );
};
export default AuthRoute;
