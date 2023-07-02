import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import {  AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
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
            <p>A FrostyCamp Studios é uma empresa especializada em desenvolver e fortalecer comunidades online por meio de estratégias inovadoras e personalizadas. Conosco, você descobrirá o verdadeiro potencial da sua comunidade.</p>
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
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      {/* <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Slide>
      </Form> */}
      <Social>
      <div className="profiles">
          <Slide direction="left">
            <h1>Social</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <FaInstagram/>
              <p>Instagram</p>
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
              <p>Linkedin</p>
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <FaTwitter />
              <p>Twitter</p>
                </a>
              </span>
            </Zoom>
            {/* <Zoom>
              <span>
                <a href="/">
                  < />
                </a>
              </span>
            </Zoom> */}
          </div>
        </div>
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
  padding: 2rem 5rem 2rem ;
  width: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-weight: 300;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  h1{
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: Belleza, sans-serif;
    font-size: 30px;
    font-weight: 300;
  }
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
    color: #6a859c;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
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
  :hover{
    background-color: #2e9dff;
  }
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Social = styled.div`
  flex: 1;
  /* padding: 1rem; */
    h1{
    color: #192024;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: Belleza, sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  .profiles {
    .icons {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-items: start;

      
      cursor: pointer;
      p{
        margin-left: 5px;
        :hover {
          color: #2e9dff;
        }
      }
      a {
          border-bottom: #6e6e6e solid .5px;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-content: space-around;
          margin-top: 0.2rem;
          color: #333;
          text-decoration: none;
          
        }
        
        
        
      }
    }
    

  /* form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  } */
`;
