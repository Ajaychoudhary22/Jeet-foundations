// src/App.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import Navbar from "./Components/Navbar";
import ImageCarousel from "./Components/VideoSection";
import About from "./Components/About";
import Mission from "./Components/Mission";
import Event from "./Components/Event";
import Program from "./Components/Program";
import Map from "./Components/Map";
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VolunteerForm from "./Components/VolunteerForm";

// Language Context
import LanguageContext from "./LanguageContext";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-green-50 text-gray-800 overflow-x-hidden scroll-smooth">
        
        <Navbar onVolunteerClick={() => setShowForm(true)} />

        <section id="home" data-aos="fade-up">
          <ImageCarousel />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="mission" data-aos="fade-up">
          <Mission />
        </section>

        <section id="event" data-aos="fade-up">
          <Event />
        </section>

        <section id="program" data-aos="fade-up">
          <Program />
        </section>

        <section id="map" data-aos="fade-up">
          <Map />
        </section>

        <section id="donate" data-aos="zoom-in">
          <Donate />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>

        <Footer />

        <VolunteerForm showForm={showForm} setShowForm={setShowForm} />
      </div>
    </LanguageContext.Provider>
  );
}
