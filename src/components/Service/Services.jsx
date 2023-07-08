import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Fade duration="1300">
        <h4>
          COMO OPERAMOS
        </h4>
      </Fade>
      <Cards>
        <Fade duration="1300">
          <Card
            title={"CRIAÇÃO E CRESCIMENTO DE COMUNIDADES"}
            disc={`A FrostyCamp Studios se concentra no desenvolvimento e crescimento de comunidades online, ajudando projetos, empresas e empreendedores a fortalecer sua presença digital e a criar conexões significativas com seu público-alvo.`}
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"CONTRIBUIÇÃO PERSONALIZADA E ADAPTÁVEL"}
            disc={`Oferecemos diferentes pacotes de serviços para atender às necessidades específicas e aos objetivos de crescimento de nossos parceiros. Isso permite que os clientes escolham a solução mais adequada para suas metas e orçamentos.`}
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"AUTOMAÇÕES, APLICATIVOS E TECNOLOGIA"}
            disc={`A FrostyCamp Studios se destaca por sua paixão por tecnologias emergentes. Buscamos continuamente novas oportunidades e tendências para ajudar seus clientes a se manterem à frente da curva e a alcançarem o sucesso em seus respectivos nichos de mercado.`}
          />
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
  /* background-color: #fff; */
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
  
  /* max-width: 940px; */
    

  
  @media (max-width: 840px) {
    width: 90%;
    h4{
      padding: .5rem;
      
    }
  }
  h4{
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: "Belleza", sans-serif;
    font-size: 30px;
    font-weight: 300;
    padding:3rem;
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
  @media (max-width:840px){
    /* display :block; */
  }
  
`;
