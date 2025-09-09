export default function Navbar({ onVolunteerClick }) {
  const links = [
    "about",
    "mission",
    "initiatives",
    "gallery",
    "testimonials",
    "donate",
    "volunteer",
    "contact"
  ];

  return (
    <nav className="bg-green-500 flex justify-center flex-wrap py-2 fixed top-0 left-0 w-full z-50 shadow">
      {links.map((link) =>
        link === "volunteer" ? (
          <button
            key={link}
            onClick={onVolunteerClick} // open form
            className="text-white font-bold mx-2 px-3 py-1 text-sm rounded hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Register as a Volunteer
          </button>
        ) : (
          <a
            key={link}
            href={`#${link}`}
            className="text-white font-bold mx-2 px-3 py-1 text-sm rounded hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        )
      )}
    </nav>
  );
}
