import { Link } from "react-router-dom";

const dummyBlogs = [
  {
    id: 1,
    title: "React & Tailwind: Perfect Combo",
    content: "Learn how to build fast and stylish UIs using React with Tailwind CSS...",
    image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBjb2RlfGVufDB8fDB8fHww",
    category: "Tech",
  },
  {
    id: 2,
    title: "Latest News in the Dev World",
    content: "Stay up-to-date with what's happening in the software development space.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF0ZXN0JTIwbmV3c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "News",
  },
  {
    id: 3,
    title: "Understanding useEffect",
    content: "Master one of the most powerful hooks in React with real-world examples.",
    image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjB1c2VlZmZlY3R8ZW58MHx8MHx8fDA%3D",
    category: "Tutorial",
  },
];

const BlogList = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyBlogs.map((blog) => (
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
