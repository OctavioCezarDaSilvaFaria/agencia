import React from "react";
import "./hero.css";

function Hero() {
    
    return (
        <section className="hero">
        <div className="hero-content">
          <h2>Explore o Mundo com a Senai Viagens</h2>
          <p>
            Oferecemos os melhores pacotes de viagens para você e sua família.
            Experiências inesquecíveis aguardam você!
          </p>
          <div className="hero-buttons">
            <button className="btn-saiba-mais">Saiba Mais</button>
            <button className="btn-reserve-agora">Reserve Agora</button>
          </div>
        </div>
      </section>
    );
}

export default Hero;