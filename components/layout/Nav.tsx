"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Adds scroll effect to remove nav when user scrolls down and unhides nav when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      // check if the current scroll is greater than last scroll
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide nav
        setIsVisible(false);
      } else {
        // Scrolling up, show nav
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }

    // Add scroll event listener to page
    window.addEventListener('scroll', handleScroll);
    
    // unmount the scroll event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);

  }, [lastScrollY]);
  
  return (
    <nav className={`fixed w-full bg-[#222121] p-4 border-b border-[#3F3E3E] z-20
      transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`
      }>
      <div className="flex items-center justify-between md:mx-12">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width="90"
            height="100"
            className="2xl:w-auto md:h-auto max-w-full"
          />
        </Link>
        <ul className="flex gap-3 md:gap-4">
          <Link href="/" className="font-rubik text-md hover:font-rubikGlitch hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-500 hover:to-green-900 bg-clip-text hover:text-transparent font-semibold hover:font-normal duration-300">
            <li className="">Home</li>
          </Link>
          <Link href="/" className="font-rubik text-md hover:font-rubikGlitch hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-500 hover:to-green-900 bg-clip-text hover:text-transparent font-semibold hover:font-normal duration-300">
            <li className="">Gears</li>
          </Link>
          <Link href="/contact" className="font-rubik text-md hover:font-rubikGlitch hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-500 hover:to-green-900 bg-clip-text hover:text-transparent font-semibold hover:font-normal duration-300">
            <li className="">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}