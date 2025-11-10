// src/Components/Navbar.jsx
import React from "react";

export default function Navbar({ onVolunteerClick }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Event", href: "#event" },
    { name: "Gallery", href: "#gallery" },
    { name: "Program", href: "#program" },
    { name: "Map", href: "#map" }, // ✅ Added Map link
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold">🌿 JWF Foundation</h1>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={onVolunteerClick}
            className="bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-300 font-semibold transition"
          >
            Volunteer
          </button>
        </div>
      </div>
    </nav>
  );
}
