import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          COMO OPERAMOS
        </h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            title={"CRIAÇÃO E CRESCIMENTO DE COMUNIDADES"}
            disc={`A FrostyCamp Studios se concentra no desenvolvimento e crescimento de comunidades online, ajudando projetos, empresas e empreendedores a fortalecer sua presença digital e a criar conexões significativas com seu público-alvo.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            title={"CONTRIBUIÇÃO PERSONALIZADA E ADAPTÁVEL"}
            disc={`Oferecemos diferentes pacotes de serviços para atender às necessidades específicas e aos objetivos de crescimento de nossos parceiros. Isso permite que os clientes escolham a solução mais adequada para suas metas e orçamentos.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            title={"AUTOMAÇÕES, APLICATIVOS E TECNOLOGIA"}
            disc={`A FrostyCamp Studios se destaca por sua paixão por tecnologias emergentes. Buscamos continuamente novas oportunidades e tendências para ajudar seus clientes a se manterem à frente da curva e a alcançarem o sucesso em seus respectivos nichos de mercado.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 3rem 2rem 15rem;
  background-color: #fff;
  /* max-width: 940px; */
    margin-left: auto;
    margin-right: auto;

  
  @media (max-width: 840px) {
    width: 90%;
  }
  h4{
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: Belleza, sans-serif;
    font-size: 30px;
    font-weight: 300;
  }
  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
 

  display: grid;
  padding: 5rem 5rem 0rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* margin-top: 4rem; */
  gap: 2rem;
  
`;
