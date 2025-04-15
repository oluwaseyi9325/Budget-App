import React from "react";

const CreateBlog = () => {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            rows={6}
            placeholder="Blog Content"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Image URL (CDN link)"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <select className="w-full p-3 border border-gray-300 rounded">
            <option value="">Select Category</option>
            <option value="News">News</option>
            <option value="Tech">Tech</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
          <button
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
  