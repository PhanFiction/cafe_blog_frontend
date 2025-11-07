"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: "Gear", img: "/gear-sm-color.svg", href: "/gear" },
  { name: "Blog", img: "/beans-sm-color.svg", href: "/blog" },
/*   { name: "Roasting", img: "/roasting-sm-color.svg", href: "/" },
  { name: "Brewing", img: "/brewing-sm-color.svg", href: "/" }, */
  { name: "Receipes", img: "/recipes-sm-color.svg", href: "/recipes" },
]

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav
      className={`fixed w-full bg-[#e9e6e6] p-2 border-b border-[#3F3E3E] z-20 text-black transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between mx-4 md:mx-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/coffee-favicon.png"
            alt="logo"
            width={60}
            height={60}
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-rubik text-md group font-semibold duration-300 flex items-center hover:text-gray-700"
            >
              <li className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="w-5 h-5 group-hover:opacity-50 transition-opacity duration-300 mr-2"
                />
                <span>{item.name}</span>
              </li>
              <li className="relative hidden md:flex items-center justify-center">
                <Image
                  src="/menu-hover.svg"
                  alt="hover"
                  width={12}
                  height={12}
                  className="opacity-0 w-3 h-3 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                />
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-transform ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center mt-4 md:hidden gap-4 bg-[#e9e6e6] py-4 rounded-lg shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-rubik text-lg font-semibold hover:text-gray-700 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}