import React, { useEffect, useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5078/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => setError(err.message));
  }, []);

  const mostRecent = blogs[0];
  const others = blogs.slice(1);

  return (
    <div className="w-full flex flex-col flex-grow text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#275ca0] to-[#3b72b8] py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Blogs</h1>
          <p className="text-md md:text-lg text-white opacity-90">
            Insights and updates from Al Anwar Creativity Studio.
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="flex-grow py-12 px-6 bg-gray-100 min-h-[600px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Most Recent Blog */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-[#275ca0] mb-4">Most Recent</h2>
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : mostRecent ? (
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform overflow-hidden h-fit">
                <img
                  src={mostRecent.headerImageUrl}
                  alt={mostRecent.title}
                  className="w-full h-[70%] object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#275ca0] mb-2">{mostRecent.title}</h3>
                  <p className="text-gray-800 text-sm mb-2">
                    {mostRecent.description?.substring(0, 200) + "..."}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Published on {new Date(mostRecent.datePublished).toLocaleDateString()}
                  </p>
                  <a
                    href={`/blogs/${mostRecent.slug}`}
                    className="inline-flex items-center text-[#ff8000] hover:text-[#e67300] font-medium text-sm transition-colors duration-200 mb-3"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No blogs available at the moment.</p>
            )}
          </div>

          {/* Other Blogs */}
          <div>
            <h2 className="text-xl font-semibold text-[#275ca0] mb-4">Other Blogs</h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {others.map((blog) => (
                <div
                  key={blog.id || blog.slug}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition transform p-4 flex space-x-4"
                >
                  <img
                    src={blog.headerImageUrl}
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h5 className="text-md font-medium text-[#275ca0] mb-1">{blog.title}</h5>
                    <p className="text-gray-800 text-xs mb-1">
                      {blog.description?.substring(0, 40) + "..."}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </p>
                    <a
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-[#ff8000] hover:text-[#e67300] text-xs font-medium transition-colors duration-200"
                    >
                      Read More
                      <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
