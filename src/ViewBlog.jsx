import React from 'react';
import { useParams } from 'react-router-dom';
function ViewBlog() {
    const BlogData = [
        {
          id: 1,
          title: 'Lagos: Two people gave birth today',
          image: 'https://images.unsplash.com/photo-1651083230817-481f3c3895a4?w=900&auto=format&fit=crop&q=60',
          views: 200,
        },
        {
          id: 2,
          title: 'Tech in Africa: A Rising Power',
          image: 'https://images.unsplash.com/photo-1549921296-3a4b5099fb6c?w=900&auto=format&fit=crop&q=60',
          views: 340,
        },
        {
          id: 3,
          title: '10 Ways to Improve Your Mental Health',
          image: 'https://images.unsplash.com/photo-1517260739337-67977ec59cf2?w=900&auto=format&fit=crop&q=60',
          views: 580,
        },
        {
          id: 4,
          title: 'Exploring Nigerian Cuisine: Top Dishes',
          image: 'https://images.unsplash.com/photo-1603574899685-1c55fa1fdcaa?w=900&auto=format&fit=crop&q=60',
          views: 290,
        },
        {
          id: 5,
          title: 'Remote Work in 2025: Trends to Watch',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60',
          views: 425,
        },
        {
          id: 6,
          title: 'Young Entrepreneurs to Watch in Africa',
          image: 'https://images.unsplash.com/photo-1619537788567-41a4c299d333?w=900&auto=format&fit=crop&q=60',
          views: 630,
        },
        {
          id: 7,
          title: 'How to Start a Side Hustle in Nigeria',
          image: 'https://images.unsplash.com/photo-1616627982786-53c08f9b4fa5?w=900&auto=format&fit=crop&q=60',
          views: 410,
        },
        {
          id: 8,
          title: 'Healthy Living: Exercise Routines for Busy People',
          image: 'https://images.unsplash.com/photo-1599058917212-d750089bc3d1?w=900&auto=format&fit=crop&q=60',
          views: 370,
        },
        {
          id: 9,
          title: 'Interview Tips for Recent Graduates',
          image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=900&auto=format&fit=crop&q=60',
          views: 220,
        },
        {
          id: 10,
          title: 'Building a Brand as a Freelancer',
          image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=900&auto=format&fit=crop&q=60',
          views: 310,
        }
      ];

    const params = useParams()
    console.log(params.id, "hello params")
    const filterBlog = BlogData.filter((item) => item.id == params.id)
    const singleBlogdetails=filterBlog[0]
    console.log(filterBlog[0])
  return (
    <div className="max-w-4xl mx-auto p-6">
          <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">
       {singleBlogdetails.title}
      </h1>
        <img
          src={"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60"}
          alt="Blog Cover"
          className="w-full h-80 object-cover rounded"
        />
      </div>

     

          <p className="text-gray-500 text-sm mb-6">{ singleBlogdetails.views} Views</p>

     
    </div>
  );
}

export default ViewBlog;
