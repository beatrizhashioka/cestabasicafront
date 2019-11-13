import React from 'react';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Aleat from '../pages/Aleat';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../routes/privateroutes';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/usuario" component={Cadastro} />
        <PrivateRoute path="/aleat" component={Aleat} />
      </Switch>

    </BrowserRouter>
  );
}
