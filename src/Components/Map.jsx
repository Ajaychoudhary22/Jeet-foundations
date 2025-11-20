// src/Components/Map.jsx

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { useEffect } from "react";

// 🌱 Custom Small Icon (Your Own Image)
const treeIcon = new L.Icon({
  iconUrl: "/office_photo/5.jpeg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// 🌍 Updated Locations
const locations = [
  {
    name: "Teej Badli Jamoniya Johar",
    description: "Tree Plantation Activity 🌱",
    position: [23.61882591, 77.02517202],
  },
  {
    name: "Goshala Tindoniya",
    description: "Cow Shelter Plantation 🌿",
    position: [23.62284322, 77.05564106],
  },
  {
    name: "Dharamshal Mohanpur",
    description: "Community Awareness Drive 🌳",
    position: [23.46446653, 77.01686355],
  },
  {
    name: "Gram Panchayat Mana",
    description: "Village Plantation Program 🌾",
    position: [23.56125715, 77.04107961],
  },
  {
    name: "Shree Devnarayn Temple Kankariya Maana",
    description: "Temple Cleanliness & Plantation 🌼",
    position: [23.55355084, 77.06317488],
  },
];

export default function Map() {
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);

  // 👉 Open normal Google Maps (NO STREET VIEW)
  const openGoogleMap = (lat, lng) => {
    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapUrl, "_blank");
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
          center={[23.58, 77.04]}
          zoom={10}
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
                click: () => openGoogleMap(loc.position[0], loc.position[1]),
              }}
            >
              <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                <div className="text-sm font-semibold text-green-800">
                  {loc.name}
                  <br />
                  <span className="text-green-600 text-xs">
                    Jeet Welfare Foundation Plantation
                  </span>
                </div>
              </Tooltip>

              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.description}
                <br />
                <button
                  onClick={() =>
                    openGoogleMap(loc.position[0], loc.position[1])
                  }
                  className="text-green-700 underline mt-1 font-semibold hover:text-green-900"
                >
                  View on Google Maps
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
}
