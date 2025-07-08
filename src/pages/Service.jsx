import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
      console.log("API_BASE_URL:", API_BASE_URL); // Debugging line to check API URL
  }, []);

  return (
    <div className="flex flex-col flex-grow text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#275ca0] to-[#3b72b8] py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-md md:text-lg text-white opacity-90 mb-6">
            Innovative solutions to power your business.
          </p>
          <button className="bg-[#ff8000] text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex-grow py-12 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <p className="text-center">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-center text-gray-500">No services found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition text-left"
                >
                  <h3 className="text-lg font-semibold text-[#275ca0] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="inline-flex items-center text-[#ff8000] hover:text-[#e67300] font-medium text-sm transition-colors duration-200"
                    >
                      Learn More
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;