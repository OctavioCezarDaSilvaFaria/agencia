import React from 'react';
import "./pacote_viagem.css";
import {
    FaHotel,
    FaPlane,
    FaWalking,
    FaBus,
} from "react-icons/fa";

function Pacote_Viagem({name, valor_anterior, valor_atual, descripition}) {
    return (
        <div className="card-pacote">
            <div className="pacote-header">
              <h3>{name}</h3>
              <div className="preco">
                <span className="preco-anterior">{valor_anterior}</span>
                <span className="preco-atual">{valor_atual}</span>
              </div>
            </div>
            <p>
              {descripition}
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
    );
}

export default Pacote_Viagem;