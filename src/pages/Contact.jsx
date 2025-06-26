import React from "react";

const ContactPage = () => {
  return (
    <div className="w-screen text-gray-800">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-[#275ca0] to-[#3b72b8] py-12 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get in Contact
          </h1>
          <p className="text-md md:text-lg text-white opacity-90 mb-6">
            Let's build something amazing together. Reach out to discuss your project.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center bg-white text-black rounded shadow p-3">
              <svg className="w-6 h-6 text-[#ff8000] mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm">alanwarcs@gmail.com</span>
            </div>
            <div className="flex items-center bg-white text-black rounded shadow p-3">
              <svg className="w-6 h-6 text-[#ff8000] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm">+91 7984348018</span>
            </div>
          </div>
          <button className="bg-[#ff8000] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#275ca0] mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="Phone"
                  placeholder="Enter your Phone Number"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows="4"
                  placeholder="Your message"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#ff8000] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-full">
            <span className="text-gray-400 text-lg">Map Coming Soon</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;