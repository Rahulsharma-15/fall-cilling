import React from "react"
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="flex flex-col items-center gap-4 text-center px-4">
        {/* Brand Name */}
        <h3 className="text-2xl font-bold text-yellow-500 tracking-wide"> Shree Shyam Fall Ceilings</h3>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-2">
          {/* <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
          >
            <FaFacebookF />
          </a> */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
          >
            <FaInstagram />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
          >
            <FaTwitter />
          </a> */}
          <a
            href="https://wa.me/6377067563"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Moving Single Line */}
        <div className="relative w-20 h-[2px] bg-yellow-500 mt-4 rounded-full animate-move"></div>

        {/* Copyright + Devignify Credit */}
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          © {new Date().getFullYear()}  Shree Shyam Fall Ceilings. All rights reserved.
          <br />
          Designed and Developed by{" "}
          <a
            href="https://devignify.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 font-medium transition-colors"
          >
            Devignify
          </a>
        </p>
      </div>
    </footer>
  )
}
