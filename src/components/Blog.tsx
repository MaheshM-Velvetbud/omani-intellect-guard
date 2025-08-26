import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://strapi.velvetbud.in/api/gulftrade-blogposts?populate=*');
        const data = await response.json();
        setPosts(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="text-center text-2xl mt-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-2xl mt-8">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {post.image && post.image[0] && (
              <img
                src={`https://strapi.velvetbud.in${post.image[0].url}`}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <div className="text-gray-700">
                {post.content[0]?.children[0]?.text.split('. ')[0] + '.'}
              </div>
              <button
                onClick={() => navigate(`/blog/${post.documentId}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;