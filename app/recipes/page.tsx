"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShowCaseCard from "@/components/Card";
import { fetchAllRecipes } from "../../services/index";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchAllRecipes();
        setRecipes(data);
        console.log("Fetched recipes:", data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    loadRecipes();
  }, []);

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
          Coffee Recipes
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
