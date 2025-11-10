import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
// import FairsFestivals from "./pages/FairsFestivals";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry"; // Contact page
import Gallery from "./pages/Gallery"; // Make sure this file exists

export default function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        {/* <Route path="/fairsfestivals" element={<FairsFestivals />} /> */}
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Inquiry />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}
