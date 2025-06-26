export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-2xl py-4 px-4 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
      <div>
        &copy; {currentYear} <span className="font-medium text-[#275ca0]">Al Anwar Creativity Studio</span>. All rights reserved.
      </div>

      <div className="flex gap-4 mt-2 sm:mt-0">
        <a
          href="https://www.instagram.com/alanwarcs/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff8000] transition-colors"
        >
          <i className="fa-brands fa-instagram text-xl"></i>
        </a>
        <a
          href="https://x.com/alanwar_studio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff8000] transition-colors"
        >
          <i className="fa-brands fa-x-twitter text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/murtaza-patel-289065352/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff8000] transition-colors"
        >
          <i className="fa-brands fa-linkedin text-xl"></i>
        </a>
      </div>
    </footer>
  );
}
