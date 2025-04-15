import { Routes, Route, Link } from "react-router-dom";
import BlogList from "./BlogList";
import ViewBlog from "./ViewBlog";
import CreateBlog from "./CreateBlog";

export default function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex gap-6">
        <Link to="/blogs">Blog List</Link>
        <Link to="/create">Create Blog</Link>
      </nav>
      ,<div className="card">hey</div>

      <Routes>
        <Route index element={<BlogList />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<ViewBlog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>


    </>
  );
}
