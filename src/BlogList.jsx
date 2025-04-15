import { Link } from "react-router-dom";
import { useEffect,useState } from "react";


const BlogList = () => {
  const [BlogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const getLocalStore = JSON.parse(localStorage.getItem("blogs"));
    if (getLocalStore) {
      setBlogData(getLocalStore);
    } 
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BlogData.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded">{blog.category}</span>
              <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {blog.content.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
