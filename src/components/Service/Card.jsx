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
  display: flex;
  flex-direction: column;
  color: #333;
  align-items: center;
  border-radius:5px;
  padding: 1rem;
  text-align: center;
  border: #33333358 solid .5px;
  height: 60vh;

  .logo{
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    border-radius: 100%;
    width: 4rem;
    margin: .5rem;

  }
  img {
    width: 4rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    
  }
`;
