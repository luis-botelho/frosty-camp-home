import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { disc, title, imgUrl } = props;
  return (
    <Container>
      <div className="logo">
        <img src={imgUrl} alt="alogo" srcset="" />
      </div>
      <h4>{title}</h4>
      <p>{disc}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  color: #333;
  align-items: center;
  border-radius: 5px;
  border: #dcebf7 solid 1px;
  background-color: #fff;
  /* height: 60vh; */
  padding: 1rem 3rem;
  margin: 2rem;
  
  

  @media(max-width:840px){
    border: none;
    padding: 0;
    width:100%;
  }

  img {
    margin: 1rem auto;
    width: 80%;
    /* height: 10%; */
  }
  
  h4 {
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
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 25px;
    color: #6a859c;
    width: 100%;
    height:15rem;
    overflow: auto;
  }
  `;
