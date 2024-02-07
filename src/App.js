import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import InfoSection from "./Components/InfoSection";
import Footer from './Components/Footer'
import Products from "./Components/Products";

function App() {
  return (
    <div className="App font-main">
      <NavBar />
      <Hero />
      <InfoSection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
