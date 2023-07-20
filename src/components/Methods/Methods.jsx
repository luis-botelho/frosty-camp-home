import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Methods = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          
          <h4>Nossa metodologia</h4>
          <p>
          Aqui na FrostyCamp desenvolvemos uma metodologia de melhoria continua através de um acompanhamento próximo das campanhas e feedback bilateral de todos os resultados.

Esse sistema nos permite acertar sua campanha mais rapidamente e ter maior previsibilidade de resultados.
          </p>
          {/* <a href="#Footer">Contato</a> */}
          
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://choranmidias.com.br/wp-content/uploads/2023/04/Apresentacao-Reuniao-Kick-off-1.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default Methods;

const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: -1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    
  }
`;
const Texts = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:1rem;
  

  h4 {
    font-size: 30px;
    font-family: "Belleza", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    font-family: "Belleza", sans-serif;
    letter-spacing: 2px;
    /* text-transform: uppercase; */
    padding: 0;
    padding: 0;
    
  }

  a{
    flex:1;
    padding: 0.7rem 2rem;
    text-decoration: none;
    margin:1rem;
    cursor: pointer;
    background-color: transparent;
    border: solid white 1px;
    border-radius: 4px;
    color: #fff;
    font-size: 8px;
    letter-spacing: 2px;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      color: #2e9dff;
      border-color: #2e9dff;
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
