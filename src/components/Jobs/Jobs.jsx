import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Jobs = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          O QUE FAZEMOS
        </h4>

      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            title={"COMMUNITIES"}
            disc={`Gerenciamento de redes sociais com conteúdo personalizado, automatização das interações nas redes e engajamento em tendências populares para aumentar a visibilidade e atrair crescimento orgânico`}
            info1 ={"Ativações em Mídias sociais"}
            info2 ={"Automação de conteúdo"}
            info3={"Post e engajamento em Trending topics"}
            imgUrl={"https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64139cd569f925d4b05c4f81_4P4O.gif"}
          />
        </Slide>
        <Slide direction="up">
          <Card
            title={"GROWTH"}
            disc={`O pacote completo de serviços para impulsionar o crescimento de sua comunidade, incluindo criação de conteúdo, desenvolvimento e execução de estratégias de crescimento e acompanhamento de métricas.`}
            info1 ={"Pessoalidade e Suporte"}
            info2 ={"Ativação de Campanhas e Alvos estratégicos"}
            info3={"Conexão com outras comunidades"}
            imgUrl={"https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64139ceb2f97431267de6a2e_giphy%20(2).gif"}
          />
        </Slide>

      </Cards>
    </Container>
  );
};

export default Jobs;

const Container = styled.div`
  width: 80%;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  
  @media (max-width: 840px) {
    width: 90%;
  }
  h4{
    color: #fff;
    font-size: 2rem;
  }
  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
