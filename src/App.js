import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Methods/Methods";
import Footer from "./components/Footer/Footer";
import Jobs from "./components/Jobs/Jobs";
import Team from "./components/Projects/Team";
import Services from "./components/Service/Services";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import React, { useState, useEffect } from "react";

function App() {
  const [isContactUsModalOpen, setContactUsModalOpen] = useState(false);
  const toggleContactUsModal = () => {
    setContactUsModalOpen((prevOpen) => !prevOpen);
  };
  const [headerColors, setHeaderColors] = useState({
    backgroundColor: "transparent",
    textColor: "white", // Change to the color you want for the text when scrolling
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // You can adjust the scroll threshold value as needed
  
      setHeaderColors({
        backgroundColor: scrollY > threshold ? "#ffffff" : "transparent",
        textColor: scrollY > threshold ? "#333" : "#ffffff",
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Banner>
        <Header
          backgroundColor={headerColors.backgroundColor}
          textColor={headerColors.textColor}
          
        />
        <ProfComponent />
      </Banner>
      <Jobs />
      <Services />
      <Clients />
      <About />
      <Team />

      {/* <ContactUs/> */}
      {/* <LightColor> */}

        <Footer />
      {/* </LightColor> */}
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 255, 1) 35%,
    rgba(231, 241, 244, 1) 100%
  );
  height: auto;

  width: 100%;
  z-index: 10;
  @media (max-width: 640px) {
    /* height: 100%;
    padding-bottom: 2rem; */
  }
`;

const LightColor = styled.div`
  background-color: #fff;
`;

