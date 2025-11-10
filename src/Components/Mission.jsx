import { motion } from "framer-motion";

export default function Mission() {
  const initiatives = [
    "🌳 Tree Plantation Drives: Regular events in urban and rural areas to improve air quality and restore green cover.",
    "♻ Waste Reduction Campaigns: Promoting waste segregation and recycling through community workshops.",
    "💧 Clean Water Projects: Rainwater harvesting and clean water access solutions for sustainable use.",
    "📚 Environmental Education: Awareness campaigns and eco-clubs in schools and colleges."
  ];

  return (
    <section
      className="p-8 bg-green-50 rounded m-4 shadow flex flex-col gap-8"
      id="mission"
      data-aos="fade-left"
    >
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
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
      </div>

      {/* Initiatives Section */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-800">Our Initiatives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {initiatives.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
