import React from 'react'
import Hero from "../Components/Hero";
import InfoSection from "../Components/InfoSection";
import ProductsPage from "../Pages/ProductsPage";

const Home = () => {
    return (
        <div>
            <Hero />
            <InfoSection />
            <ProductsPage />
        </div>
    )
}

export default Home