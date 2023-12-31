import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Fade duration="1300">
        <h4>OPERAÇÃO</h4>
      </Fade>
      <Cards>
          <Fade duration="1300">
      
            <Card 
              title={"TECNÓLOGIA"}
              disc={`SEO, automatizações e criação de conteúdo`}
            />
        
          </Fade>
        <Fade duration="1300">
          <Card
            title={"HUMANIDADE"}
            disc={`Suporte, retenção e pessoalidade`}
          />
        </Fade>
        <Fade duration="1300">
          <Card title={"PRESENÇA"} disc={`Eventos, benefícios e acessos`} />
        </Fade>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0 2rem 10rem;
  position: relative;
  z-index: -1;
  /* background-color: #fff; */
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );

  /* max-width: 940px; */

  @media (max-width: 840px) {
    width: 90%;
    h4 {
      /* padding: .5rem;
      font-size: 1rem; */
    }
  }
  @media (max-width: 650px) {
    width: 90%;
    h4 {
      /* padding: .5rem !important; */
      font-size: 1.8rem !important;
    }
  }
  h4 {
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: "Belleza", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    padding: 3rem 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
const Cards = styled.div`
  display: grid;
  /* padding: 5rem 5rem 0rem; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* margin-top: 4rem; */
  gap: 1rem;
  @media (max-width: 840px) {
    /* display :block; */
  }
  
 
`;
