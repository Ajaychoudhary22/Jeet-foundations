// 🌿 About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="p-8 bg-green-50 flex flex-col md:flex-row items-center gap-8 m-0"
      id="about"
      data-aos="fade-right"
    >
      {/* Left Text */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-800">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Jeet Welfare Foundation</strong> is a non-profit environmental NGO
          committed to protecting our planet through awareness, action, and advocacy. 
          We work with communities, governments, and organizations to promote 
          environmental sustainability. Founded in 2014, we are driven by a mission 
          to create a healthier, greener planet for current and future generations.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://img.freepik.com/premium-vector/create-awareness-posters-highlighting-protection-education-conflict-with-global-symbo_1253715-1883.jpg?w=740"
          alt="Environmental Awareness"
          className="rounded-lg shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
}
