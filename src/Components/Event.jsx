// src/Components/Event.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Event() {
  const [lang, setLang] = useState("en");

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

  const content = {
    en: [
      "He was born on 15 November 1875 in Ulihatu village, Jharkhand.",
      "Birsa Munda awakened a strong sense of unity, self-respect, and freedom among the tribal community.",
      "He led the great tribal rebellion ‘Ulgulan’ against British rule.",
      "Slogan — “Abua Dishum, Abua Raj” meaning “Our Land, Our Rule!”",
      "He was also a great social reformer and spiritual guide.",
      "He inspired people to stay away from addiction, injustice, and blind beliefs.",
      "He sacrificed his life at the age of just 25, but his ideals remain immortal.",
      "He is honored with the title “Dharti Aba” meaning “Father of the Earth”.",
    ],
    hi: [
      "उनका जन्म 15 नवंबर 1875 को उलीहातू गाँव, झारखंड में हुआ था।",
      "बिरसा मुंडा जी ने आदिवासी समाज में एकता, स्वाभिमान और आज़ादी की भावना जगाई।",
      "उन्होंने अंग्रेजों के खिलाफ उलगुलान (महान विद्रोह) का नेतृत्व किया।",
      "नारा — “अबुआ दिशुम, अबुआ राज” यानी हमारा देश, हमारा राज!",
      "वे समाज सुधारक और आध्यात्मिक नेता भी थे।",
      "उन्होंने समाज को नशे, अन्याय और अंधविश्वास से मुक्त होने का संदेश दिया।",
      "मात्र 25 वर्ष की आयु में शहीद हो गए, लेकिन उनका आदर्श आज भी अमर है।",
      "उन्हें “धरती आबा” यानी धरती के पिता के नाम से सम्मानित किया जाता है।",
    ],
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
        {/* 🌍 OLD EVENT */}
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

        {/* OLD EVENT SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mx-auto w-full md:w-3/4 lg:w-2/3"
        >
          <Slider {...settings}>
            <div>
              <img src="/office_photo/Event.jpg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" />
            </div>
            <div>
              <img src="/office_photo/Event2.jpg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" />
            </div>
            <div>
              <img src="/office_photo/Event3.jpg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" />
            </div>
          </Slider>
        </motion.div>

        {/* ⭐ BIRSA MUNDA SECTION */}
        <div className="flex justify-center items-start mt-16 mb-2 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            {lang === "en"
              ? "Birsa Munda Jayanti — The Immortal Hero of Tribal Pride"
              : "बिरसा मुंडा जयंती — आदिवासी स्वाभिमान के अमर वीर"}
          </h2>

          {/* ⭐ UPDATED TRANSLATE BUTTON (NO OVERLAP) */}
          <div
            className="absolute -top-6 right-2 bg-white px-4 py-1.5 rounded-full shadow-lg cursor-pointer text-sm font-semibold border border-green-200"
          >
            <span
              onClick={() => setLang("en")}
              className={`mr-3 cursor-pointer ${lang === "en" ? "text-green-700" : "text-gray-500"}`}
            >
              EN
            </span>
            |
            <span
              onClick={() => setLang("hi")}
              className={`ml-3 cursor-pointer ${lang === "hi" ? "text-green-700" : "text-gray-500"}`}
            >
              HI
            </span>
          </div>
        </div>

        {/* BIRSA MUNDA TEXT */}
        <div className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-justify">
          {content[lang].map((line, i) => (
            <p key={i} className="mb-2">
              {line}
            </p>
          ))}
        </div>

        {/* BIRSA MUNDA SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mx-auto w-full md:w-3/4 lg:w-2/3"
        >
          <Slider {...settings}>
            <div><img src="/office_photo/1.jpeg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" /></div>
            <div><img src="/office_photo/2.jpeg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" /></div>
            <div><img src="/office_photo/3.jpeg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" /></div>
            <div><img src="/office_photo/4.jpeg" className="rounded-xl shadow-xl w-full h-[450px] object-contain bg-black" /></div>
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
}
