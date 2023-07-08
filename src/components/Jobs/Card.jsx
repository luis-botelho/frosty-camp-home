import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { disc, title, info1, info2, info3, imgUrl } = props;
  return (
    <Container className="card">  
      <img src={imgUrl} alt="alogo" srcset="" />
      <h1>{title}</h1>
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
  color: #fff;
  align-items: center;
  border-radius:5px;
  padding: 1rem;


    
  img {
    width: 100%;
    margin-bottom: 20px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  h1 {
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-top: 0;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
  }
`;
