import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/signup/Signup";
import AboutPage from "./landingPage/about/AboutPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import ProductPage from "./landingPage/product/ProductPage";
import SupportPage from "./landingPage/support/SupportPage";
import Login from "./landingPage/Login/Login";
import NotFound from "./landingPage/NotFound";

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;