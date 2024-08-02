import React from "react";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import Destino from "./components/destino/destino.js";
import Depoimento from "./components/depoimento/depoimento.js";
import Pacote_Viagem from "./components/pacote_viagem/pacote_viagem.js";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <section id="destinos" className="destinos-populares">
        <h2>Destinos Populares</h2>
        <div className="destinos-grid">
          <Destino 
              image="https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576"
              flag="FRA"
              name="Paris"
              description="Paris, conhecida como a cidade do amor, oferece uma mistura de
              cultura, arte e história. Visite a Torre Eiffel, o Museu do Louvre
              e explore as charmosas ruas de Montmartre."
            />
            <Destino 
              image="https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024"
              flag="USA"
              name="Nova York"
              description="Nova York, a cidade que nunca dorme, é um centro global de
              cultura, moda e finanças. Explore a Times Square, o Central Park e
              desfrute de uma variedade de espetáculos na Broadway."
            />
            <Destino 
              image="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg"
              flag="JPN"
              name="Tóquio"
              description="Tóquio é uma metrópole vibrante onde a tradição encontra a
              modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e
              experimente a culinária local em izakayas e restaurantes."
            />
        </div>
      </section>

      <section id="pacotes" className="pacotes-viagem">
        <h2>Pacotes de Viagem</h2>
        <div className="pacotes-grid">
          <Pacote_Viagem 
          name="Pacote Europa"
          valor_anterior="R$6.000"
          valor_atual="R$5.000"
          descripition="Aproveite 7 dias inesquecíveis em Paris, Londres e Roma, com
          visistas guiadas aos pontos turísticos mais emblemáticos,
          hospedagem em hotéis 4 estrelas e passagens aéreas inclusas."
          />
          <Pacote_Viagem
          name="Pacote EUA"
          valor_anterior="R$5.500"
          valor_atual="R$4.500"
          descripition="Explore as cidades vibrantes de Nova York e Los Angeles por 7
          dias, com hospedagem em hotéis 4 estrelas, passagens aéreas e
          tours guiados pelos pontos mais famosos."
          />
          <Pacote_Viagem
          name="Pacote Ásia"
          valor_anterior="R$7.000"
          valor_atual="R$6.000"
          descripition="Descubra a cultura e modernidade de Tóquio, Seul e Pequim em uma
              viagem de 10 dias, com hospedagem luxuosa, passagens aéreas
              inclusas e tours guiados."
          />
          <Pacote_Viagem
          name="Pacote América do Sul"
          valor_anterior="R$4.000"
          valor_atual="R$3.500"
          descripition="Desfrute de 7 dias encantadores em Buenos Aires, Santiago e Lima,
              com hospedagem em hotéis 4 estrelas, passagens aéreas e passeios
              guiados pelos principais pontos turísticos."
          />
        </div>
      </section>

      <section id="depoimentos" className="depoimentos">
        <h2>Depoimentos</h2>
        <div className="depoimentos-grid">
          <Depoimento 
          name="João Silva"
          repost="Foi a melhor viagem da minha vida!"
          />
          <Depoimento 
          name="Maria Santos"
          repost="Experiência incrível e atendimento excelente"
          />
          <Depoimento 
          name="Ana Costa"
          repost="Recomendo a todos, vale cada centavo"
          />
          <Depoimento 
          name="Pedro Oliveira"
          repost="Excelente custo-benefício e ótimos guias turísticos"
          />
        </div>
      </section>
      <section id="contato" className="contato">
        <h2>Contato</h2>
        <div className="contato-container">
          <div className="contato-info-form">
            <div className="contato-info">
              <p>
                <FaMapMarkerAlt /> Endereço: Rua Fictícia, 123 - Jaboticabal, SP
              </p>
              <p>
                <FaPhone /> Telefone: (16) 1234-5678
              </p>
              <p>
                <FaWhatsapp /> WhatsApp: (16) 98765-4321
              </p>
              <p>
                <FaEnvelope /> Caso queira enviar um email, preencha os campos
                abaixo:
              </p>
            </div>
            <form className="contato-form">
              <label>
                Nome:
                <input type="text" name="nome" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Mensagem:
                <textarea name="mensagem"></textarea>
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="contato-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2810841259775!2d-48.35436492509229!3d-21.613967992949075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e1d1fc68a2a7%3A0x72c0741034cbcc!2sSENAI%20-%20Servi%C3%A7o%20Nacional%20de%20Aprendizagem%20Industrial!5e0!3m2!1spt-BR!2sbr!4v1722442541179!5m2!1spt-BR!2sbr"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Agência de Viagens"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
