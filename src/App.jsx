// src/App.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// Components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import VideoSection from "./Components/VideoSection";
import About from "./Components/About";
import Mission from "./Components/Mission";
import Initiatives from "./Components/Initiatives";
import Event from "./Components/Event";
import Gallery from "./Components/Gallery";
import Program from "./Components/Program";
import Map from "./Components/Map"; // ✅ Added Map section
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VolunteerForm from "./Components/VolunteerForm";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 overflow-x-hidden scroll-smooth">
      {/* Navbar fixed top */}
      <Navbar onVolunteerClick={() => setShowForm(true)} />

      {/* Header (below navbar) */}
      <div className="pt-20">
        <Header />
      </div>

      {/* Main Content */}
      <main className="space-y-24">
        <section id="home" data-aos="fade-up">
          <VideoSection />
        </section>

        <section id="about" data-aos="fade-up" className="bg-white py-20">
          <About />
        </section>

        <section id="mission" data-aos="fade-up">
          <Mission />
        </section>

        <section id="initiatives" data-aos="fade-up" className="bg-white py-20">
          <Initiatives />
        </section>

        <section id="event" data-aos="fade-right">
          <Event />
        </section>

        <section id="gallery" data-aos="zoom-in-up" className="bg-white py-20">
          <Gallery />
        </section>

        <section id="program" data-aos="fade-up">
          <Program />
        </section>

        <section id="map" data-aos="fade-up" className="bg-white py-20">
          <Map />
        </section>

        <section id="donate" data-aos="zoom-in" className="bg-white py-20">
          <Donate />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Volunteer Form */}
      <VolunteerForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}
