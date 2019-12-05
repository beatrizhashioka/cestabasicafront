import React from 'react';
import store from '../../images/store.png';
import bargain from '../../images/bargain.png';
import { Link } from 'react-router-dom';
import addusu from '../../images/addusu.png';
import { StylesAleat } from './styles';
export default function Aleat() {
  return (

    <StylesAleat>
      <div id="menu">
        <Link to="/comercio">
          <img src={store} alt="Shop" />
          <p>Cadastro de Comércio</p>
        </Link>
        <Link to="/cotacao">
          <img src={bargain} alt="Bargain" />
          <p>Cadastro de Cotação</p>
        </Link>
        <Link to="/usuario">
          <img src={addusu} alt="AddUsu" />
          <p>Cadastro de Usuário</p>
        </Link>
      </div>
    </StylesAleat>
  )
};
