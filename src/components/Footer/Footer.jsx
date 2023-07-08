import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>SOBRE A FROSTYCAMP</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <p>
              A FrostyCamp Studios é uma empresa especializada em desenvolver e
              fortalecer comunidades online por meio de estratégias inovadoras e
              personalizadas. Conosco, você descobrirá o verdadeiro potencial da
              sua comunidade.
            </p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Entre em contato:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+55 021 99807 2490">+55 021 99807 2490</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">pressplay@frostycamp.com</a>
            </Slide>
          </div>
        </div>

        <Fade>
          <ArrowUp onClick={scrollUp} >
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Social>
        <div className="profiles">
          <Slide direction="left">
            <h1>Social</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <a href="https://www.instagram.com/frostycamp/" target="blank_">
                <FaInstagram className="icon" />
                <p>Instagram</p>
              </a>
            </Zoom>
            <Zoom>
              <a href="https://www.linkedin.com/company/frostycamp/" target="blank_">
                <AiFillLinkedin  className="icon" />
                <p>Linkedin</p>
              </a>
            </Zoom>
            <Zoom>
              <a href="https://twitter.com/FrostyCamp" target="blank_">
                <FaTwitter className="icon" />
                <p>Twitter</p>
              </a>
            </Zoom>
          </div>
        </div>
      <Fade><span>© 2023 FrostyCamp | ALL Rights Reserved</span></Fade>
      </Social>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  background-color: #edeff2;
  color: #333;
  position: relative;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-around;
  font-weight: 300;
  /* text-align: center; */
  @media (max-width: 840px) {
    /* width: 90%; */
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  @media (max-width: 840px) {
    /* width: 90%; */
    h1 {
      padding: 2rem;
    }
  }
  h1 {
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 300;
  }
  .address {
    padding: 2rem;
    @media (max-width: 840px) {
      padding: 0;
    }

    h1 {
      font-size: 1.2rem;
    }

    p {
      /* width: 60%; */
      /* padding: 1rem; */
      margin: 2rem auto;
      font-size: 14px;
      font-weight: 300;
      line-height: 25px;
      color: #6a859c;
    }
  }

  .links {
    padding-left: 2rem;
    @media (max-width: 840px) {
      padding: 0;
      h1 {
        padding: 1rem 0;
      }
    }

    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: #1f1919;

        :hover {
          color: #2e9dff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #00000013;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  :hover {
    background-color: #2e9dff;
  }
  
  @media (max-width: 650px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    text-align:center;
    
  }
`;
const Social = styled.div`
  flex: 1;
  @media (max-width: 650px) {
    span{
      margin-left:0 !important;
      
      font-size:1rem !important;
    }
  }
  h1 {
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: Belleza, sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  span{
    /* text-align: center; */
    margin-left:11rem;
    font-size:1.3rem;
  }
  .profiles {
    .icons {
      padding: 1rem 10rem;
      /* display:flex; */
      margin-bottom: 2rem;
      justify-content: space-around;
      cursor: pointer;
      :hover {
        color: #2e9dff;
      }
      @media (max-width:840px){
        padding:0;
        a .icon{
          margin: 0;
        }
        span{
          position: relative;
        }
      }
      p {
        margin-left: 5px;
      }
      a {
        /* border-bottom: #6e6e6e solid 0.5px; */
        display: flex;
        
        color: #333;
        text-decoration: none;
        margin:.2rem 1rem;
        .icon {
          font-size: 3rem;
        }
        p {
          font-size:1.5rem;
        }
      }
      
    }
  }
`;
