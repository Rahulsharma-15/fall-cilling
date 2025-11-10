// import React from "react";
// import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// import pushkarFair from "../assets/images/pushkar-fair.jpg"; // hero background image
// import pushkarImg from "../assets/images/pushkar.jpg";
// import jaisalmerImg from "../assets/images/jaisalmer.jpg";
// import jaipurImg from "../assets/images/jaipur.jpg";
// import bikanerImg from "../assets/images/bikaner.jpg";
// import udaipurImg from "../assets/images/udaipur.jpg";
// import mountabuImg from "../assets/images/mountabu.jpg";

// export default function FairsFestivals() {
//   const places = [
//     {
//       name: "Pushkar",
//       image: pushkarImg,
//       festival: "Pushkar Camel Fair",
//       time: "November",
//       description:
//         "One of the world's largest camel fairs, where traders, locals, and tourists gather for cultural performances, camel races, and folk music.",
//     },
//     {
//       name: "Jaisalmer",
//       image: jaisalmerImg,
//       festival: "Desert Festival",
//       time: "February",
//       description:
//         "A vibrant three-day festival celebrating the golden sands of Rajasthan with folk dance, music, and camel races against the backdrop of Jaisalmer Fort.",
//     },
//     {
//       name: "Jaipur",
//       image: jaipurImg,
//       festival: "Teej & Jaipur Literature Festival",
//       time: "July - January",
//       description:
//         "Teej celebrates monsoon and womanhood with colorful processions, while the Lit Fest attracts global writers and thinkers every January.",
//     },
//     {
//       name: "Bikaner",
//       image: bikanerImg,
//       festival: "Bikaner Camel Festival",
//       time: "January",
//       description:
//         "Dedicated to the ship of the desert, this festival showcases camel races, dances, and a stunning parade near Junagarh Fort.",
//     },
//     {
//       name: "Udaipur",
//       image: udaipurImg,
//       festival: "Mewar Festival",
//       time: "March - April",
//       description:
//         "A celebration of spring, where women dress idols of Lord Shiva and Parvati and immerse them in Lake Pichola amid music and fireworks.",
//     },
//     {
//       name: "Mount Abu",
//       image: mountabuImg,
//       festival: "Summer Festival",
//       time: "May - June",
//       description:
//         "A lively festival with folk performances, boat races, and fireworks held at the serene Nakki Lake.",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
//       <Navbar />

//       {/* ✅ Hero Section with background image */}
//       <section
//         className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${pushkarFair})`,
//         }}
//       >
//         {/* subtle overlay for readability */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10 px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//             Fairs & Festivals of <span className="text-yellow-400">Rajasthan</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
//             Experience the colors, culture, and traditions that make Rajasthan truly magical
//           </p>
//         </div>
//       </section>

//       {/* ✅ Festivals Grid */}
//       <section className="py-16 px-6 md:px-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 relative">
//             Popular Fairs & Festivals
//             <span className="block h-[3px] w-24 bg-yellow-500 mx-auto mt-2 animate-slide"></span>
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {places.map((place, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-6 space-y-3">
//                   <h3 className="text-2xl font-semibold text-gray-800">
//                     {place.name}
//                   </h3>
//                   <p className="text-yellow-600 font-medium">
//                     {place.festival} —{" "}
//                     <span className="text-gray-600">{place.time}</span>
//                   </p>
//                   <p className="text-gray-600 leading-relaxed">
//                     {place.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <Footer /> */}
//     </div>
//   );
// }
