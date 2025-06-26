import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We specialize in both online and offline custom software solutions. Whether you need desktop software, offline tools, or web applications, we create solutions that enhance your business processes.",
  },
  {
    title: "Web Application Development",
    description:
      "We build scalable and robust Software-as-a-Service (SaaS) platforms to help you reach a global audience. From MVP development to full-fledged SaaS solutions, we ensure your success in the cloud.",
  },
  {
    title: "SaaS Product Engineering",
    description:
      "From designing modern, responsive websites to developing complex web applications, we ensure your online presence stands out with a user-friendly and scalable website.",
  },
  {
    title: "Graphics Designing",
    description:
      "Our creative team crafts stunning graphics and visual content that captures your brand's essence. From logos to marketing materials, we bring your vision to life with compelling designs.",
  },
  {
    title: "Maintenance and Support",
    description:
      "We provide ongoing maintenance and support to ensure your software runs smoothly, including bug fixes, updates, and troubleshooting whenever necessary.",
  },
  {
    title: "Technical Consulting",
    description:
      "Leverage our expertise to guide your software decisions. We provide consulting for technology stack selection, project planning, and optimization of existing systems.",
  },
];

const ServicesPage = () => {
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
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition text-left"
              >
                <h3 className="text-lg font-semibold text-[#275ca0] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-sm">{service.description}</p>
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
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;