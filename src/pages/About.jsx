import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching for future dynamic content
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Mock loading delay
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="bg-gray-200 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <div className="h-28 w-28 bg-gray-300 rounded-full"></div>
            </div>
            <div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        {/* Mission/Vision Skeleton */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="h-6 bg-gray-300 rounded w-32 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div>
            <div className="h-6 bg-gray-300 rounded w-32 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
        {/* Values Skeleton */}
        <div className="mb-12">
          <div className="h-6 bg-gray-300 rounded w-40 mx-auto mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-start">
                <div className="h-5 w-5 bg-gray-300 rounded mr-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Skeleton */}
        <div className="text-center bg-gray-200 rounded-2xl p-8">
          <div className="h-6 bg-gray-300 rounded w-40 mx-auto mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-5"></div>
          <div className="h-10 bg-gray-300 rounded-lg w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#3b72b8] to-[#5a8cd1] rounded-2xl p-8 mb-12 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center animate-fade-in">
            <div className="flex justify-center">
              <a href="/" className="flex items-center" aria-label="Home">
                <img
                  src="/logo/alt512.png"
                  alt="Al Anwar Creativity Studio"
                  className="h-32 transform hover:scale-105 transition duration-300"
                />
              </a>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                About Al Anwar Creativity Studio
              </h1>
              <p className="text-lg opacity-90">
                At Al Anwar Creativity Studio, we specialize in crafting tailored software, web solutions, and SaaS applications. Our passion for innovation drives us to blend technical expertise with creative problem-solving, delivering impactful solutions for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-[#275ca0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-2xl font-semibold text-[#275ca0]">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To empower businesses with high-quality, scalable, and innovative software solutions that align with their goals, fostering creativity and technical excellence in every project.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-[#275ca0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3" />
              </svg>
              <h2 className="text-2xl font-semibold text-[#275ca0]">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To become a global leader in creativity-driven technology solutions, transforming ideas into successful realities while building lasting client relationships.
            </p>
          </div>
        </section>

        {/* Key Features/Values */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#275ca0] mb-8">
            Why Choose Us?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-6">
            {[
              "Expertise in modern technologies like MERN, Laravel, and .NET.",
              "Custom solutions tailored to meet unique client needs.",
              "Scalable SaaS platforms and creative web development.",
              "Commitment to innovation, quality, and client satisfaction.",
            ].map((value, index) => (
              <li key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <span className="text-green-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">{value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-[#275ca0] to-[#3b72b8] rounded-2xl p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Partner with us to bring your ideas to life with innovative software solutions tailored to your needs.
          </p>
          <a
            href="/home/Contact"
            className="inline-block bg-gradient-to-r from-[#ff8000] to-[#e67300] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
            aria-label="Contact us"
          >
            Get in Touch
          </a>
        </section>
      </div>

      {/* Inline CSS for Animation */}
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

export default AboutPage;