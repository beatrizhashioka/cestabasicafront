import React, { useState } from 'react';
import { StylesComercio } from './styles';
import api from "../../services/api"
import addusu from '../../images/addusu.png';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';
import bargain from '../../images/bargain.png';
// import sacola from '../../images/sacola.png';

export default function Comercio({ history }) {
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  async function handleSubmit(event) {
    event.preventDefault({ history })
    try {
      const response = await api.post("/comercio", {
        name,
        streetName,
        streetNumber,
        neighborhood,
        city,
        state
      })
      const { token } = response.data;
      console.log(token);

      if (token) {
        localStorage.setItem("@CESTA/token", token);
      }
      history.push("/aleat");
    }
    catch (erro) {
      alert("Dados inseridos não conferem");
    }
  }
  return (
    <StylesComercio>
      <div id="menu">
        <Link to="/aleat">
          <img src={home} alt="Home" />
          <p>Página Home</p>
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
      <div>

        <form onSubmit={handleSubmit}>
          {/* <img src={sacola} alt="Sacola" /> */}
          <h1>Cadastro do Comércio</h1>
          <div id="pt1">
            <label>Nome:</label>
            <input type="text" required placeholder="Nome:" onChange={(event) => setName(event.target.value)} />
            <label>Nome da rua:</label>
            <input type="text" required placeholder="Nome da Rua:" onChange={(event) => setStreetName(event.target.value)} />
            <label>Número da rua:</label>
            <input type="number" required placeholder="Número da Rua:" onChange={(event) => setStreetNumber(event.target.value)} />
          </div>
          <div id="pt2">
            <label>Bairro:</label>
            <input type="text" required placeholder="Bairro:" onChange={(event) => setNeighborhood(event.target.value)} />

            <label>Cidade:</label>
            <input type="text" required placeholder="Cidade:" onChange={(event) => setCity(event.target.value)} />
            <label>Estado:</label>
            <input type="text" required placeholder="Estado:" onChange={(event) => setState(event.target.value)} />

          </div>
          <button type="submit">Entrar
    </button>
        </form>
      </div>
    </StylesComercio >
  );
}
