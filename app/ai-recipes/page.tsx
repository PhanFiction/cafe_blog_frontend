"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AICoffeeRecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setRecipe("");

    // --- Mock AI call (replace later with your OpenAI API call)
    await new Promise((r) => setTimeout(r, 2000));
    setRecipe(
      `☕ Try this recipe:
1. Pull a double espresso shot.
2. Froth 6oz of milk with a touch of ${ingredients}.
3. Pour slowly for a silky latte texture.
4. Sprinkle a bit of cocoa or cinnamon on top. Enjoy!`
    );

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7f3ef] to-[#d7c7b9] text-[#3e2f1c] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif">
          AI Coffee Recipe Generator
        </h1>
        <p className="text-lg text-[#4a3a27]">
          Type your ingredients, and let our AI Barista craft a unique coffee recipe for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <input
            type="text"
            placeholder="e.g. espresso, milk, honey"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full sm:w-3/4 px-4 py-3 rounded-xl border border-[#3e2f1c] focus:outline-none focus:ring-2 focus:ring-[#a17c5e] bg-white"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-[#3e2f1c] text-white font-semibold rounded-xl hover:bg-[#5a4432] transition"
          >
            Generate
          </button>
        </div>

        {loading && (
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg mt-10"
          >
            ☕ Brewing your perfect recipe...
          </motion.div>
        )}
        
        {!loading && recipe && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md text-left whitespace-pre-wrap"
          >
            {recipe}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
