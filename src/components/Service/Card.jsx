import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { disc, title } = props;
  return (
    <Container>
      <div className="logo">
        
      <img src="https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/64139a0e134cf71ebb3f3a27_FROSTYCAMP_Prancheta%201-p-500.png" alt="alogo" srcset="" />
      </div>
      <h1>{title}</h1>
      <p>{disc}</p>
      
    </Container>
  );
};

export default Card;

const Container = styled.div`
  /* width: 100%; */

  display: flex;
  text-align: center;
  flex-direction: column;
  color: #333;
  align-items: center;
  justify-content: center;
  border-radius:5px;
  border: #dcebf7 solid 1px;
  /* height: 60vh; */
  padding: 2rem 3rem;
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.2);
  }
  


  /* @media(max-width:840px){
    border: none;
    padding: 0;
    width:100%;
  } */
  .logo{
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    border-radius: 100%;
    width: 4rem;
    margin: .5rem;
    filter: drop-shadow(0px 0px 10px #01be9570);
    
  }
  img {
    width: 4rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.2rem;
    padding: 1rem;
    color: #676770;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;

  }

  p {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
    color: #6a859c;
    width: 100%;
    
  }
  
`;
