"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Coffee, PenLine, Plus, Trash } from "lucide-react";
import DragAndDropImage from "@/components/ImageUploader/ImageUploader";

export default function CreateRecipeBlog() {
  const [type, setType] = useState("recipe");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [fileSizeOverLimit, setFileSizeOverLimit] = useState(false);
  const [title, setTitle] = useState<string>("");
  // Ingredients + steps as arrays
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log({
      uploadedImage,
      title,
      ingredients,
      steps,
      description,
    });

    setUploadedImage(null);
    setFileSizeOverLimit(false);
  };

  const removeImage = () => setUploadedImage(null);

  // Ingredient handlers
  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Step handlers
  const updateStep = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-md transition-all text-sm sm:text-base hover:cursor-pointer ${
              type === "recipe"
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-200"
            }`}
          >
            <Coffee size={18} /> Recipe
          </button>

          <button
            onClick={() => setType("blog")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-md transition-all text-sm sm:text-base border hover:cursor-pointer ${
              type === "blog"
                ? "bg-stone-900 text-white"
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
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:ring-2 focus:ring-stone-600"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          {type === "recipe" && (
            <div className="space-y-3">
              <label className="text-stone-700 font-semibold text-lg">
                Ingredients
              </label>

              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <input
                    type="text"
                    value={ingredient}
                    placeholder={`Ingredient ${index + 1}`}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    className="flex-1 border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:ring-2 focus:ring-stone-600"
                  />

                  {ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-700"
                    >
                      <Trash size={18} />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addIngredient}
                className="flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900"
              >
                <Plus size={18} /> Add Ingredient
              </button>
            </div>
          )}

          {/* Steps */}
          {type === "recipe" && (
            <div className="space-y-3">
              <label className="text-stone-700 font-semibold text-lg">Steps</label>

              {steps.map((step, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <textarea
                    rows={2}
                    value={step}
                    placeholder={`Step ${index + 1}`}
                    onChange={(e) => updateStep(index, e.target.value)}
                    className="flex-1 border border-stone-300 rounded-xl px-4 py-2 text-stone-800 shadow-sm focus:ring-2 focus:ring-stone-600"
                  />

                  {steps.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStep(index)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-700"
                    >
                      <Trash size={18} />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addStep}
                className="flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900"
              >
                <Plus size={18} /> Add Step
              </button>
            </div>
          )}

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-stone-700 font-semibold mb-1 text-lg">
              Description
            </label>
            <textarea
              rows={5}
              className="border border-stone-300 rounded-xl px-4 py-3 text-stone-800 shadow-sm focus:ring-2 focus:ring-stone-600"
              placeholder="Describe your recipe or write your blog..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <DragAndDropImage
            image={uploadedImage}
            setImage={setUploadedImage}
            removeImage={removeImage}
            setFileSizeOverLimit={setFileSizeOverLimit}
          >
            <div className="text-stone-600">Drag & drop an image, or click to upload</div>
          </DragAndDropImage>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-stone-800 transition-all hover:cursor-pointer"
          >
            Publish {type === "recipe" ? "Recipe" : "Blog"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
