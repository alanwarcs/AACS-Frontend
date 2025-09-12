import React, { useState } from "react";
import logo from "/logo/alt512.png";
import bluemain from "../assets/images/blue_main.png";
import API_BASE_URL from "../config"; // ✅ Make sure you have this pointing to your backend

export default function Home() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions with seamless functionality and performance.",
      iconClass: "fas fa-laptop-code",
    },
    {
      title: "Modern Web Development",
      description:
        "Responsive, user-friendly websites that engage and convert.",
      iconClass: "fas fa-mobile-alt",
    },
    {
      title: "Scalable SaaS Solutions",
      description:
        "Powerful SaaS tools designed to grow with your business.",
      iconClass: "fas fa-cloud",
    },
  ];

  const technologies = [
    ["React.js", "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"],
    ["Next.js", "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"],
    ["Node.js", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"],
    ["MongoDB", "https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg"],
    ["Laravel", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"],
    [".NET Core", "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"],
    ["MySQL", "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"],
    ["PostgreSQL", "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"],
  ];

  // ✅ Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        headers: { "Content-Type": "application/json" },
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

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-[#fff3e6] py-16 px-6 text-center overflow-hidden">
        <div className="flex flex-col items-center relative z-10 max-w-4xl mx-auto">
          <div class="flex justify-center w-20 h-20 items-center mb-5">
            <div class="relative w-full h-full flex items-center justify-center bg-transparent">
              <div class="atom-path-1">
                <div class="electron"></div>
              </div>
              <div class="atom-path-2">
                <div class="electron"></div>
              </div>
              <div class="atom-path-3">
                <div class="electron"></div>
              </div>
              <img src={bluemain} alt="" className="w-9 h-7" />
            </div>
          </div>
        {/* <img src={logo} alt="Al Anwar Logo" className="w-28 h-30" /> */}
        <h1 className="text-2xl md:text-3xl font-semibold my-4 text-[#ff8000]">
          Welcome to Al Anwar Infotech
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#275ca0]">
          Complete IT & Digital Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          From innovative <span className="font-semibold">Software Development</span> 
          to reliable <span className="font-semibold">Hardware, Networking, and Security Services</span>, 
          we provide end-to-end solutions that empower your business in the digital age.
        </p>
        <div className="flex gap-4">
          <Link
            to="/services"
            className="bg-[#ff8000] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border border-[#275ca0] text-[#275ca0] px-6 py-3 rounded-full font-medium hover:bg-[#275ca0] hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#275ca0]">
            Our Services
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-[#fff3e6] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
              >
                <div className="mb-4 text-[#ff8000] text-4xl">
                  <i className={item.iconClass}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#275ca0] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#275ca0] mb-4">
            Technologies We Work With
          </h2>
          <p className="text-gray-700 mb-10">
            Leveraging modern tools for cutting-edge software and web
            development.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technologies.map(([name, img], i) => (
              <div
                key={i}
                className="bg-white shadow-sm rounded-lg p-10 hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={name}
                  className="h-12 mx-auto mb-2 max-w-28"
                  loading="lazy"
                />
                <h5 className="text-sm font-medium text-[#275ca0]">{name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* About Section + Contact Form */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <img src={logo} alt="Al Anwar Logo" className="w-20 mb-6" />
            <p className="text-gray-700 mb-6">
              At Al Anwar Creativity Studio, we specialize in creating tailored software, web solutions, and SaaS applications.
              We thrive on innovation, combining technical expertise with creative problem-solving to deliver impactful solutions for businesses of all sizes.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Expertise in modern technologies like MERN, Laravel, and .NET.</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Custom solutions to meet unique client needs.</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Scalable SaaS platforms and creative web development.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Let us help you turn your ideas into reality with solutions tailored to your vision and business requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#275ca0] mb-4">Get in Touch</h2>

            {isSubmitted ? (
              <div className="text-green-600 p-4 bg-green-50 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {errors.general && (
                  <p className="text-red-500 text-sm">{errors.general}</p>
                )}
                {["name", "email", "phone", "message"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                    {field === "message" ? (
                      <textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Your message"
                        required
                        className={`w-full border ${errors[field] ? "border-red-500" : "border-gray-200"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff8000]`}
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field}`}
                        required
                        className={`w-full border ${errors[field] ? "border-red-500" : "border-gray-200"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff8000]`}
                      />
                    )}
                    {errors[field] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#ff8000] text-white px-6 py-2 rounded-md hover:shadow-lg transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
