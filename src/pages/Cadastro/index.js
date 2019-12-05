import React, { useState } from 'react';
import { StylesCadastro } from './styles';
import api from "../../services/api"
import addusu from '../../images/addusu.png';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';
export default function Cadastro({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isadmin, setIsadmin] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await api.post("/usuarios", {
        name,
        email,
        password,
        isadmin
      })
      history.push("/")
    } catch (erro) {
      alert("Usuário já existente");
    }
  }
  return (
    <StylesCadastro>
      <div id="menu">
        <Link to="/aleat">
          <img src={home} alt="Home" />
          <p>Página Home</p>
        </Link>
        {/* <Link to="/cotacao">
          <img src={bargain} alt="Bargain" />
          <p>Cadastro de Cotação</p>
        </Link> */}
      </div>
      <div>

        <form onSubmit={handleSubmit}>
          <img src={addusu} alt="Add" />
          <h1>Cadastro</h1>
          <input type="text" required placeholder="Nome:" onChange={(event) => setName(event.target.value)} />
          <input type="email" required placeholder="Email:" onChange={(event) => setEmail(event.target.value)} />
          <input type="password" required placeholder="Senha:" onChange={(event) => setPassword(event.target.value)} />
          {/* <input type=" checkbox" required placeholder="Tipo:" onChange={(event) => setTipo(event.target.value)} /> */}
          <label>
            Se for admistrador, marque o campo abaixo
        </label>
          <input
            id="isadmin"
            type="checkbox"
            value={isadmin}
            onChange={() => setIsadmin(!isadmin)}>
          </input>


          <button type="submit">Entrar
    </button>
        </form>

      </div>
    </StylesCadastro>
  );
}