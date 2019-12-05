import React from 'react';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Aleat from '../pages/Aleat';
import Comercio from '../pages/Comercio';
import Cotacao from '../pages/Cotacao';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login} />
        <Route path="/usuario" component={Cadastro} isPrivate isadmin />
        <Route path="/aleat" component={Aleat} isPrivate />

        <Route path="/comercio" component={Comercio} isPrivate isadmin />
        <Route path="/cotacao" component={Cotacao} isPrivate isadmin />
      </Switch>

    </BrowserRouter>
  );
}
