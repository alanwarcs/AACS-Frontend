import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo/alt512.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname.toLowerCase() === path.toLowerCase() ||
    (pathname.startsWith("/blogs") && path === "/blogs");

  const linkClass = (path) =>
    `block px-4 py-2 text-sm md:text-base transition hover:text-[#ff8000] ${isActive(path) ? "text-[#275ca0] font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center text-center space-x-3">
          <div className="leading-tight">
            <h1 className="text-3xl font-medium text-[#275ca0]">
              AL ANWAR
            </h1>
            <hr className="border-[#ff8000] w-full" />
            <p className="text-xs uppercase text-[#275ca0] tracking-wide">
              Creativity Studio
            </p>
          </div>
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`mt-4 md:mt-0 md:flex md:items-center md:space-x-2 ${isOpen ? "block" : "hidden md:block"
            }`}
        >
          <li>
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className={linkClass("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={linkClass("/blogs")}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass("/about")}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
