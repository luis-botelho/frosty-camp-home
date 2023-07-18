import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Jobs = () => {
  return (
    <Container id="jobs">
      <Slide direction="down">
        <h4>
          O QUE FAZEMOS
        </h4>

      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            title={"COMUNIDADES"}
            disc={`Conectamos pessoas e ideias, criando comunidades autênticas e significativas.`}
            info1 ={"Criação de comunidade"}
            info2 ={"Criação de Conteúdo"}
            info3 ={"Post e engajamento em Trending topics"}
            imgUrl={"https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64139cd569f925d4b05c4f81_4P4O.gif"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            title={"GROWTH"}
            disc={`Com uma abordagem orientada por dados e focada em resultados, ajudamos você a se destacar e crescer.`}
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
  max-width: 940px;
  margin: 0 auto;
  padding: 3rem 0;

  
  
  @media (max-width: 840px) {
    width: 90%;
  }
  h4{
    color: #fff;
    font-size: 2rem;
    letter-spacing: 5px;
    font-size: 30px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 16px ;
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
