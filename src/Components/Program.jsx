// src/Components/Program.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Program() {
  return (
    <section
      className="py-20 px-6 bg-green-50 text-gray-800"
      id="program"
      data-aos="fade-up"
    >
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
            <strong> Social Work (S.W.) course</strong>.  
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
    </section>
  );
}
