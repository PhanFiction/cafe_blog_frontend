"use client";

import { motion } from "framer-motion";
import { Coffee, Droplets, CupSoda, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchSingleRecipe } from "@/services/index";
import { useParams } from "next/navigation";

const recipe = {
  title: "Classic Espresso",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  ingredients: [
    "18g freshly ground coffee (medium-fine)",
    "36g filtered water",
    "Milk for steaming (optional)",
    "Syrup or sugar to taste (optional)",
  ],
  steps: [
    "Purge the group head and lock in your portafilter with fresh grounds.",
    "Start extraction and aim for a 25–30 second shot.",
    "If making a latte or cappuccino, steam milk until velvety.",
    "Pour milk over the espresso and serve immediately.",
  ],
  comments: [
    {
      id: 1,
      user: "CoffeeFan23",
      text: "This came out so smooth — perfect shot timing!",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "BaristaGirl",
      text: "Great base recipe. I added caramel syrup and it was amazing.",
      time: "Yesterday",
    },
  ],
};

export default function CoffeeRecipePage() {
  const params = useParams();
  const id = params.id;
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleRecipe(id);
        setRecipeData(data);
        console.log("Fetched recipe data:", data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border">

          {/* HEADER IMAGE */}
          <div className="relative">
            <motion.img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-72 object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Floating title overlay */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-4 py-2 rounded-xl"
            >
              <h1 className="text-white text-2xl font-bold flex items-center gap-2">
                <Coffee className="w-6 h-6" />
                {recipe.title}
              </h1>
            </motion.div>
          </div>

          <div className="p-6">

            {/* INGREDIENTS */}
            <section className="mt-8">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <Droplets className="w-5 h-5 text-green-600" />
                Ingredients
              </h3>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
                className="mt-4 space-y-2"
              >
                {recipe.ingredients.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-700 text-sm flex gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="font-bold text-green-600">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </section>

            {/* STEPS */}
            <section className="mt-10">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <CupSoda className="w-5 h-5 text-orange-600" />
                Steps
              </h3>

              <motion.ol
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="mt-4 space-y-4"
              >
                {recipe.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex gap-3"
                  >
                    <span className="text-lg font-bold text-orange-600">{i + 1}.</span>
                    <span className="text-sm text-gray-700">{step}</span>
                  </motion.li>
                ))}
              </motion.ol>
            </section>

            {/* COMMENTS */}
            <section className="mt-12 border-t pt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                Comments
              </h3>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                className="mt-5 space-y-4"
              >
                {recipe.comments.map((c) => (
                  <motion.div
                    key={c.id}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="bg-gray-50 p-4 rounded-xl border"
                  >
                    <div className="text-sm font-bold text-gray-800">@{c.user}</div>
                    <div className="text-sm text-gray-700 mt-1">{c.text}</div>
                    <div className="text-xs text-gray-500 mt-1">{c.time}</div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </article>
      </motion.div>
    </main>
  );
}
