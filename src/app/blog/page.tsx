"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaBlog, FaArrowRight, FaClock } from "react-icons/fa";
import Layout from "@/components/Layout";

export default function Blog() {
  const [countdown, setCountdown] = useState(5);
  const [redirected, setRedirected] = useState(false);

  // Auto-redirect with countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!redirected) {
      setRedirected(true);
      // Redirect when countdown reaches 0
      window.open("https://express-blog-app-dlul.onrender.com/", "_blank");
    }
  }, [countdown, redirected]);

  const handleManualRedirect = () => {
    setRedirected(true);
    window.open("https://express-blog-app-dlul.onrender.com/", "_blank");
  };

  return (
    <Layout>
      {/* Blog Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-6 rounded-full">
                <FaBlog className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Express & Expressions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              My personal blog where I share insights about web development, technology trends, and programming tutorials.
            </p>
          </div>

          {/* Redirect Card */}
          <div className="bg-white rounded-2xl p-12 shadow-xl mb-8">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full">
                  <FaClock className="w-8 h-8" />
                </div>
              </div>
              
              {!redirected ? (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Redirecting to Blog
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    You&apos;ll be redirected to my blog in <span className="font-bold text-blue-600 text-2xl">{countdown}</span> seconds
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Blog Opened
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The blog should have opened in a new tab. If it didn&apos;t, you can click the button below.
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleManualRedirect}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Visit Blog Now</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              
              <Link
                href="/"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          {/* Blog Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-blue-600 text-2xl font-bold mb-2">Latest Posts</div>
              <p className="text-gray-600">Web Development</p>
              <p className="text-gray-600">Programming Tutorials</p>
              <p className="text-gray-600">Tech Insights</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-green-600 text-2xl font-bold mb-2">Topics Covered</div>
              <p className="text-gray-600">React & Next.js</p>
              <p className="text-gray-600">Node.js & Express</p>
              <p className="text-gray-600">MongoDB & Databases</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-purple-600 text-2xl font-bold mb-2">Content Type</div>
              <p className="text-gray-600">Step-by-step Tutorials</p>
              <p className="text-gray-600">Code Examples</p>
              <p className="text-gray-600">Best Practices</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600">
              <strong>Express & Expressions</strong> is hosted on Vercel and features articles about modern web development, 
              programming best practices, and technology insights. Join me on this journey of continuous learning and sharing knowledge.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}