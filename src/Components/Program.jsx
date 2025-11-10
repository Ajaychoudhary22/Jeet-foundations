// src/Components/Program.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Program() {
  const images = [
    {
      src: "https://static.vecteezy.com/system/resources/previews/043/533/607/non_2x/a-young-girl-and-her-family-are-planting-trees-free-photo.jpg",
      alt: "Tree Plantation",
    },
    {
      src: "https://png.pngtree.com/png-clipart/20240716/original/pngtree-tree-with-recycling-arrows-png-image_15568748.png",
      alt: "Recycling Symbol",
    },
    {
      src: "https://th.bing.com/th/id/R.3c9845c4813779e088fba73193d94959?rik=mNbbTp70PdEX1g&riu=http%3a%2f%2feskipaper.com%2fimages%2fnature-photos-5.jpg&ehk=O4SD2yVAEjML4JQi0bZzdb%2boeX6XwHC2pbeBaYKrhLs%3d&risl=1&pid=ImgRaw&r=0",
      alt: "Nature Scene",
    },
    {
      src: "https://thumbs.dreamstime.com/z/education-logo-vector-drawing-represents-design-58481419.jpg",
      alt: "Education Logo",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-green-50 text-gray-800"
      id="program"
      data-aos="fade-up"
    >
      {/* 🌿 Program Section */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-8"
        >
          🌿 Educational & Social Awareness Program 🌿
        </motion.h2>

        <div className="flex justify-center mb-8">
          <img
            src="https://thumbs.dreamstime.com/z/education-logo-vector-drawing-represents-design-58481419.jpg"
            alt="Education Logo"
            className="w-28 h-28 rounded-full shadow-md border-4 border-green-400"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700 leading-relaxed space-y-6 text-justify bg-white p-8 rounded-2xl shadow-lg"
        >
          <p>
            <strong>🙏 Welcome to the Educational Awareness Initiative of JWF Foundation!</strong>
          </p>

          <p>
            The <strong>Madhya Pradesh Jan Abhiyan Parishad</strong> invites students
            who are unable to attend college regularly to enroll in the
            <strong> Social Work (B.S.W.) course</strong>.  
            This program is open for all students who have passed their 12th grade and is
            recognized as equivalent to a graduation-level qualification.
          </p>

          <p>
            Students interested in working for social causes in the future can also
            participate in this program. <strong>Today is the last date for registration</strong>,
            and through our organization.
            The registration fee is <strong>₹2250</strong>.
          </p>

          <p>
            Required documents include:
            <ul className="list-disc list-inside">
              <li>10th and 12th mark sheets</li>
              <li>Aadhaar card</li>
              <li>Passport-size photograph</li>
            </ul>
          </p>

          <p>
            Registration will be facilitated by the respective
            <strong> Block Coordinator</strong>.  
            For more details or assistance, please connect with our
            <strong> JWF Foundation team.</strong>
          </p>

          <p className="text-green-700 font-semibold text-center mt-8">
            “Let’s educate, empower, and engage — for a better tomorrow.” 🌱
          </p>
        </motion.div>
      </div>

      {/* 🖼️ Image Gallery Section */}
      <div
        className="mt-16"
        data-aos="zoom-in-up"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-700">Image Gallery</h2>
          <p className="text-gray-600 mt-2">Capturing our mission in action</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover"
              />
              <p className="text-center py-2 text-gray-700 font-medium">
                {img.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
