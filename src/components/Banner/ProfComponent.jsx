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
 background-attachment: fixed;
  background-position: 0 0, 50%;
  background-repeat: repeat repeat;
  background-size: auto, auto;
  opacity: 1;
    text-align: center;
    mix-blend-mode: normal;
    border:1p solid #000;
  background-color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, .82), rgba(0, 0, 0, .82)), url("https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/6413975e05419edf48d393d9_OpVc.gif");
  padding-top: 10rem;
  padding-bottom: 15rem;
  width: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  /* z-index: 1; */
  @media (max-width: 840px) {
    width: 100%;
 
    
  }
  @media (max-width: 640px) {
  
    
  }
`;
const Texts = styled.div`
  /* display: flex; */
  opacity: 1;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  /* padding: 10rem; */
  h1 {
    font-size: 5rem;
    letter-spacing: 2px;
    color: #fff;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 30px;
    font-family: Belleza, sans-serif;
    font-size: 60px;
    font-weight: 300;
    line-height: 60px;
  }
  h3 {
    color: #f0f0f0;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-family: Belleza, sans-serif;
    font-size: 25px;
    font-weight: 300;
    line-height: 25px;

  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    border: solid white 1px;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      color: #2e9dff;
    border-color: #2e9dff;

    }
  }
`;

// 