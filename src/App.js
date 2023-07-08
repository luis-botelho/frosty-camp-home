import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Methods/Methods";
import Footer from "./components/Footer/Footer";
import Jobs from "./components/Jobs/Jobs";
import Team from "./components/Projects/Team";
import Services from "./components/Service/Services";
import About from "./components/About/About";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
      </Banner>
      <ProfComponent />
      <Jobs />
      <Services />
      <Clients />
      <About />
      <Team />
      <LightColor>
        <Footer />
      </LightColor>
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
  position: fixed;
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
