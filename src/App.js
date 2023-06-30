import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Jobs from "./components/Jobs/Jobs";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Jobs/>
      <Services />
     
        <Projects />
     
      {/* <Clients /> */}
      <LightColor>
        {/* <Footer /> */}
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(251,251,255,1) 35%, rgba(231,241,244,1) 100%);;
  height: auto;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background-color:#fff;
`;
