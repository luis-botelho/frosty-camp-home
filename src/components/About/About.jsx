import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <Container id="about">
      <Fade duration="1300">
        <h4>estratégias</h4>
      </Fade>
      <Cards>
        <Fade duration="1300">
          <Card
            title={"Engajamento em Redes Sociais"}
            disc={`
              
Ativações em mídias sociais atraem audiência ao fornecer conteúdo relevante, interações valiosas e informações úteis, aumentando a visibilidade e o engajamento.
              `}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2023_6.gif?updatedAt=1689646855306"
            }
          />
        </Fade>

        <Fade duration="1300">
          <Card
            title={"Gerenciamento de Comunidades"}
            disc={`
            Ativações em plataformas de comunidade, como o Discord, são estratégias eficazes de growth. Ao fornecer conteúdo relevante e interações autênticas, atraem e engajam os usuários, impulsionando a conversão de potenciais clientes e aumentando a visibilidade da marca.
              `}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2022_9.gif?updatedAt=1689646850128"
            }
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"Aprimoramento de SEO eficiente"}
            disc={`
              
A revisão de SEO é uma estratégia poderosa de growth, atraindo leitores ao otimizar o conteúdo do site, melhorar a visibilidade nos resultados de busca e aumentar atração de potenciais clientes. Com palavras-chave relevantes e técnicas de otimização, sua marca ganha destaque no cenário digital e conquista mais visitantes qualificados.
              `}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2022_10.gif?updatedAt=1689646868322"
            }
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"Trafégo Pago Eficiente"}
            disc={`
            O tráfego pago é uma estratégia forte de growth, atraindo leitores por meio de anúncios otimizados, melhorando a visibilidade e atraindo potenciais clientes. Com técnicas de SEO e segmentação precisa, sua marca ganha maior alcance e reconhecimento, aumentando o tráfego qualificado para o site.
            `}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2022_2.gif?updatedAt=1689646686071"
            }
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"Criação de Conteúdo"}
            disc={`A criação de conteúdo é uma estratégia altamente eficaz de growth, atraindo leitores com conteúdo relevante e otimizado para SEO, aumentando a visibilidade nos resultados de busca e atraindo potenciais clientes. Com informações valiosas e técnicas de SEO bem aplicadas, sua marca se destaca no cenário digital, conquistando e engajando um público mais amplo e qualificado.`}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2023_4.gif?updatedAt=1689646870623"
            }
          />
        </Fade>
        <Fade duration="1300">
          <Card
            title={"Eventos Virtuais"}
            disc={`Eventos virtuais são uma estratégia potente de growth, atraindo leitores com experiências interativas e conteúdo relevante, melhorando a visibilidade nos resultados de busca e atraindo potenciais clientes. Com técnicas de SEO aplicadas, sua marca ganha destaque no cenário digital, alcançando e envolvendo um público mais amplo e qualificado.`}
            imgUrl={
              "https://ik.imagekit.io/frostycamp/2023_7.gif?updatedAt=1689646867788"
            }
          />
        </Fade>
      </Cards>
    </Container>
  );
};

export default About;

const Container = styled.div`
  /* width: 100vw; */
  text-align: center;
  margin: 0 auto;
  padding: 0rem 2rem 5rem 2rem;
  position: relative;
  z-index: -1;
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );
  /* max-width: 940px; */

  @media (max-width: 840px) {
    width: 90%;
    h4 {
      padding: 0.5rem;
    }
  }
  h4 {
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: "Belleza", sans-serif;
    font-size: 30px;
    font-weight: 300;
    padding: 3rem 2rem 0;
  }
  p {
    margin: 0;
    padding: 1rem;
  }
`;
const Cards = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  1fr 1fr ;
  grid-gap: 2rem;
  width: 100%; */
  /* height:400px; */
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: stretch;

  @media (max-width: 840px) {
    width: 90%;
    padding: 0;
    display:block;
  }
  /* /* display: grid; */
  padding: 5rem 5rem 0rem;
  margin: 0 auto;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* margin-top: 4rem; */
  /* gap: 2rem;  */
`;
