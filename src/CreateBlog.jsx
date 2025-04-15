import React, {useEffect, useState} from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(" ");
  const [category, setCategory] = useState("");

  
  const [storedBlogs, setStoredBlogs] = useState([]);



  useEffect(() => {
  
      const getLocalStore = JSON.parse(localStorage.getItem("blogs"));
  
      if (getLocalStore) {
        setStoredBlogs(getLocalStore);
      } else {
        alert('No blogs found');
      }
    

  }, []); // Empty dependency array ensures this runs only once on mount

  const handleBtn = () => {
    if (title && content && image && category) {
      const newBlog = {
        id: Math.random(),
        title,
        content,
        image,
        category,
      };
 
      console.log("New Blog Created:", newBlog);
      setStoredBlogs([...storedBlogs, newBlog])
      localStorage.setItem("blogs", JSON.stringify([...storedBlogs, newBlog]));
      setTitle("");
      setContent("");
      setImage("");
      setCategory("");
    } else {
      alert("Please fill all fields");
    }
  }
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
        <form className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Blog Title"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog Content"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Image URL (CDN link)"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded">
            <option value="">Select Category</option>
            <option value="News">News</option>
            <option value="Tech">Tech</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
          <button
            onClick={handleBtn}
            type="button"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default CreateBlog;
  