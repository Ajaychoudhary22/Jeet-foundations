import React from "react";

export default function VolunteerForm({ showForm, setShowForm }) {
  return (
    <>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg animate-fadeIn">
            <h1 className="text-2xl font-bold text-center mb-4">
              Volunteer Registration Form
            </h1>

            <form
              action="https://formsubmit.co/jeetfoundations@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Hidden Required Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Volunteer Registration"
              />
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thankyou"
              />

              {/* Name */}
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="yourmail@gmail.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter phone number"
                />
              </div>

              {/* City */}
              <div>
                <label className="block font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter city"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-1">
                  Why do you want to volunteer?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Tell us briefly..."
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
