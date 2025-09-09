import { useState } from "react";

export default function VolunteerForm({ showForm, setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    helpType: "",
    days: [],
    skills: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        days: checked
          ? [...prev.days, value]
          : prev.days.filter((day) => day !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for volunteering, ${formData.name}! We’ll contact you soon.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      helpType: "",
      days: [],
      skills: "",
      message: "",
    });
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          {/* Transparent form box */}
          <div className="bg-white/80 shadow-lg rounded-lg p-6 w-full max-w-lg animate-fadeIn">
            <h2 className="text-2xl font-bold text-center mb-4">
              Volunteer Registration
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your City/Location"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <select
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select how you want to help</option>
                <option value="Teaching">Teaching</option>
                <option value="Event Support">Event Support</option>
                <option value="Fundraising">Fundraising</option>
                <option value="Community Work">Community Work</option>
              </select>
              <div>
                <p className="text-sm font-medium mb-1">Available Days:</p>
                <div className="flex flex-wrap gap-3">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <label key={day} className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          value={day}
                          checked={formData.days.includes(day)}
                          onChange={handleChange}
                        />
                        {day}
                      </label>
                    )
                  )}
                </div>
              </div>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Your Skills"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any additional message..."
                rows={3}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
