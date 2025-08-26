"use client"

     import React, { useState, useEffect } from 'react';
     import { useNavigate, useParams } from 'react-router-dom';
     import Header from './Header';

     const BlogPost = () => {
       const [post, setPost] = useState(null);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);
       const navigate = useNavigate();
       const { documentId } = useParams();

       useEffect(() => {
         const fetchPost = async () => {
           try {
             const response = await fetch(`https://strapi.velvetbud.in/api/gulftrade-blogposts?filters[documentId][$eq]=${documentId}&populate=*`);
             const data = await response.json();
             if (data.data.length > 0) {
               setPost(data.data[0]);
             } else {
               setError('Blog post not found');
             }
             setLoading(false);
           } catch (err) {
             setError('Failed to fetch blog post');
             setLoading(false);
           }
         };
         if (documentId) fetchPost();
       }, [documentId]);

       if (loading) return <div className="text-center text-2xl mt-8">Loading...</div>;
       if (error) return <div className="text-center text-red-500 text-2xl mt-8">{error}</div>;

       return (
        <>
       <Header/>
      <div className="min-h-screen bg-gradient-to-b pt-32 py-32 from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <button
          onClick={() => navigate('/#blog')}
          className="mb-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </button>
        {post && (
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="relative mb-8">
              <img
                src={`https://strapi.velvetbud.in${post.image[0].url}`}
                alt={post.title}
                className="w-full h-[500px] object-cover rounded-xl shadow-xl transition duration-300 hover:shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
              </div>
            </div>
            {/* Content Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                {post.content.map((block, index) => (
                  <p key={index} className="mb-6">
                    {block.children.map((child, childIndex) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
            {/* Info Bar */}
            <div className="mt-8 p-4 bg-blue-100 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-sm text-blue-800">Published: {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</p>
                {/* <p className="text-sm text-blue-800">ID: {post.documentId}</p> */}
              </div>
              {/* <p className="text-sm text-blue-800">Author: Anonymous</p>  */}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};


     export default BlogPost;