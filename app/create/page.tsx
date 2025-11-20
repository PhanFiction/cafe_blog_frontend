"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Coffee, PenLine } from "lucide-react";

export default function CreateRecipeBlog() {
  const [type, setType] = useState("recipe");

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-stone-200 to-stone-100 p-6 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 space-y-8 border border-stone-300"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-stone-800 tracking-tight">
            Create {type === "recipe" ? "a Recipe" : "a Blog"}
          </h1>
          <p className="text-stone-500 text-lg">Share your coffee creations with the world</p>
        </div>

        {/* Switch */}
        <div className="flex justify-center gap-4 py-2">
          <button
            onClick={() => setType("recipe")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all border ${
              type === "recipe"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-200"
            }`}
          >
            <Coffee size={18} /> Recipe
          </button>

          <button
            onClick={() => setType("blog")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all border ${
              type === "blog"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-200"
            }`}
          >
            <PenLine size={18} /> Blog
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e: FormEvent) => e.preventDefault()}>
          <div className="flex flex-col">
            <label className="text-stone-700 font-semibold mb-1 text-lg">Title</label>
            <input
              type="text"
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="Enter title..."
            />
          </div>

          {type === "recipe" && (
            <div className="flex flex-col">
              <label className="text-stone-700 font-semibold mb-1 text-lg">Ingredients</label>
              <textarea
                rows={4}
                className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
                placeholder="List ingredients here..."
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-stone-700 font-semibold mb-1 text-lg">Description</label>
            <textarea
              rows={6}
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="Describe your recipe or write your blog..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-stone-800 transition-all"
          >
            Publish {type === "recipe" ? "Recipe" : "Blog"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}