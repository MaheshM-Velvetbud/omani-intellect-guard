'use client' // If you're mixing server/client, but optional in pure Vite/React

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
  const { id } = useParams(); // Get the post ID from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/blog-posts/${id}?populate=*`);
        setPost(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post');
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // Function to render full content (assuming Strapi rich text format: array of blocks)
  const renderContent = (content) => {
    if (!Array.isArray(content)) return <p>No content available.</p>;

    return content.map((block, index) => {
      if (block.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-700 mb-4">
            {block.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      }
      // Add more block types if needed (e.g., heading, list, image)
      return null;
    });
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!post) return <p className="text-center text-gray-500">Post not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.attributes.title || 'Untitled'}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.attributes.date ? new Date(post.attributes.date).toLocaleDateString() : 'No date'}
      </p>
      {post.attributes.featuredImage?.data?.attributes?.url ? (
        <img
          src={`http://localhost:1337${post.attributes.featuredImage.data.attributes.url}`}
          alt={post.attributes.title}
          className="w-full h-auto mb-6"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center mb-6">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="prose max-w-none"> {/* Use Tailwind Prose for better typography, or customize */}
        {renderContent(post.attributes.content)}
      </div>
    </div>
  );
}

export default SinglePost;