export default function Contact() {
  return (
    <section className="p-8 bg-green-50 rounded m-4 shadow" id="contact" data-aos="zoom-in">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form action="https://formspree.io/f/xwkgzvvv" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900">Send Message</button>
      </form>
      <p className="mt-4"><strong>Email:</strong> jeetfoundations@gmail.com</p>
      <p><strong>Phone:</strong> +91-9981398943</p>
      <p><strong>Address:</strong> F-9 Abhinave Homes Phase-IV, Ayodhya Bypass Road, Bhopal (MP), India</p>
    </section>
  );
}
