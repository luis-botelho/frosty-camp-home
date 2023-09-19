import React, { useState } from "react";
import styled from "styled-components";

const Header = ({ backgroundColor, textColor}) => {
  const [bar, setBar] = useState(false);
  // const [active, setActive] = useState(false);
  return (
    <Container bar={bar} backgroundColor={backgroundColor} textColor={textColor} > 
      <Logo>
        <span className="green"></span>
        <h1 className="brand-text" style={{ color: !bar ? textColor : "white" }}>FROSTYCAMP</h1>
      </Logo>
      <Nav bar={bar} textColor={textColor} >
        {/* <span>
          <a href="#"></a>
        </span> */}

        <span>
          <a
            style={{ color: !bar ? textColor : "white" }}
            onClick={() => setBar(!bar)}
            href="#jobs"
          >
            Oque Fazemos
          </a>
        </span>
        <span>
          <a
            style={{ color: !bar  ? textColor : "white" }}
            onClick={() => setBar(!bar)}
            href="#service"
          >
            Como operamos
          </a>
        </span>
        <span>
          <a
            style={{ color: !bar ? textColor : "white" }}
            onClick={() => setBar(!bar)}
            href="#project"
          >
            Nossa equipe
          </a>
        </span>
        {/* <span>
          <a href="#">Porfolio</a>
        </span> */}
      </Nav >
      <div onClick={() => setBar(!bar)} className="bars" >
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  height:3rem;
  /* position: absolute; */
  position: fixed;
  animation: header 500ms ease-in-out;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

  @media (max-width: 840px) {
    width: 100%;
  }
  .bars {
    display: none;
    
    
  }
  @media (max-width: 640px) {
    width: 100%;
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : props.textColor)};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: ${(props) => (props.bar ? "white" : props.textColor)};
          position: absolute;
        }
        :before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }
        :after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 1.8rem;
  }
  h1 {
    font-weight: 300;
    color: #333;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 25px;
  }
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #333;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    /* color: white; */
    z-index: 100;
  }
  span {
    margin-left: 1rem;

    a {
      color: #333;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: ${(props) => (props.textColor )};
        /* background-color: #333; */
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
