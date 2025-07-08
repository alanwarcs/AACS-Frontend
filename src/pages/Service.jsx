import React, { useEffect, useState, useRef } from "react";
import API_BASE_URL from "../config";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/api/services`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch services");
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Calculate tag frequency and limit to top 5
  const tagFrequency = services
    .flatMap((service) => service.tags?.split(",").map((tag) => tag.trim()))
    .filter(Boolean)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
  const sortedTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);
  const displayedCategories = ["All", ...sortedTags.slice(0, 5)];
  const moreCategories = sortedTags.slice(5);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.tags?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-red-600 text-xl font-semibold">{error}</p>
    </div>
  );

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="bg-gray-200 rounded-2xl py-16 px-6 text-center">
          <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-10 bg-gray-300 rounded w-32 mx-auto mb-6"></div>
          <div className="h-10 bg-gray-300 rounded w-64 mx-auto"></div>
        </div>
        {/* Category Filters Skeleton */}
        <div className="flex flex-wrap gap-2 mb-8 mt-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="h-8 bg-gray-300 rounded-full w-20"></div>
          ))}
        </div>
        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3b72b8] to-[#5a8cd1] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-white opacity-90 mb-6">
            Innovative solutions to power your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
            aria-label="Contact us"
          >
            Get in Touch
          </a>
          {/* Search Bar */}
          <div className="mt-6 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition"
              aria-label="Search services"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2 items-center">
            {displayedCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#275ca0] text-white"
                    : "bg-[#e8f0fa] text-[#275ca0] hover:bg-[#275ca0] hover:text-white"
                } focus:outline-none focus:ring-2 focus:ring-[#ff8000]`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
            {moreCategories.length > 0 && (
              <div className="relative inline-block">
                <select
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[#e8f0fa] text-[#275ca0] hover:bg-[#275ca0] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff8000] appearance-none"
                  aria-label="More categories"
                >
                  <option value="" disabled selected>
                    More
                  </option>
                  {moreCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#275ca0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
          {filteredServices.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              No services match your search or filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6"
                >
                  <h3 className="text-xl font-semibold text-[#275ca0] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description?.substring(0, 150)}...
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openModal(service)}
                      className="inline-flex items-center text-[#ff8000] hover:text-[#e67300] font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4"
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
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-20 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto animate-fade-in"
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <h3 id="modal-title" className="text-2xl font-semibold text-[#275ca0] mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            {selectedService.tags && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700">Tags:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedService.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#e8f0fa] text-[#275ca0] text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                aria-label="Close modal"
              >
                Close
              </button>
              <a
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white rounded-full font-medium hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                aria-label="Contact us about this service"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-[#275ca0] to-[#3b72b8] py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white opacity-90 mb-6">
            Contact us today to explore how our services can drive your success.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
            aria-label="Contact us"
          >
            Contact Us
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;