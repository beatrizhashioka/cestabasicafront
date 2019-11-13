import React, { useState } from 'react';
import { StylesLogin } from './styles';
import api from "../../services/api"
import sacola from '../../images/sacola.png';

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post("/secoes", {
        email,
        password
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
    <StylesLogin>
      <div>
        <form onSubmit={handleSubmit}>
          <img src={sacola} alt="Sacola" />
          <h1> Login</h1>
          <input type="email" required placeholder="Email:" onChange={(event) => setEmail(event.target.value)} />
          <input type="password" required placeholder="Senha:" onChange={(event) => setPassword(event.target.value)} />
          <button type="submit">Entrar
    </button>
        </form>
      </div>
    </StylesLogin >
  );
}