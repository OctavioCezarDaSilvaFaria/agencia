import React from "react";
import "./depoimento.css";

function Depoimento({name, repost}) {
    return(
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>{name}</h3>
              <blockquote>{repost}</blockquote>
            </div>
          </div>
    );
}

export default Depoimento;