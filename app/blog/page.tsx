"use client";
import React, { useState, useEffect } from "react";
import ShowCaseCard from "@/components/Card";
import { motion } from "framer-motion";
import { fetchAllBlogs } from "@/services/index";

const blogs = [
  {
    id: 1,
    title: "Mastering the Perfect Espresso Shot",
    description: "Learn how to pull consistent espresso shots with rich crema and balanced flavor using your home espresso machine.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    date: "Oct 21, 2025",
    author: "Barista Steve",
  },
  {
    id: 2,
    title: "The Art of Frothing Milk for Latte Art",
    description: "Discover how to texture milk to silky perfection and pour hearts, tulips, and rosettas like a pro.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    date: "Oct 28, 2025",
    author: "CoffeeCraft Team",
  },
  {
    id: 3,
    title: "Best Coffee Beans for Espresso Lovers",
    description: "Explore the top-rated coffee beans for espresso — from chocolatey blends to bright and fruity single origins.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    date: "Sep 15, 2025",
    author: "Brew Journal",
  },
  {
    id: 4,
    title: "Cold Brew vs Iced Coffee: What's the Difference?",
    description: "Cold brew and iced coffee are not the same! We break down their brewing process, flavor profile, and caffeine content.",
    img: "https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&w=800&q=80",
    date: "Aug 2, 2025",
    author: "Daily Roast",
  },
  {
    id: 5,
    title: "How to Clean Your Espresso Machine Like a Pro",
    description: "Keep your espresso machine in top shape with these easy cleaning tips that improve taste and extend lifespan.",
    img: "https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&w=800&q=80",
    date: "Jul 30, 2025",
    author: "Cafe Maintenance Tips",
  },
  {
    id: 6,
    title: "5 Underrated Coffee Brewing Methods You Must Try",
    description: "From Aeropress to the clever dripper, these lesser-known brewing methods deliver surprising flavor clarity.",
    img: "https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&w=800&q=80",
    date: "Jun 10, 2025",
    author: "The Coffee Explorer",
  },
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching blog posts from an API
    const fetchData = async () => {
      try {
        const data = await fetchAllBlogs();
        setBlogPosts(data);
        //console.log("Fetched blog posts:", data[0].img);
        console.log(JSON.stringify(data[0].img));
        // You can set the fetched data to state here if needed
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#3e3d3d] p-4">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
          Coffee Blog
        </h1>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, index) => (
          <ShowCaseCard key={post.id} item={post} index={index} />
        ))}
      </div>
    </div>
  );
}
