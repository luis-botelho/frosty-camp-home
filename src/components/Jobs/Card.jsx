import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { disc, title, info1, info2, info3, imgUrl } = props;
  return (
    <Container>  
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
  flex-direction: column;
  color: #fff;
  align-items: center;
  border-radius:5px;
  padding: 1rem;
  text-align: center;
    
  img {
    height: 35rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    
  }
`;
