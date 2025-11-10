import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// 🔹 Hero Slider Images
import rooftop from '../assets/home/rooftop.jpg';
import rooftop2 from "../assets/home/rooftop2.jpg";
import rooftop3 from "../assets/home/rooftop3.jpg";
import rooftop4 from "../assets/home/rooftop4.jpg";

// 🔹 Top Destinations Images
import z from "../assets/images/z.jpeg";
import section from "../assets/images/section.jpeg";
import gypsum from "../assets/images/gypsum.webp";
import wall1 from "../assets/home/wall1.webp";
import wall9 from "../assets/home/wall9.jpg";
import wall2 from "../assets/home/wall2.jpg";
import wall3 from "../assets/home/wall3.jpg";

// 🔹 Gallery Images (12 total)
import wall5 from "../assets/home/wall5.jpeg";
import wall6 from "../assets/home/wall6.jpg";
import wall7 from "../assets/home/wall7.jpeg";
import wall8 from "../assets/home/wall8.avif";

export default function Home() {
  const heroSlides = [
    { id: 1, name: "Transform Your Home with Modern Fall Ceilings", img: rooftop },
    { id: 2, name: "Elegant Lighting Meets Perfect Design", img: rooftop2 },
    { id: 3, name: "Customized Designs for Every Space", img: rooftop3 },
    { id: 4, name: "Redefine Your Interiors with Fall Ceilings Experts", img: rooftop4 },
  ];

  const topDestinations = [
    { id: 1, name: "Gypsum Design", img: gypsum },
    { id: 2, name: "Section Design", img: section },
    { id: 3, name: "Z-Section", img: z },
    { id: 4, name: "PVC Design", img: wall3 },
  ];

  const galleryImages = [
    { id: 1, name: "design1", img: rooftop },
    { id: 2, name: "design2", img: rooftop2 },
    { id: 3, name: "design3", img: rooftop3 },
    { id: 4, name: "design4", img: rooftop4 },
    { id: 5, name: "design5", img: wall1 },
    { id: 6, name: "design6", img: wall9 },
    { id: 7, name: "design7", img: wall2 },
    { id: 8, name: "design8", img: wall3 },
    { id: 9, name: "design9", img: wall5 },
    { id: 10, name: "design10", img: wall6 },
    { id: 11, name: "design11", img: wall7 },
    { id: 12, name: "design12", img: wall8 },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
      {/* 🟡 Hero Carousel */}
      <div className="relative w-full h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((d) => (
            <SwiperSlide key={d.id}>
              <div
                className="relative w-full h-full bg-center bg-cover flex items-center justify-center text-center"
                style={{
                  backgroundImage: `url(${d.img})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="text-white relative z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                   {d.name}
                  </h1>
                 <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6 opacity-90 text-center">
  Stylish designs, premium materials, and expert craftsmanship — we turn every ceiling into a masterpiece.
</p>

                  <a
                    href="/contact"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
                  >
                  Discuss With Us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🟡 Top Destinations Section */}
      <section id="destinations" className="py-16 w-full bg-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 relative inline-block">
            Top Designs
             <span className="block h-[3px] w-24 bg-yellow-500 mx-auto mt-2 animate-slide"></span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
          <b> Upgrade Your Interiors with Modern Fall Ceilings</b>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
          {topDestinations.map((d) => (
            <div
              key={d.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex flex-col justify-end p-6 transition-all duration-500">
                <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
                  {d.name}
                </h3>
                <p className="text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟡 Gallery Section */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 relative inline-block">
          Transforming Spaces with Modern Ceilings Art
             <span className="block h-[3px] w-20 bg-yellow-500 mx-auto mt-2 animate-slide"></span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
         <b>  Add a touch of elegance and sophistication with our cutting-edge Ceilings designs</b>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 md:px-16">
          {galleryImages.map((d) => (
            <div
              key={d.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 group"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  {d.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
