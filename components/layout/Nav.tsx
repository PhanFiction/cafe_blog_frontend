import React from 'react';

export default function Nav() {
  return (
    <nav className="w-full mb-8 text-black">
      <ul className="flex gap-4 bg-red-100 p-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tools">Tools</a></li>
      </ul>
    </nav>
  );
}
