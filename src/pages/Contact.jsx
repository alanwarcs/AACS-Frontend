import React, { useState } from "react";
import API_BASE_URL from "../config"; // Make sure this is correct

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading for consistency
  setTimeout(() => setLoading(false), 1000);


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\+?\d{10,15}$/)) newErrors.phone = "Valid phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setErrors({ general: data.message || "Submission failed." });
      }
    } catch (err) {
      setErrors({ general: "Network error. Please try again later." });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
        {/* Header Section Skeleton */}
        <div className="bg-gray-200 rounded-2xl p-8 mb-12">
          <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
          <div className="flex justify-center gap-4">
            <div className="h-10 bg-gray-300 rounded w-48"></div>
            <div className="h-10 bg-gray-300 rounded w-48"></div>
          </div>
        </div>
        {/* Form and Map Skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-20 bg-gray-300 rounded"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md h-96"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-[#3b72b8] to-[#5a8cd1] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-white opacity-90 mb-6">
            Let's build something amazing together. Reach out to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center bg-white text-gray-800 rounded-lg shadow-md p-3">
              <svg className="w-6 h-6 text-[#ff8000] mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm">alanwarcs@gmail.com</span>
            </div>
            <div className="flex items-center bg-white text-gray-800 rounded-lg shadow-md p-3">
              <svg className="w-6 h-6 text-[#ff8000] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm">+91 7984348018</span>
            </div>
          </div>
          <a
            href="#contact-form"
            className="inline-block bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
            aria-label="Scroll to contact form"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg" id="contact-form">
            <h2 className="text-2xl font-semibold text-[#275ca0] mb-4">
              Send Us a Message
            </h2>
            {isSubmitted ? (
              <div className="text-center text-green-600 p-4 bg-green-50 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition`}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition`}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                  {errors.general && (
                    <p className="text-red-500 text-sm mb-2">{errors.general}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  aria-label="Send message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Google Map */}
          <div className="flex justify-center items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019142466564!2d-122.41941568468137!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581474c8c4d73%3A0x9c5a9b8c9f4c8f6!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1697654321098!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Anwar Creativity Studio Location"
              aria-label="Map showing our location"
            ></iframe> */}
            <p className="text-gray-400">Location Comming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;