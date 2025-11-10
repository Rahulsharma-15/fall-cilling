import React from "react"
import gallry1 from "../assets/gallery/gallry1.jpg"
import gallry2 from "../assets/gallery/gallry2.jpg"
import gallry3 from "../assets/gallery/gallry3.jpeg"
import gallry4 from "../assets/gallery/gallry4.webp"
import gallry5 from "../assets/gallery/gallry5.webp"
import gallry6 from "../assets/gallery/gallry6.webp"
import gallry7 from "../assets/gallery/gallry7.jpeg"
import gallry8 from "../assets/gallery/gallry8.jpeg"

const places = [
  { name: "PVC Roof Ceilings", img: gallry1 },
  { name: "PVC Gypsum Ceilings", img: gallry2 },
  { name: "PVC Roof Ceilings", img: gallry3 },
  { name: "PVC Gypsum Ceilings", img: gallry4 },
  { name: "2.5*1.5 Section Partion", img: gallry5 },
  { name: "Domaal Window Section", img: gallry6 },
  { name: "Z-Section Window Partion", img: gallry7 },
  { name: "Domaal Window Section", img: gallry8 },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Shree Shyam Fall Ceilings Gallery
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {place.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
