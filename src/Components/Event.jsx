// src/Components/Event.jsx
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Event() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // every 1 sec
    arrows: false,
    pauseOnHover: false,
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
        {/* 🌍 Event Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          Healing for World Peace 2025 – A Global Movement from Bhopal
        </h2>

        {/* 📰 Event Details */}
        <div className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-justify">
          <p className="mb-4">
            <strong>Bhopal, Oct 5, 2025:</strong> Led by <strong>Ayush Gupta</strong>, Founder of
            <strong> Anannt Oorja</strong>, the grand event <em>“Healing for World Peace 2025”</em>
            was held at <strong>Minto Hall, Bhopal</strong>, bringing together over <strong>1,000 healers</strong> 
            and participants from around the world to channel collective energy for global harmony.
          </p>

          <p className="mb-4">
            The gathering united multiple healing modalities — <strong>Reiki, Yoga, Pranic Healing, and Meditation</strong> —
            under one vision: <em>“Peace Begins Within.”</em> Supported by <strong>Madhya Pradesh Tourism</strong>,
            the event also attempted a world record for the <strong>largest simultaneous healing session</strong>.
          </p>

          <blockquote className="italic text-green-700 border-l-4 border-green-500 pl-4 mb-4">
            “When thousands of hearts align for peace, the world truly heals,” said Ayush Gupta.
          </blockquote>

          <p>
            <strong>Anannt Oorja</strong> aims to continue this global movement, inspiring individuals
            to heal themselves and the world through collective consciousness and spiritual awareness.
          </p>
        </div>

        {/* 🌿 Auto Sliding Event Images */}
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
                alt="Healing for World Peace Event 1"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event2.jpg"
                alt="Healing for World Peace Event 2"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event3.jpg"
                alt="Healing for World Peace Event 3"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
}
