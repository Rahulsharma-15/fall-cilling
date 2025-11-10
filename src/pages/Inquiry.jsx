import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import contact from "../assets/images/contact.jpg"

export default function Inquiry() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // replace with your Web3Forms API key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("✅ Message sent successfully!");
      e.target.reset();
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[55vh] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discuss your plan with <p className="text-yellow-500">Shree Shayam Fall Ceilings</p>
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
           <b>From homes to offices — we create ceilings that inspire.</b>
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 px-6 md:px-16 bg-gray-50 flex-1">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell us about your design plans..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>

          {result && (
            <p className="mt-6 text-center text-gray-700 font-medium">{result}</p>
          )}
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-yellow-600 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-4">Shree Shayam Fall Ceilings</h3>
          <p className="text-lg text-gray-100">
            Your trusted partner for unforgettable working experiences.
          </p>
          <p className="text-l mt-2 text-gray-100">
           <b> Contact us at</b> : shreeshyamFallCeilings1234@gmail.com | +91 9829272530, +91 9928815702
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
