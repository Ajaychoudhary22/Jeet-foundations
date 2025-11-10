// src/App.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// ✅ Components
import Navbar from "./Components/Navbar";
import ImageCarousel from "./Components/VideoSection"; // renamed component
import About from "./Components/About";
import Mission from "./Components/Mission";
import Event from "./Components/Event";
import Program from "./Components/Program";
import Map from "./Components/Map";
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
      {/* 🌿 Navbar */}
      <Navbar onVolunteerClick={() => setShowForm(true)} />

      {/* 🖼️ Hero Image Carousel */}
      <section id="home" className="m-0 p-0" data-aos="fade-up">
        <ImageCarousel />
      </section>

      {/* 🌱 About Section */}
      <section id="about" className="m-0 p-0" data-aos="fade-up">
        <About />
      </section>

      {/* 🎯 Mission Section */}
      <section id="mission" className="m-0 p-0" data-aos="fade-up">
        <Mission />
      </section>

      {/* 🎉 Event Section */}
      <section id="event" className="m-0 p-0" data-aos="fade-right">
        <Event />
      </section>

      {/* 📚 Program Section */}
      <section id="program" className="m-0 p-0" data-aos="fade-up">
        <Program />
      </section>

      {/* 🗺️ Map Section */}
      <section id="map" className="m-0 p-0" data-aos="fade-up">
        <Map />
      </section>

      {/* 💚 Donate Section */}
      <section id="donate" className="m-0 p-0" data-aos="zoom-in">
        <Donate />
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="m-0 p-0" data-aos="fade-up">
        <Contact />
      </section>

      {/* 🌍 Footer */}
      <Footer />

      {/* 🤝 Volunteer Form Modal */}
      <VolunteerForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}
