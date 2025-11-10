import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import about_bg1 from "../assets/images/about_bg1.jpeg"; // hero background image
import storyImg from "../assets/images/about.jpg"; // story image

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      {/* ✅ Hero Section with background image */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${about_bg1})` }}
      >
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
            About <span className="text-yellow-400"> Shree Shyam Fall Ceilings</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl drop-shadow-md">
           Add a modern touch of luxury, lighting, and style to every corner of your home or office.
          </p>
        </div>
      </section>

      {/* ✅ Company Story Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative text-center">
              Our Story
              <span className="block h-[3px] w-15 bg-yellow-500 mx-auto mt-2 animate-slide"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
             Welcome to <b>Shree Shyam  ForCeiling</b> & Interior Solutions — a name trusted for over 8+ years in transforming ordinary spaces into stunning interiors. Founded and led by <b>Ankit Sharma</b>, our agency specializes in a wide range of ceiling and interior works including <b>PVC ceiling, gypsum ceiling, Z-section, and domal window</b> installations.
            </p>
            <p className="text-gray-600 leading-relaxed">
             With years of hands-on experience and a commitment to perfection, we take pride in delivering creative, durable, and customized interior solutions that bring your vision to life. Whether it’s a home, office, or commercial project, our team ensures top-notch craftsmanship, high-quality materials, and on-time project completion.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <img
              src={storyImg}
              alt="About Rajasthan Tours"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Mission Section */}
      <section className="py-20 bg-yellow-50 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 relative inline-block">
            Our Mission
            <span className="block h-[3px] w-20 bg-yellow-500 mx-auto mt-2 animate-slide"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
           Our mission is to transform ordinary spaces into extraordinary environments through innovative false ceiling solutions. We aim to combine quality craftsmanship, modern design, and durable materials to enhance comfort, functionality, and aesthetics in every project we deliver.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "Innovative Designs",
                desc: "Creative ceiling concepts that redefine modern interiors.",
              },
              {
                title: "Quality Materials",
                desc: "We use only premium-grade materials for long-lasting performance.",
              },
              {
                title: "Custom Solutions",
                desc: "Every design is tailored to match your style and space.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
