// src/Components/Gallery.jsx
import React from "react";

export default function Gallery() {
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
      className="py-20 bg-green-50"
      id="gallery"
      data-aos="zoom-in-up"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700">Image Gallery</h2>
        <p className="text-gray-600 mt-2">Capturing our mission in action</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500 bg-white"
            data-aos="fade-up"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover"
            />
            <p className="text-center py-2 text-gray-700 font-medium">{img.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
