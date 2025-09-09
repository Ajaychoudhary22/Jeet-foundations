import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import VideoSection from "./Components/VideoSection";
import About from "./Components/About";
import Mission from "./Components/Mission";
import Initiatives from "./Components/Initiatives";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VolunteerForm from "./Components/VolunteerForm";

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
