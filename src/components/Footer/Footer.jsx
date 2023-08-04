import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} FrostyCamp | ALL Rights Reserved
      </Copyright>
      <ScrollToTopButton onClick={scrollUp}>
        <ArrowUp />
      </ScrollToTopButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #edeff2;
  color: #333;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ScrollToTopButton = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #00000013;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  :hover {
    background-color: #2e9dff;
  }
`;

const ArrowUp = styled(AiOutlineArrowUp)`
  width: 100%;
`;
