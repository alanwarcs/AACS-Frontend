import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/api/blogs`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="bg-gray-200 h-48 rounded-2xl mb-8"></div>
        {/* Search Bar Skeleton */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="h-10 bg-gray-200 rounded-full"></div>
        </div>
        {/* Blogs Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-red-600 text-xl font-semibold">{error}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3b72b8] to-[#5a8cd1] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Blogs</h1>
          <p className="text-lg sm:text-xl text-white opacity-90 mb-6">
            Insights and updates from Al Anwar Creativity Studio.
          </p>
          {/* Search Bar */}
          <div className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff8000] transition"
              aria-label="Search blogs"
            />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-600 text-center text-lg">
              No blogs match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleBlogs.map((blog) => (
                <div
                  key={blog.id || blog.slug}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={blog.headerImageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#275ca0] mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {blog.description?.substring(0, 150)}...
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      Published on{" "}
                      {new Date(blog.datePublished).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <a
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-[#ff8000] hover:text-[#e67300] font-medium text-sm transition-colors duration-200"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
          {visibleCount < filteredBlogs.length && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-full bg-[#275ca0] text-white font-medium hover:bg-[#1e4a80] transition focus:outline-none focus:ring-2 focus:ring-[#ff8000]"
                aria-label="Load more blogs"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;