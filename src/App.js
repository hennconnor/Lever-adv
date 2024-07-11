import NavBar from "./Components/NavBar";
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import ErrorPage from "./Pages/ErrorPage";
import OrderForm from "./Pages/OrderForm.js";
import SampleForm from "./Pages/SampleForm.js";

import { products } from './Products.js'

function App() {
  return (
    <div className="App font-main">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<ProductsPage products={products} />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products/:id' element={<Product products={products} />} />
        <Route path='products/:id/order' element={<OrderForm />} />
        <Route path='products/:id/sample' element={<SampleForm />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
