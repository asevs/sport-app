import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoutes, NonAuthRoutes } from '../routes';
import { Provider } from 'react-redux';
import { store } from '../redux/rootStore';
import DetailsPage from '../views/DetailsPage';
import RegisterPage from '../views/RegisterPage';
import Rooms from '../views/Rooms';
import LoginPage from '../views/LoginPage';
import Home from '../views/Home';
import MainTemplate from '../templates/MainTemplate';
import AuthRoute from '../routes/AuthRoute';

const Root: React.FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={NonAuthRoutes.home} component={Home} />
          <Route exact path={NonAuthRoutes.login} component={LoginPage} />
          <Route exact path={NonAuthRoutes.register} component={RegisterPage} />
          <AuthRoute exact path={AuthRoutes.rooms} Component={Rooms} />
          <AuthRoute exact path={AuthRoutes.room} Component={DetailsPage} />
          {/* <Route exact path={routes.players} component={Players} /> */}
          <AuthRoute exact path={AuthRoutes.player} Component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
