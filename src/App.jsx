import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import About from "./components/About";
import Mission from "./components/Mission";
import Initiatives from "./components/Initiatives";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VolunteerForm from "./components/VolunteerForm";

export default function App() {
  const [showForm, setShowForm] = useState(false); // form visibility state

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-green-50 text-gray-800">
      <Header />
      {/* Pass the function to Navbar */}
      <Navbar onVolunteerClick={() => setShowForm(true)} />
      <VideoSection />
      <About />
      <Mission />
      <Initiatives />
      <Gallery />
      <Testimonials />
      <Donate />
      <Contact />
      <Footer />
      {/* Pass the state and setter to VolunteerForm */}
      <VolunteerForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}
