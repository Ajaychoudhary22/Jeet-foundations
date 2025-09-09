export default function Initiatives() {
  const data = [
    "🌳 Tree Plantation Drives: Regular events in urban and rural areas to improve air quality and restore green cover.",
    "♻ Waste Reduction Campaigns: Promoting waste segregation and recycling through community workshops.",
    "💧 Clean Water Projects: Rainwater harvesting and clean water access solutions for sustainable use.",
    "📚 Environmental Education: Awareness campaigns and eco-clubs in schools and colleges."
  ];

  return (
    <section className="p-8 bg-green-50 rounded m-4 shadow" id="initiatives" data-aos="zoom-in">
      <h2 className="text-2xl font-bold mb-4">Our Initiatives</h2>
      <ul className="list-disc pl-6 space-y-2">
        {data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
}
