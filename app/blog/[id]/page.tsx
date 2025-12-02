"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      className="min-h-screen bg-[#f6f3ee] text-[#3e3d3d]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* --- HERO SECTION --- */}
      <div className="relative h-[65vh] w-full overflow-hidden group">
        {/* subtle parallax */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover brightness-[0.55]"
            priority
          />
        </motion.div>

        {/* title + meta */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h1>

          <motion.p
            className="text-white/90 text-sm md:text-base italic tracking-wide"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {post.date} • By {post.author}
          </motion.p>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <motion.div
        className="max-w-4xl mx-auto p-6 md:p-12 -mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="backdrop-blur-lg bg-white/50 p-8 md:p-10 rounded-2xl shadow-xl border border-white/40">
          <p className="text-lg leading-relaxed whitespace-pre-line text-[#4a4747]">
            {post.content}
          </p>
        </div>
      </motion.div>

      {/* --- BACK BUTTON --- */}
      <div className="text-center pb-16">
        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 mx-auto bg-[#3e3d3d] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#514f4f] transition-colors hover:cursor-pointer"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
