import React from "react";
import qrImage from "../Components/office_photo/QR.jpg";

export default function Donate() {
  return (
    <section
      className="p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl m-4 shadow-lg flex flex-col items-center"
      id="donate"
      data-aos="fade-left"
    >
      <h2 className="text-3xl font-bold mb-4 text-green-800">Support Our Work</h2>
      <p className="text-center text-gray-700 max-w-lg">
        Your contribution can make a difference. Help us build a greener,
        healthier future.
      </p>
      
      <div className="my-6 p-4 bg-white rounded-lg shadow-md">
        <p className="text-lg mb-2">
          <strong>Donate via UPI:</strong>{" "}
          <code className="bg-green-100 px-2 py-1 rounded">jeetfoundations@upi</code>
        </p>

        <img
          src={qrImage}
          alt="Donate QR Code for PhonePe"
          className="h-[220px] w-auto border-2 border-green-300 rounded-lg my-4 object-contain mx-auto"
        />
        
        <p className="text-sm text-gray-600 mb-4 text-center">
          Scan this QR code with any UPI app to donate
        </p>

        {/* UPI link so it opens in PhonePe, GPay, Paytm, etc. */}
        <div className="text-center mt-4">
          <a
            href="upi://pay?pa=jeetfoundations@upi&pn=Jeet%20Foundations"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Donate Now
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>© 2023 JEE Welfare Foundation. All rights reserved.</p>
      </div>
    </section>
  );
}