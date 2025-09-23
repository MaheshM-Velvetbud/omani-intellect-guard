"use client"

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { documentId } = useParams();
  const { language, t } = useLanguage();

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

  if (loading) return <div className="text-center text-2xl mt-8">{t('loading')}</div>;
  if (error) return <div className="text-center text-red-500 text-2xl mt-8">{t('blogPostError')}</div>;

  return (
    <>
      <Header/>
      <div className={`min-h-screen bg-gradient-to-b pt-32 py-32 from-blue-50 to-white ${language === 'ar' ? 'rtl' : ''}`}>
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <button
            onClick={() => navigate('/#blog')}
            className={`mb-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg ${language === 'ar' ? 'flex-row-reverse' : ''}`}
          >
            <svg className={`w-5 h-5 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToBlog')}
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
              <div className={`absolute bottom-6 ${language === 'ar' ? 'right-6' : 'left-6'} bg-white bg-opacity-80 p-4 rounded-lg shadow-md`}>
                <h1 className={`text-3xl font-bold text-gray-900 ${language === 'ar' ? 'text-right' : ''}`}>{post.title}</h1>
              </div>
            </div>
            {/* Content Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className={`prose max-w-none text-gray-700 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                {post.content.map((block, index) => (
                  <p key={index} className={`mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
                    {block.children.map((child, childIndex) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
            {/* Info Bar */}
            <div className={`mt-8 p-4 bg-blue-100 rounded-lg flex justify-between items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className={language === 'ar' ? 'text-right' : ''}>
                <p className="text-sm text-blue-800">
                  {t('published')}: {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-AE' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};


     export default BlogPost;