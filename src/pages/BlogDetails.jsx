import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import API_BASE_URL from "../config";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then(setBlog)
      .catch((err) => setError(err.message));
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const contentTop = contentRef.current.offsetTop;
        const contentHeight = contentRef.current.offsetHeight;
        const scrolled = (scrollTop - contentTop) / (contentHeight - clientHeight);
        setProgress(Math.min(Math.max(scrolled * 100, 0), 100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `${blog.title} - ${blog.description}`;
    let shareUrl;
    switch (platform) {
      case "twitter":
        shareUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-off?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(blog.title)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({ title: blog.title, text: blog.description, url });
        } else {
          alert("Web Share not supported in this browser.");
        }
        return;
    }
    window.open(shareUrl, "_blank");
  };

  const generateTOC = () => {
    if (!blog?.content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");
    const headings = doc.querySelectorAll("h2, h3");
    return Array.from(headings).map((h, index) => ({
      id: `heading-${index}`,
      text: h.textContent,
      level: h.tagName === "H2" ? 2 : 3,
    }));
  };

  const toc = generateTOC();

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-red-600 text-xl font-semibold">{error}</p>
    </div>
  );

  if (!blog) return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 animate-pulse">
            {/* Skeleton Header */}
            <div className="mb-8">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
            </div>
            {/* Skeleton Image */}
            <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
            {/* Skeleton Content */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
              <div className="h-4 bg-gray-200 rounded w-10/12"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-9/12"></div>
            </div>
            {/* Skeleton Tags */}
            <div className="mt-8">
              <div className="h-6 bg-gray-200 rounded w-24 mb-3"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
              </div>
            </div>
          </div>
          {/* Skeleton TOC */}
          <div className="hidden lg:block lg:col-span-1 sticky top-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#ff8000] z-50 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8" ref={contentRef}>
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#275ca0] mb-4">{blog.title}</h1>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span>By {blog.author}</span>
                  <span>•</span>
                  <span>{new Date(blog.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Copy Link"
                  >
                    <i className="fas fa-link text-gray-600 hover:text-[#ff8000]"></i>
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter text-gray-600 hover:text-[#ff8000]"></i>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin text-gray-600 hover:text-[#ff8000]"></i>
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook text-gray-600 hover:text-[#ff8000]"></i>
                  </button>
                  <button
                    onClick={() => handleShare()}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Share"
                  >
                    <i className="fas fa-share-alt text-gray-600 hover:text-[#ff8000]"></i>
                  </button>
                </div>
              </div>
              {copied && <p className="text-sm text-green-600 mt-2">Link copied to clipboard!</p>}
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">{blog.description}</p>
            </div>

            {/* Image */}
            <div className="relative mb-8">
              <img
                src={blog.headerImageUrl}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {/* Tags */}
            {blog.tags && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#275ca0] mb-3">Tags</h3>
                <ul className="flex flex-wrap gap-2">
                  {blog.tags.split(",").map((tag, index) => (
                    <li
                      key={index}
                      className="bg-[#e8f0fa] text-[#275ca0] text-sm px-4 py-2 rounded-full hover:bg-[#275ca0] hover:text-white transition-colors"
                    >
                      {tag.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Table of Contents (Sidebar) */}
          {toc.length > 0 && (
            <div className="hidden lg:block lg:col-span-1 sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-[#275ca0] mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {toc.map((item, index) => (
                    <li
                      key={index}
                      className={`text-sm ${item.level === 3 ? "pl-4" : ""}`}
                    >
                      <a
                        href={`#heading-${index}`}
                        className="text-gray-600 hover:text-[#ff8000] transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;