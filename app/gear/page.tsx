"use client";
import React from "react";
import ShowCaseCard from "@/components/Card";
import { motion } from "framer-motion";

const gear = [
    {
      id: 1,
      title: "Casabrew CM5418 Espresso Machine",
      description: "My daily driver espresso machine. Consistent, compact, and perfect for home brewing.",
      img: "https://m.media-amazon.com/images/I/61B+INhxmmL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0DNM9BL2R?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
    },
    {
      id: 2,
      title: "DF54 Grinder",
      description: "Delivers precise grind size control for dialing in espresso shots with great consistency.",
      img: "https://m.media-amazon.com/images/I/615tVnE-9-L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0D1NMR67G?ref=ppx_yo2ov_dt_b_fed_asin_title"
    },
    {
      id: 3,
      title: "51mm Bottomless Portafilter",
      description: "Enhances espresso extraction visibility and helps improve shot quality through better crema formation.",
      img: "https://m.media-amazon.com/images/I/71ewhV1oW2L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0D9TB1NN9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
    },
    {
      id: 4,
      title: "Maestri House Rechargeable Espresso Scale",
      description: "Precision scale that helps me monitor brew ratios and extraction times perfectly.",
      img: "https://m.media-amazon.com/images/I/61wysQzMn5L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0CBK9QHLY?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1&th=1"
    },
    {
      id: 5,
      title: "WOTOR Boston Cocktail Shaker Set",
      description: "Essential for crafting cocktails at home — this set includes all the tools needed for mixing drinks.",
      img: "https://m.media-amazon.com/images/I/61YzdFEm4XL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0CNX3BNC5?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
    },
    {
      id: 6,
      title: "51mm Puck Screen",
      description: "Improves espresso extraction by promoting even water distribution over the coffee puck.",
      img: "https://m.media-amazon.com/images/I/81LY0QCxmOL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B09XLMK5LR?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
    },
    {
      id: 7,
      title: "Coffee Distributor, Tamper Leveler, and WDT Tool Set",
      description: "A versatile set of tools for achieving a perfectly level coffee bed and optimal extraction.",
      img: "https://m.media-amazon.com/images/I/71KDMoZPwoL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0DXD8VB95?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
    }
];

export default function Gear() {
  return (
    <section className="min-h-screen bg-[#f6f4f2] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3F3E3E] mb-4">My Coffee Gear Setup</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here’s a look at the tools that fuel my daily coffee ritual — each one plays a key role in crafting the perfect cup.
          </p>
        </motion.div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gear.map((item, i) => (
            <ShowCaseCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}



// export default function Gear() {
  
//   return (
//     <section className="min-h-screen bg-[#f6f4f2] px-6 py-20 md:px-16 lg:px-24" key={pathname}>
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl font-bold text-[#3F3E3E] mb-4">
//             My Coffee Gear Setup
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Here’s a look at the tools that fuel my daily coffee ritual — each
//             one plays a key role in crafting the perfect cup.
//           </p>
//         </div>

//         {/* Gear Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {gear.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
//             >
//               {/* Image */}
//               <div className="relative h-64 w-full overflow-hidden">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-[#3F3E3E] mb-2">
//                   {item.name}
//                 </h2>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>

//               {/* Overlay on hover */}
//               <a href={item.link} target="_blank">
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium">
//                     View Details
//                   </span>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
