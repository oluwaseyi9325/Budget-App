import { useParams } from "react-router-dom";

const dummyBlog = {
  id: 1,
  title: "React & Tailwind: Perfect Combo",
  content: `Tailwind CSS allows you to build UIs without writing CSS classes manually.\n\nCombine it with React and you get performance and productivity!`,
  image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjB1c2VlZmZlY3R8ZW58MHx8MHx8fDA%3D",
  category: "Tech",
};

const ViewBlog = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={dummyBlog.image} alt={dummyBlog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <span className="text-xs text-white bg-blue-700 px-2 py-1 rounded">{dummyBlog.category}</span>
      <h1 className="text-3xl font-bold mt-2">{dummyBlog.title}</h1>
      <p className="text-gray-700 mt-4 whitespace-pre-line">{dummyBlog.content}</p>
    </div>
  );
};

export default ViewBlog;
