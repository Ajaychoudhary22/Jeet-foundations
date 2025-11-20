// src/Components/Navbar.jsx
import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import LanguageContext from "../LanguageContext";

export default function Navbar({ onVolunteerClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);

  const links = [
    { name: lang === "en" ? "Home" : "होम", href: "#home" },
    { name: lang === "en" ? "About" : "हमारे बारे में", href: "#about" },
    { name: lang === "en" ? "Mission" : "मिशन", href: "#mission" },
    { name: lang === "en" ? "Event" : "इवेंट", href: "#event" },
    { name: lang === "en" ? "Program" : "प्रोग्राम", href: "#program" },
    { name: lang === "en" ? "Donate" : "डोनेट", href: "#donate" },
    { name: lang === "en" ? "Contact" : "संपर्क करें", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <span role="img" aria-label="leaf">🌿</span>
          <span>{lang === "en" ? "Jeet Welfare Foundation" : "जीत वेलफेयर फाउंडेशन"}</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* LANGUAGE DROPDOWN (DESKTOP) */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white text-green-800 rounded px-2 py-1 font-semibold"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          {/* VOLUNTEER BUTTON */}
          <button
            onClick={onVolunteerClick}
            className="bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-300 font-semibold transition"
          >
            {lang === "en" ? "Volunteer" : "स्वयंसेवक"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-6 py-4 space-y-3">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-yellow-200"
            >
              {link.name}
            </a>
          ))}

          {/* LANGUAGE OPTION MOBILE */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full bg-white text-green-800 rounded px-2 py-1 font-semibold"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          {/* VOLUNTEER MOBILE */}
          <button
            onClick={() => {
              setIsOpen(false);
              onVolunteerClick();
            }}
            className="w-full bg-yellow-400 text-green-900 py-2 rounded font-semibold hover:bg-yellow-300"
          >
            {lang === "en" ? "Volunteer" : "स्वयंसेवक"}
          </button>
        </div>
      )}
    </nav>
  );
}
