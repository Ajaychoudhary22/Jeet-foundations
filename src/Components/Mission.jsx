import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      className="p-8 bg-green-50 rounded m-4 shadow flex flex-col md:flex-row items-center gap-6"
      id="mission"
      data-aos="fade-left"
    >
      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-800">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To inspire and empower individuals and communities to conserve the environment,
          combat climate change, and live sustainably for the well-being of future generations.
          We aim to protect, preserve, and restore the natural environment through sustainable
          practices, community engagement, and environmental education.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images-platform.99static.com/Sr3IIKSELhbpK0s3qdhA5MS3BCY=/fit-in/900x675/99designs-contests-attachments/11/11380/attachment_11380760"
          alt="Environmental Mission"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
