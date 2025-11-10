import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import t_grid from "../assets/images/t_grid.jpeg";
import gypsum from "../assets/images/gypsum.webp";
import pvc from "../assets/images/pvc.jpeg";
import section from "../assets/images/section.jpeg";
import window from "../assets/images/window.webp";
import z from "../assets/images/z.jpeg";

// ✅ Hero section background image
import headerBg from "../assets/images/product_bg1.jpg";

export default function Products() {
  const places = [
    {
      name: "T-Grid Ceilings (Rs.50/Sq.ft.)",
      img: t_grid,
      desc: "It consists of a grid framework of metal T shaped runners (also called tees) which form the visible pattern; ceiling tiles or panels “lay in” or drop into this grid.",
      link: "https://www.ramcohilux.com/grid-ceiling.html",
    },
    {
      name: "Gypsum Ceilings (Rs.75/Sq.ft.)",
      img: gypsum,
      desc: "A gypsum ceiling, also known as a false ceiling or plasterboard ceiling, is a secondary ceiling that is suspended below the main structural roof. It is made from gypsum boards—lightweight panels composed of calcium sulfate dihydrate. Gypsum ceilings have become very popular in modern architecture and interior design due to their smooth finish, elegant appearance, and practical advantages.",
      link: "https://www.gyproc.in/blog/gypsum-ceilings",
    },
    {
      name: "PVC Ceilings (Rs.65/Sq.ft.)",
      img: pvc,
      desc: "A PVC ceiling is a type of false ceiling made from Polyvinyl Chloride (PVC) panels. This material is a durable form of plastic that is lightweight, water-resistant, and easy to maintain. PVC ceilings are widely used in modern interior design for both residential and commercial spaces because they combine affordability with a neat, attractive finish..",
      link: "https://advancelam.com/pvc-ceiling-panels-guide/",
    },
    {
      name: "2.5*1.5 Section (Rs.180/Sq.ft.)",
      img: section,
      desc: "A 2.5 × 1.5 section refers to a rectangular hollow section (RHS) or metal frame member that measures 2.5 inches by 1.5 inches in cross-section. It is usually made from galvanized iron (G.I.), aluminum, or mild steel, and is widely used in gypsum and PVC ceiling frameworks, partition walls, and other light construction works..",
      // link: "https://www.tourism.rajasthan.gov.in/pushkar.html",
    },
    {
      name: "Domaal Window Section (Rs.500/Sq.ft.)",
      img: window,
      desc: "A Domaal window section refers to an aluminum window frame system commonly used in residential, commercial, and office buildings. The term “Domaal” generally describes lightweight aluminum profiles designed for fabricating sliding or openable window frames. These sections are preferred for their strength, durability, and modern appearance.",
      link: "https://ostenta.in/domal-vs-system-windows-which-is-best-for-luxury-homes/",
    },
    {
      name: "Z-Section Window Partion (starting Rs.300/Sq.ft.)",
      img: z,
      desc: "A Z-section window partition is a type of aluminum or steel framing profile that has the shape of the letter “Z” when viewed from the side. It is commonly used in window and partition systems to create strong, lightweight, and neatly aligned frames for glass panels in offices, homes, and commercial buildings.",
      link: "https://nirmaloverseas.com/blog/understand-window-door-sections-c-section-u-section-and-z-section/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* ✅ Hero Section with background image */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
           Transform Your Space with Stunning{" "}
            <span className="text-yellow-400">Fall Ceilings</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
           Add elegance, comfort, and modern charm to every corner of your home.
          </p>
        </div>
      </section>

      {/* ✅ product Section */}
      <section className="py-16 px-6 md:px-16 bg-white flex-1">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Famous Fall Ceilings and Sections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          <b> Discover creative ceiling designs that elevate your home’s beauty.</b>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600 mb-4">{place.desc}</p>
                <a
                  href={place.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 text-white px-5 py-2 rounded-full font-medium hover:bg-yellow-700 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
