// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Navbar({ onVolunteerClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    
    { name: "Event", href: "#event" },
  
    { name: "Program", href: "#program" },
  
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <span role="img" aria-label="leaf">🌿</span>
          <span>Jeet Welfare Foundation</span>
        </h1>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // close menu on click
              className="block text-white hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              onVolunteerClick();
            }}
            className="w-full bg-yellow-400 text-green-900 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Volunteer
          </button>
        </div>
      )}
    </nav>
  );
}
