import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5078/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then(setBlog)
      .catch((err) => setError(err.message));
  }, [slug]);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url,
      });
    } else {
      alert("Web Share not supported in this browser.");
    }
  };

  if (error) return <p className="text-red-600">{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <h1 className="text-3xl font-bold text-[#275ca0]">{blog.title}</h1>
          <div className="flex gap-3 items-center text-gray-600 text-lg">
            <button
              onClick={handleCopyLink}
              className="hover:text-[#ff8000] transition"
              title="Copy Link"
            >
              <i className="fas fa-link"></i>
            </button>
            <button
              onClick={handleShare}
              className="hover:text-[#ff8000] transition"
              title="Share"
            >
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
        {copied && <p className="text-sm text-green-600 mt-1">Link copied!</p>}
        <p className="text-gray-500 mt-2 text-sm">
          Published on {new Date(blog.datePublished).toLocaleDateString()}
        </p>
      </div>

      {/* Image */}
      <img
        src={blog.headerImageUrl}
        alt={blog.title}
        className="w-full mb-6 rounded-md shadow-md"
      />
      {/* Content */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#275ca0] mb-3">Content</h2>
        <div
          className="text-gray-800 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Author */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#275ca0] mb-3">Author</h2>
        <p className="text-gray-800">{blog.author}</p>
      </div>

      {/* Tags */}
      {blog.tags && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#275ca0] mb-3">Tags</h2>
          <ul className="flex flex-wrap gap-2">
            {blog.tags.split(",").map((tag, index) => (
              <li
                key={index}
                className="bg-[#e8f0fa] text-[#275ca0] text-sm px-3 py-1 rounded-full"
              >
                {tag.trim()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
