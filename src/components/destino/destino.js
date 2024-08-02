import React from "react";
import "./destino.css";
import Flag from "react-world-flags";

function Destino({image, flag, name, description,}) {
    return(
        <div className="card-destino">
            <img
            src={image}
            className="imagem-destino"
            />
            <h3>
              <Flag code={flag} height="16" className="bandeira" /> {name}
            </h3>
            <p>
              {description}
            </p>
          </div>
    );
}

export default Destino;