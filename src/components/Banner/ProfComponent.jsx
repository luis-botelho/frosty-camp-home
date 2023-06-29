import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        
        <h1>IMPULSIONANDO<br></br> COMUNIDADES</h1>
        <h3>CONECTANDO MUNDOS</h3>
        
        <button>INTRO</button>
       
      </Texts>
      
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .82), rgba(0, 0, 0, .82)), url("https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/6413975e05419edf48d393d9_OpVc.gif");
  height:rem;
  padding-top: 3rem;
  width: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 100%;
 
    
  }
  @media (max-width: 640px) {
  
    
  }
`;
const Texts = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  padding: 10rem;
  h1 {
    font-size: 5rem;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 2rem;
    text-transform: capitalize;
    margin-top: 1.5rem;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
    background-color: transparent;
    border: solid white 1px;
    border-radius: 3px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
      border-color:blue;
    }
  }
`;

// 