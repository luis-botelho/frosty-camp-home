import styled from "styled-components";
import ContactUs from "../ContactUs/ContactUs";
import { useState } from "react";

export const ProfComponent = () => {
  const [isContactUsModalOpen, setContactUsModalOpen] = useState(false);
  const toggleContactUsModal = () => {
    setContactUsModalOpen((prevOpen) => !prevOpen);
  };

  return (
    <Container>
      <Texts className="texts">
        <h1>
          IMPULSIONANDO<br></br> COMUNIDADES
        </h1>
        <h3>CONECTANDO MUNDOS</h3>

        <ContactUsButton onClick={toggleContactUsModal}>
          Contato
        </ContactUsButton>
        {/* <a href="#about">INTRO</a> */}
        <ContactUs
          isOpen={isContactUsModalOpen}
          onClose={toggleContactUsModal}
        />
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
  border: 1px solid #000;
  /* background-color: #fff; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)),
    url("https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/6413975e05419edf48d393d9_OpVc.gif");
  /* padding-top: 10rem;
  padding-bottom: 15rem; */
  width: 100%;
  height: 100vh;
  padding: 15rem 0;
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  
  @media (max-width: 840px) {
    /* width: 100%; */
    .texts h1 {
      font-size: 3rem;
    }
    .texts h3 {
      font-size: 1.5rem;
    }
    .texts a {
      /* font-size: .5rem; */
    }
  }
  @media (max-width: 640px) {
    .texts h1 {
      font-size: 2rem;
    }
    .texts h3 {
      font-size: 1rem;
    }
  }
`;
const Texts = styled.div`
  /* display: flex; */
  opacity: 1;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  padding: 1rem;

  /* padding: 10rem; */
  h1 {
    /* font-size: 5rem; */
    letter-spacing: 2px;
    color: #fff;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;

    margin-bottom: 30px;
    font-family: "Belleza", sans-serif;
    font-size: 4vw;
    font-weight: 300;
    line-height: 60px;
  }
  h3 {
    color: #f0f0f0;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-family: "Belleza", sans-serif;
    font-size: 2vw;
    font-weight: 300;
    line-height: 25px;
  }

  a {
    padding: 0.7rem 2rem;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    border: solid white 1px;
    border-radius: 4px;
    color: #fff;
    position: inherit;
    /* z-index: 10; */
    /* font-size: .8vw; */
    /* display:${(props) => (props.bar ? "none" : "block")}; */
    /* display:none; */
    letter-spacing: 2px;
    font-weight: 500;

    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      color: #01be96;
      border-color: #01be96;
    }
  }
`;
const ContactUsButton = styled.button`
  padding: 0.7rem 2rem;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: solid white 1px;
  border-radius: 4px;
  color: #fff;
  position: inherit;
  /* z-index: 10; */
  /* font-size: .8vw; */
  /* display:${(props) => (props.bar ? "none" : "block")}; */
  /* display:none; */
  letter-spacing: 2px;
  font-weight: 500;

  filter: drop-shadow(0px 10px 10px #01be9551);
  :hover {
    color: #01be96;
    border-color: #01be96;
  }
`;

//
