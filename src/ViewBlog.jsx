import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ViewBlog = () => {
  const params = useParams();
  const [BlogData, setBlogData] = useState([]);
  console.log(params.id);
  useEffect(() => {
    const getLocalStore = JSON.parse(localStorage.getItem("blogs"));
    if (getLocalStore) {
      setBlogData(getLocalStore.filter((blog) => blog.id == params.id));
      // console.log(getLocalStore.filter((blog) => blog.id == params.id));
    } 
  }, []);


  return (
    <div className="p-6 max-w-3xl mx-auto">
      {
        BlogData[0]? (
          <divx>
            <img src={BlogData[0].image} alt={BlogData[0].image} className="w-full h-64 object-cover rounded-lg mb-4" />
      <span className="text-xs text-white bg-blue-700 px-2 py-1 rounded">{BlogData[0].category}</span>
      <h1 className="text-3xl font-bold mt-2">{BlogData[0].title}</h1>
      <p className="text-gray-700 mt-4 whitespace-pre-line">{BlogData[0].content}</p>
          </divx>
        ):null
    }
    </div>
  );
};

export default ViewBlog;
