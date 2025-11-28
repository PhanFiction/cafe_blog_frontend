"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Coffee, PenLine } from "lucide-react";
import DragAndDropImage from "@/components/ImageUploader/ImageUploader";

export default function CreateRecipeBlog() {
  const [type, setType] = useState("recipe");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [fileSizeOverLimit, setFileSizeOverLimit] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setUploadedImage(null);
    setFileSizeOverLimit(false);
    console.log();
  }

  const removeImage = () => setUploadedImage(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-stone-200 to-stone-100 p-4 sm:p-6 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 space-y-8 border border-stone-300"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
            Create {type === "recipe" ? "a Recipe" : "a Blog"}
          </h1>
          <p className="text-stone-500 text-base sm:text-lg">
            Share your coffee creations with the world!
          </p>
        </div>

        {/* Switcher */}
        <div className="flex justify-center gap-3 sm:gap-4 py-2 flex-wrap">
          <button
            onClick={() => setType("recipe")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-md transition-all hover:cursor-pointer text-sm sm:text-base ${
              type === "recipe"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-200"
            }`}
          >
            <Coffee size={18} /> Recipe
          </button>

          <button
            onClick={() => setType("blog")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-md transition-all hover:cursor-pointer text-sm sm:text-base border ${
              type === "blog"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-200"
            }`}
          >
            <PenLine size={18} /> Blog
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-stone-700 font-semibold mb-1 text-lg">Title</label>
            <input
              type="text"
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>

          {/* Ingredients - only for recipe */}
          {type === "recipe" && (
            <div className="flex flex-col">
              <label className="text-stone-700 font-semibold mb-1 text-lg">Ingredients</label>
              <textarea
                rows={4}
                className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
                placeholder="List ingredients here..."
                value={ingredients}
                onChange={(e) => {setIngredients(e.target.value)}}
              />
            </div>
          )}

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-stone-700 font-semibold mb-1 text-lg">Description</label>
            <textarea
              rows={6}
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="Describe your recipe or write your blog..."
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
            />
          </div>

          {/* Image Upload with Drag and Drop */}
          <DragAndDropImage
            image={uploadedImage}
            setImage={setUploadedImage}
            removeImage={removeImage}
            setFileSizeOverLimit={setFileSizeOverLimit}
          >
            {/* You can pass any children here, like an icon or text */}
            <div className="text-stone-600">Drag and drop an image here, or click to select one</div>
          </DragAndDropImage>

          {/* Submit */}
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
