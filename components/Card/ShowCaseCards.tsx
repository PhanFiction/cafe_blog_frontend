"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface ShowCaseCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    img: string;
    imgAlt: string | "";
    link: string | "";
  };
  index: number;
}

function ShowCaseCard({ item, index }: ShowCaseCardProps) {
  const ref = useRef(null);

  // useInView from framer-motion: returns boolean when ref intersects viewport
  // the "amount" option is similar to threshold. Use a modest amount so it triggers earlier.
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // animation controls let us explicitly start/stop animations
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#3F3E3E] mb-2">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>

      <a href={item.link} target="_blank" rel="noreferrer">
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white text-lg font-medium">View Details</span>
        </div>
      </a>
    </motion.article>
  );
}

export default ShowCaseCard;