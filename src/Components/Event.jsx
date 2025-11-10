// src/Components/Event.jsx
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Event() {
  // ✅ Slider settings (1 second image change)
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // ← every 1 second
    arrows: false,
    pauseOnHover: false, // so it doesn’t stop on hover
  };

  return (
    <section
      id="event"
      className="m-4 rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-green-50 py-12 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          🌱 Nature & Education Initiatives by JWF Foundation 🌱
        </h2>

        <p className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          The <strong>JWF Foundation</strong> organizes inspiring programs focused on
          <strong> environmental conservation, tree plantation, and educational awareness</strong>.
          These events encourage students and communities to take part in creating a
          greener and more knowledgeable society.  
          Every campaign represents our commitment to building harmony between
          <strong> nature and education</strong>.
        </p>

        {/* 🌿 Auto Sliding Images every 1 sec */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mx-auto w-full md:w-3/4 lg:w-2/3"
        >
          <Slider {...settings}>
            <div>
              <img
                src="/office_photo/Event.jpg"
                alt="JWF Foundation Event 1"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event2.jpg"
                alt="JWF Foundation Event 2"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event3.jpg"
                alt="JWF Foundation Event 3"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
}
