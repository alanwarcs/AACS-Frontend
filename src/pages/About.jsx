import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* About Header */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="flex justify-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo/alt512.png"
              alt="Al Anwar Creativity Studio"
              className="h-28"
            />
          </a>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#275ca0] mb-4">
            About Al Anwar Creativity Studio
          </h1>
          <p className="text-gray-700">
            At Al Anwar Creativity Studio, we specialize in creating tailored software, web
            solutions, and SaaS applications. We thrive on innovation, combining technical
            expertise with creative problem-solving to deliver impactful solutions for
            businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-[#275ca0] mb-3">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower businesses by delivering high-quality, scalable, and
            innovative software solutions that align with their goals. We aim to foster
            creativity and technical excellence in every project we undertake.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#275ca0] mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To be a global leader in creativity-driven technology solutions, recognized for our
            ability to transform ideas into successful realities and for nurturing long-term
            client relationships.
          </p>
        </div>
      </div>

      {/* Key Features/Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-[#275ca0] mb-6">
          Why Choose Us?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            Expertise in modern technologies like MERN, Laravel, and .NET.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            Custom solutions tailored to meet unique client needs.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            Scalable SaaS platforms and creative web development.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            Focus on innovation, quality, and client satisfaction.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#275ca0] mb-3">
          Ready to Work With Us?
        </h2>
        <p className="text-gray-700 mb-5">
          Let us bring your ideas to life with tailored software solutions that meet your
          business needs.
        </p>
        <a
          href="/home/Contact"
          className="inline-block bg-[#ff8000] text-white px-6 py-2 rounded-lg hover:bg-[#e66e00] transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default AboutPage;