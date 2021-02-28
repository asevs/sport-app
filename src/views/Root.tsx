import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/routes';
import { Provider } from 'react-redux';
import { store } from '../store';
import DetailsPage from '../views/DetailsPage';
import RegisterPage from '../views/RegisterPage';
import Players from '../views/Players';
import Rooms from '../views/Rooms';
import LoginPage from '../views/LoginPage';
import Home from '../views/Home';
import MainTemplate from '../templates/MainTemplate';

const Root: React.FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.rooms} component={Rooms} />
          <Route path={routes.room} component={DetailsPage} />
          <Route exact path={routes.players} component={Players} />
          <Route path={routes.player} component={DetailsPage} />

          <Route />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
