// SnacksSection.jsx
import React from "react";

const snacks = [
  {
    id: 1,
    name: "Kettle Studio Potato Chips - Himalayan Pink",
    weight: "113 g",
    price: 99,
    time: "10 MINS",
    image: "/images/kettle-pink.png",
  },
  {
    id: 2,
    name: "Kettle Studio Rock Sea Salt & English Vinegar",
    weight: "113 g",
    price: 99,
    time: "10 MINS",
    image: "/images/kettle-blue.png",
  },
  {
    id: 3,
    name: "Svaras Roasted Khakhra - Handpicked 5 Flavours",
    weight: "5 x 50 g",
    price: 250,
    time: "10 MINS",
    image: "/images/svaras-khakhra.png",
  },
  {
    id: 4,
    name: "Kettle Studio Tabasco Sauce Flavour Potato Chips",
    weight: "113 g",
    price: 99,
    time: "10 MINS",
    image: "/images/kettle-green.png",
  },
  {
    id: 5,
    name: "Nongshim Shrimp Flavoured Hot & Spicy",
    weight: "75 g",
    price: 125,
    time: "10 MINS",
    image: "/images/nongshim-shrimp.png",
  },
  {
    id: 6,
    name: "Kettle Studio Homestyle Potato Crisps - Lime & Chilli",
    weight: "125 g",
    price: 99,
    time: "10 MINS",
    image: "/images/kettle-homestyle.png",
  },
];

const SnacksSection = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Snacks & Munchies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {snacks.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img src={item.image} alt={item.name} className="w-32 h-32 object-contain mb-4" />
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full mb-2">{item.time}</span>
            <h3 className="text-sm font-semibold text-center mb-1">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{item.weight}</p>
            <div className="flex items-center justify-between w-full">
              <span className="font-bold">₹{item.price}</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnacksSection;
