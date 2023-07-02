import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { disc, title, imgUrl } = props;
  return (
    <Container>
      <div className="logo">
        
      <img src={imgUrl} alt="alogo" srcset="" />
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
  text-align: center;
  border: #dcebf7 solid 1px;
  /* height: 60vh; */
  padding: 3rem;

  /* .logo{
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    border-radius: 100%;
    width: 4rem;
    margin: .5rem;
    
  } */
  img {
    width: auto;
    height: 40vh;
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
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
    color: #6a859c;
  }
`;
