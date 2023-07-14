import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { forwardRef } from "react";

const About = () => {
  return (
    <Container id="about" >
      <Slide direction="down">
        <h4>
          overview
        </h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            title={"cachorro"}
            disc={`
           
            
            Marca: A marca FrostyCamp Studios simboliza sofisticação, simplicidade e elegância, com cores em preto e branco e tipografia moderna e limpa. Nosso tom de voz é direto, profissional e confiante, refletindo nossa paixão pela inovação e experiência em fornecer soluções utilizando tecnologias avançadas.
            `}
            imgUrl={"https://ik.imagekit.io/alrrxu2emk/imageedit_1_4208125788.png?updatedAt=1688250876076"} 
          />
        </Slide>
        <Slide direction="down">
          <Card
            title={"Community Building"}
            disc={`
            Criamos comunidades engajadas e ativas, que melhoram a reputação da empresa e aquisição de novos clientes. Entendemos que a falta de tempo e recursos para gerenciar as redes sociais e plataformas de comunidade, gera uma presença inconsistente além da falta de resposta dos membros.
            
            Cada comunidade é personalizada para cada projeto, focando em objetivos específicos e assuntos em comum.Para isso acontecer, utilizamos gestão e monitoramento contínuos da comunidade, incluindo a criação de conteúdo, interação com membros e acompanhamento de métricas de engajamento.
            
            Utilizando diversas estratégias, gerenciamos campanhas específicas para cada comunidade e seu nicho.
            `}
            imgUrl={"https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64830dec2083cf1e58bc0f50_AdobeStock_581479342-p-1080.jpeg"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            title={"Meaningful Growth"}
            disc={`Oferecemos um serviço de growth completo e eficaz, que contempla desde a criação e execução de estratégias de growth, como o aumento do número de cliques, pesquisa de perfis nichados e estabelecimento de parcerias de divulgação, até o aumento de engajamento diário, com mais curtidas, respostas e compartilhamentos de conteúdo estratégico.

            Nosso serviço conta ainda com a projeção de crescimento mensal, utilizando KPI e OKR para definir metas claras e alcançáveis. Desse modo, nossos parceiros têm acesso a um trabalho pautado em objetivos tangíveis, que podem ser medidos e analisados para que os resultados sejam ainda mais efetivos.`}
          imgUrl={"https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64830f51eb52f0b64997f67c_1557.gif"}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default About;

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
 
 @media (max-width: 840px) {
    width: 90%;
    padding: 0;
  }
  /* /* display: grid; */
  padding: 5rem 5rem 0rem;
  margin: 0 auto;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* margin-top: 4rem; */
  /* gap: 2rem;  */
  
`;
