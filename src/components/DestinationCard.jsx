import React from "react";

export default function DestinationCard({ destination }) {
  return (
    <div
      key={destination.id}
      className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Destination Image */}
      <img
        src={destination.img}
        alt={destination.name}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex flex-col justify-end p-6 transition-all duration-500">
        <h3 className="text-white text-2xl font-semibold">{destination.name}</h3>
        <p className="text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Explore Now →
        </p>
      </div>
    </div>
  );
}
