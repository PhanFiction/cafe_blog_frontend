"use client";

import { motion } from "framer-motion";

export default function CoffeeRecipePage() {
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

  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <article className="bg-white rounded-2xl shadow p-6">
          {/* Header */}
          <div className="relative overflow-hidden rounded-xl">
            <motion.img
              src={recipe.image}
              alt={recipe.title}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-60 object-cover"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mt-6"
          >
            {recipe.title}
          </motion.h1>

          {/* Ingredients */}
          <section className="mt-6">
            <h3 className="font-semibold text-lg">Ingredients</h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="mt-3 space-y-2"
            >
              {recipe.ingredients.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  className="text-sm text-gray-700"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* Steps */}
          <section className="mt-6">
            <h3 className="font-semibold text-lg">Steps</h3>
            <motion.ol
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="mt-3 space-y-3"
            >
              {recipe.steps.map((step, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  className="flex gap-3"
                >
                  <span className="text-sm font-bold text-green-600">{i + 1}.</span>
                  <span className="text-sm text-gray-700">{step}</span>
                </motion.li>
              ))}
            </motion.ol>
          </section>

          {/* Comments */}
          <section className="mt-10 border-t pt-6">
            <h3 className="text-lg font-semibold">Comments</h3>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="mt-4 space-y-4"
            >
              {recipe.comments.map((c) => (
                <motion.div
                  key={c.id}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-gray-50 p-4 rounded-xl border"
                >
                  <div className="text-sm font-semibold text-gray-800">@{c.user}</div>
                  <div className="text-sm text-gray-700 mt-1">{c.text}</div>
                  <div className="text-xs text-gray-500 mt-1">{c.time}</div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </article>
      </motion.div>
    </main>
  );
}