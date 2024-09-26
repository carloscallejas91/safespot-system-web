import MenuFixed from "./components/header/MenuFixed.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Solutions from "./components/sections/Solutions.jsx";
import SmartDistancing from "./components/sections/SmartDistancing.jsx";
import OthersCovidSolutions from "./components/sections/OthersCovidSolutions.jsx";
import SkinCancer from "./components/sections/SkinCancer.jsx";
import ArtificialIntelligenceHealthcare from "./components/sections/ArtificialIntelligenceHealthcare.jsx";
import BusinessIntelligence from "./components/sections/BusinessIntelligence.jsx";
import Challenges from "./components/sections/Challenges.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <MenuFixed />
      <Home id="início" />
      <About id="sobre" />
      <Solutions id="soluções" />
      <SmartDistancing id="distanciamento-inteligente" />
      <OthersCovidSolutions id="identificação-mascaras-e-controle-temperatura-corporal" />
      <SkinCancer id="skin-cancer" />
      <ArtificialIntelligenceHealthcare id="ia-saúde" />
      <BusinessIntelligence id="business-intelligence" />
      <Challenges id="desafios" />
      <Contact id="contato" />
      <Footer />
    </>
  );
}

export default App;
