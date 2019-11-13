import React, { useState } from 'react';
import { StylesCadastro } from './styles';
import api from "../../services/api"
import addusu from '../../images/addusu.png';

export default function Cadastro({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await api.post("/usuarios", {
        name,
        email,
        password
      })
      history.push("/")
    } catch (erro) {
      alert("Usuário já existente");
    }
  }
  return (
    <StylesCadastro>
      <form onSubmit={handleSubmit}>
        <img src={addusu} alt="Add" />
        <h1>Cadastro</h1>
        <input type="text" required placeholder="Nome:" onChange={(event) => setName(event.target.value)} />
        <input type="email" required placeholder="Email:" onChange={(event) => setEmail(event.target.value)} />
        <input type="password" required placeholder="Senha:" onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Entrar
    </button>
      </form>
    </StylesCadastro>
  );
}