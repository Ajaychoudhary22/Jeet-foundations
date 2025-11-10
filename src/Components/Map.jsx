// src/Components/Map.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { useEffect } from "react";

// 🌳 Custom Tree Plantation Icon
const treeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/427/427735.png", // tree planting icon
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -40],
});

const locations = [
  {
    name: "Village Jamoniya Johar, Narsinghgarh",
    description: "Clean city campaign and sapling donation 🌱",
    position: [23.6092, 77.0905],
  },
  {
    name: "Village Mohhamadpur Machnai, Kurawar",
    description: "Community plantation and awareness drive 🌿",
    position: [23.4336, 77.1655],
  },
  {
    name: "Teej Balsi Hanuman Mandir, Bhopal",
    description: "Tree plantation and environment awareness event 🌳",
    position: [23.2599, 77.4126],
  },
  {
    name: "Minto Hall, Bhopal",
    description: "Education & Sustainability Program 🎓",
    position: [23.2377, 77.401],
  },
];

export default function Map() {
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);

  // 🌍 Opens Street View in Google Maps
  const openStreetView = (lat, lng) => {
    const streetUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
    window.open(streetUrl, "_blank");
  };

  return (
    <section
      id="map"
      className="p-8 bg-green-50 rounded m-4 shadow text-center"
      data-aos="fade-up"
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-green-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        🌳 Our Tree Plantation Locations
      </motion.h2>

      <motion.div
        className="rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MapContainer
          center={[23.5, 77.2]}
          zoom={8}
          scrollWheelZoom={true}
          style={{ height: "420px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc, index) => (
            <Marker
              key={index}
              position={loc.position}
              icon={treeIcon}
              eventHandlers={{
                click: () => openStreetView(loc.position[0], loc.position[1]),
              }}
            >
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.description}
                <br />
                <button
                  onClick={() =>
                    openStreetView(loc.position[0], loc.position[1])
                  }
                  className="text-green-700 underline mt-1 font-semibold hover:text-green-900"
                >
                  View Street
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
}
