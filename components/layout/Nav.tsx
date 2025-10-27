"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: "Gears", img: "/gear-sm-color.svg", href: "/" },
  { name: "Beans", img: "/beans-sm-color.svg", href: "/" },
  { name: "Roasting", img: "/roasting-sm-color.svg", href: "/" },
  { name: "Brewing", img: "/brewing-sm-color.svg", href: "/" },
  { name: "Receipes", img: "/recipes-sm-color.svg", href: "/" },
]

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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
    <nav className={`fixed w-full bg-[#e9e6e6] p-4 border-b border-[#3F3E3E] z-20 text-black
      transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`
      }>
      <div className="flex items-center justify-between md:mx-12">
        <Link href="/">
          <Image
            src="/coffee-favicon.png"
            alt="logo"
            width="90"
            height="100"
            className="2xl:w-auto md:h-auto max-w-full"
          />
        </Link>
        <ul className="flex gap-3 md:gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="font-rubik text-md group bg-clip-text font-semibold duration-300 flex items-center">
              <li>
                <Image
                  src={item.img}
                  alt="logo"
                  width="90"
                  height="100"
                  className="w-6 md:h-auto max-w-full group-hover:opacity-50 transition-opacity duration-300 mr-2"
                />
              </li>
              <div>
                <li className="items-center justify-center hidden md:flex relative">
                  <Image
                    src="/menu-hover.svg"
                    alt="logo"
                    width="90"
                    height="100"
                    className="opacity-0 w-3 md:h-auto max-w-full group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                  />
                </li>
                <li className="">{item.name}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}