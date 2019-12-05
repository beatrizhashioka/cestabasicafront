import React, { useState } from 'react';
import { StylesCotacao } from './styles';
import api from "../../services/api";
import addusu from '../../images/addusu.png';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';
import store from '../../images/store.png';
// import sacola from '../../images/sacola.png';

export default function Comercio({ history }) {
  const [month, setMonth] = useState("");
  const [commerceId, setCommerceId] = useState("");
  const [userId, setUserId] = useState("");
  async function handleSubmit(event) {
    event.preventDefault({ history })
    try {
      const response = await api.post("/cotacao", {
        month,
        commerceId,
        userId
      })
      const { token } = response.data;
      console.log(token);

      if (token) {
        localStorage.setItem("@CESTA/token", token);
      }
      history.push("/cotacao");
    }
    catch (erro) {
      alert("Dados inseridos não conferem");
    }
  }
  return (
    <StylesCotacao>
      <div id="menu">
        <Link to="/aleat">
          <img src={home} alt="Home" />
          <p>Página Home</p>
        </Link>
        <Link to="/comercio">
          <img src={store} alt="Store" />
          <p>Cadastro de Comercio</p>
        </Link>
        <Link to="/usuario">
          <img src={addusu} alt="AddU
          su" />
          <p>Cadastro de Usuário</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <img src={sacola} alt="Sacola" /> */}
        <h1>Cadastro da Cotação</h1>
        <div id="pt1">
          <label>Mês:</label>
          <input type="month" onChange={(event) => setMonth(event.target.value)} />
          <label> Comércio Referente:</label>
          <input type="text" required placeholder="Comércio Referente:" onChange={(event) => setCommerceId(event.target.value)} />
          <label> Usuário Referente:</label>
          <input type="text" required placeholder="Usuário Referente:" onChange={(event) => setUserId(event.target.value)} />
        </div>

        <hr></hr>
        <div id="pt2">

          <label>Carne:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Leite:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Feijão:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />


          <label>Arroz:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
        </div>
        <div id="pt3">
          <label>Farinha:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Batata:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />

          <label>Legumes:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Pão Francês:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <button type="submit">Salvar
    </button>
        </div>

        <div id="pt4">
          <label>Café em pó:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />

          <label>Frutas:</label>
          <input id="teste" type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Açúcar:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Banho/Óleo:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />
          <label>Manteiga:</label>
          <input type="number" onChange={(event) => setMonth(event.target.value)} />

        </div>
        <div>

        </div>


      </form>

    </StylesCotacao >
  );
}
