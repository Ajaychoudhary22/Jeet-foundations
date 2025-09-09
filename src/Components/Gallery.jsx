export default function Gallery() {
  return (
    <section className="p-8 bg-green-50 rounded m-4 shadow" id="gallery" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/Environment1.jpg" alt="Nature" className="rounded shadow" />
        <img src="/Environment1.png" alt="Tree Planting" className="rounded shadow" />
        <img src="/Environment1.jpg" alt="Recycling" className="rounded shadow" />
        <img src="/Environment1.jpg" alt="Education" className="rounded shadow" />
      </div>
    </section>
  );
}
