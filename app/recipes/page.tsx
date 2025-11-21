"use client";
import React from "react";
import { motion } from "framer-motion";
import ShowCaseCard from "@/components/Card";

const recipes = [
  {
    id: 1,
    title: "Classic Latte",
    description: "Smooth espresso balanced with velvety steamed milk.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Iced Mocha",
    description: "Chocolate and espresso come together over refreshing ice.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Espresso Tonic",
    description: "Bright, citrusy tonic water paired with bold espresso.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Caramel Macchiato",
    description: "Layered espresso with milk and a drizzle of golden caramel.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Cold Brew",
    description: "Slow-steeped overnight for a smooth, low-acid cup.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Cappuccino",
    description: "Rich espresso topped with steamed milk and airy foam.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
];

export default function RecipesPage() {
  return (
    <section className="min-h-screen bg-[#f8f6f3] p-4">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#3F3E3E] mb-4">
          Coffee Recipes ☕
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From cozy classics to creative brews — explore recipes crafted to
          bring café magic into your kitchen.
        </p>
      </motion.div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {recipes.map((recipe, index) => (
          <ShowCaseCard key={recipe.id} item={recipe} index={index} />
        ))}
      </div>
    </section>
  );
}
