import NavBar from "./Components/NavBar";
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App font-main">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
