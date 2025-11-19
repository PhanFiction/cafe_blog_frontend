"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Fake blog data — you can replace this with real data or fetch from API
const blogs = [
  {
    id: 1,
    title: "Mastering the Perfect Espresso Shot",
    description:
      "Learn how to pull consistent espresso shots with rich crema and balanced flavor using your home espresso machine.",
    content: `
Pulling the perfect espresso shot is a balance of grind size, pressure, and timing. 
Use freshly roasted beans, dial in your grind, and keep an eye on your extraction time (25–30 seconds). 
Taste your shots — sour means under-extracted, bitter means over-extracted. 
With practice, you’ll develop that golden ratio every barista dreams of.`,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    date: "Oct 21, 2025",
    author: "Barista Steve",
  },
  {
    id: 2,
    title: "The Art of Frothing Milk for Latte Art",
    description:
      "Discover how to texture milk to silky perfection and pour hearts, tulips, and rosettas like a pro.",
    content: `
Frothing milk isn’t about bubbles — it’s about microfoam. 
Start with cold milk, submerge the steam wand just below the surface, 
and introduce air gently until it feels warm to the touch. 
Then sink the wand to mix the foam evenly. 
Perfect microfoam should look like wet paint and pour like cream.`,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    date: "Oct 28, 2025",
    author: "CoffeeCraft Team",
  },
];

export default function BlogPostPage({ params }: { params: { id: number } }) {
  const post = blogs.find((b) => b.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Post not found ☕</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#f7f5f2] text-[#3e3d3d]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {post.title}
          </motion.h1>
          <p className="text-white/90 text-sm md:text-base italic">
            {post.date} • By {post.author}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center pb-12">
        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3e3d3d] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#5c5959] transition-colors"
          >
            ← Back to Blog
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
