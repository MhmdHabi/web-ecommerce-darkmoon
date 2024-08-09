import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSectionPage from "./components/Elements/HeroSection";
import NavbarHero from "./components/Elements/NavbarHero";
import ProductsPage from "./components/Elements/Products";
import CartPage from "./components/Elements/Cart";
import Footer from "./components/Elements/Footer";
import AboutUs from "./components/Elements/About";
import ProductDetail from "./components/Elements/ProductDetail";
import { ProductProvider } from "./components/Elements/ProductContext";
import TrendingPage from "./components/Elements/Trending";
import Contact from "./components/Elements/Contact";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <div className="flex flex-col min-h-screen">
          <NavbarHero />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HeroSectionPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ProductProvider>
    </Router>
  );
};

export default App;
