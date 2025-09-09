import qrImage from "../Components/Office Photo/QR.jpg"; // adjust relative path if needed

export default function Donate() {
  return (
    <section
      className="p-8 bg-green-100 rounded m-4 shadow flex flex-col items-center"
      id="donate"
      data-aos="fade-left"
    >
      <h2 className="text-2xl font-bold mb-4">Support Our Work</h2>
      <p className="text-center">
        Your contribution can make a difference. Help us build a greener,
        healthier future.
      </p>
      <p className="mt-2">
        <strong>Donate via UPI:</strong>{" "}
        <code>jeetfoundations@upi</code>
      </p>

      <img
        src={qrImage}
        alt="Donate QR"
        className="h-[200px] w-auto border rounded my-4 object-contain"
      />

      {/* UPI link so it opens in PhonePe, GPay, Paytm, etc. */}
      <a
        href="upi://pay?pa=jeetfoundations@upi&pn=Jeet%20Foundations"
        className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900"
      >
        Donate Now
      </a>
    </section>
  );
}
