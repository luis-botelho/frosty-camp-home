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
  width: 25vw;
  /* display: flex; */

  text-align: center;
  /* flex-direction: column; */
  color: #333;
  /* padding: 2rem; */
  
  border-radius: 5px;
  border: #dcebf7 solid 1px;
  background-color: #fff;
  height: 87vh;
  /* padding: 1rem ; */
  margin-bottom: 2rem;
  
  

  @media(max-width:840px){
    border: none;
    padding: 0;
    width:100%;
  }

  img {
    /* margin: 1rem auto; */
    width: 80%;
    margin-top: 5px;
    /* height: 30vh; */
  }
  
  h4 {
    /* margin: 1rem ; */
    text-align: center;
    /* padding: 2rem; */
    color: #676770;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-size: 1.3rem;
    /* width: 80%; */
    font-weight: 300;
    line-height: 30px;
    /* min-height: 90px; */
  }
  
  p {
    /* margin-top: 10px; */
    margin: 1rem;
    /* padding: 2rem; */
    /* margin-bottom: 2rem; */
    font-size: 1rem;
    font-weight: 300;
    line-height: 25px;
    color: #6a859c;
    /* width: 100%; */
    height:20vh;
    overflow: auto;
  }
  `;
