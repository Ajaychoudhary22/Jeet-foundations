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
    autoplaySpeed: 1500,
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
        {/* 🌍 OLD EVENT: Healing for World Peace 2025 */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          Healing for World Peace 2025 – A Global Movement from Bhopal
        </h2>

        <div className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-justify">
          <p className="mb-4">
            <strong>Bhopal, Oct 5, 2025:</strong> Led by <strong>Ayush Gupta</strong>, Founder of
            <strong> Anannt Oorja</strong>, the grand event <em>“Healing for World Peace 2025”</em>
            was held at <strong>Minto Hall, Bhopal</strong>, with over <strong>1,000 healers</strong>.
          </p>

          <p className="mb-4">
            Reiki, Yoga, Pranic Healing, Meditation — sab ek hi vision ke liye jure:
            <em> “Peace Begins Within.”</em>
          </p>

          <blockquote className="italic text-green-700 border-l-4 border-green-500 pl-4 mb-4">
            “When thousands of hearts align for peace, the world truly heals,” — Ayush Gupta
          </blockquote>
        </div>

        {/* 🌿 Old Event Slider */}
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
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event2.jpg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
            <div>
              <img
                src="/office_photo/Event3.jpg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
          </Slider>
        </motion.div>

        {/* ⭐ NEW EVENT: Birsa Munda Jayanti */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mt-16 mb-4">
          बिरसा मुंडा जयंती — आदिवासी स्वाभिमान के अमर वीर
        </h2>

        <div className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-justify">
          <p>उनका जन्म 15 नवंबर 1875 को उलीहातू गाँव, झारखंड में हुआ था।</p>
          <p>बिरसा मुंडा जी ने आदिवासी समाज में एकता, स्वाभिमान और आज़ादी की भावना जगाई।</p>
          <p>उन्होंने अंग्रेजों के खिलाफ उलगुलान (महान विद्रोह) का नेतृत्व किया।</p>
          <p>
            <strong>नारा — "अबुआ दिशुम, अबुआ राज" यानी हमारा देश, हमारा राज!</strong>
          </p>
          <p>वे समाज सुधारक और आध्यात्मिक नेता भी थे।</p>
          <p>उन्होंने समाज को नशे, अन्याय और अंधविश्वास से मुक्त होने का संदेश दिया।</p>
          <p>मात्र 25 वर्ष की आयु में शहीद हो गए, लेकिन उनका आदर्श आज भी अमर है।</p>
          <p>
            <strong>उन्हें “धरती आबा” यानी धरती के पिता के नाम से सम्मानित किया जाता है।</strong>
          </p>
        </div>

        {/* 🌿 New Birsa Munda Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mx-auto w-full md:w-3/4 lg:w-2/3"
        >
          <Slider {...settings}>
            <div>
              <img
                src="/office_photo/1.jpeg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
            <div>
              <img
                src="/office_photo/2.jpeg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
            <div>
              <img
                src="/office_photo/3.jpeg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
            <div>
              <img
                src="/office_photo/4.jpeg"
                className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black"
              />
            </div>
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
}
