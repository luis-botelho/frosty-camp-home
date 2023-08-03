import React, { useState } from "react";
import { send } from "emailjs-com";
import styled from "styled-components";

const ContactUs = ({ isOpen, onClose }) => {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  if (!isOpen) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_wsukwwi", "template_vz9lizk", toSend, "L82I83H-_y7xnasGk")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("failed", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Começe sua jornada</h2>
        <Form className="contact">
          <form onSubmit={onSubmit}>
            <div className="contact_box">
              <input
                type="text"
                name="first_name"
                // placeholder="First Name"
                value={toSend.first_name}
                onChange={handleChange}
              />
              <label>Nome</label>
            </div>
            <div className="contact_box">
              <input
                type="text"
                name="last_name"
                // placeholder="Last Name"
                value={toSend.last_name}
                onChange={handleChange}
              />
              <label>Sobrenome</label>
            </div>
            <div className="contact_box">
              <input
                type="email"
                name="email"
                // placeholder="Email"
                value={toSend.email}
                onChange={handleChange}
              />
              <label>E-mail</label>
            </div>
            <div className="contact_box">
              <input
                type="text"
                name="massage"
                // placeholder="Message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
            <a href="#" onClick={SubmitEvent}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </Form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactUs;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
`;
const Form = styled.div`
  .contact_box {
    position: relative;
  }
  .contact_box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .contact_box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
  .contact_box input:focus ~ label,
  .contact_box input:valid ~ label {
    top: -20px;
    left: 0;
    /* color: #001be9570; */
    font-size: 12px;
  }
  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #01be9570;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    border: none;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  a:hover {
    background: #01be9570;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #01be9570, 0 0 25px #01be9570, 0 0 50px #01be9570,
      0 0 100px #01be9570;
  }

  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #01be9570;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  a:hover {
    background: #01be9570;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #01be9570, 0 0 25px #01be9570, 0 0 50px #01be9570,
      0 0 100px #01be9570;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #01be9570);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #01be9570);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #01be9570);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #01be9570);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
