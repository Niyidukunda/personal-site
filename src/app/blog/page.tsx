/**
 * BLOG PAGE
 * 
 * Purpose: Redirect page to external blog hosted on Render
 * 
 * Features:
 * - Automatic countdown timer (5 seconds)
 * - Auto-redirect to external blog in new tab
 * - Manual "Visit Blog Now" button
 * - Progress bar animation
 * - Blog topics preview cards
 * - Fallback if popup blocker prevents auto-redirect
 * 
 * External Blog: https://express-blog-app-dlul.onrender.com/
 * Blog Name: Express & Expressions
 * 
 * State Management:
 * - countdown: Timer state (5 to 0)
 * - redirected: Track if redirect already happened
 * 
 * Why External: Blog is hosted separately on Render for scalability and independent deployment
 */

"use client"; // Enable client-side features for React hooks

import { useEffect, useState } from "react"; // React hooks for state and side effects
import Link from "next/link"; // Next.js navigation
import { FaExternalLinkAlt, FaBlog, FaArrowRight, FaClock } from "react-icons/fa"; // UI icons
import Layout from "@/components/Layout"; // Page wrapper

export default function Blog() {
  // State: Countdown timer starting at 5 seconds
  const [countdown, setCountdown] = useState(5);
  // State: Track if user has been redirected (prevent multiple redirects)
  const [redirected, setRedirected] = useState(false);

  // ===== AUTO-REDIRECT LOGIC =====
  // useEffect runs on every countdown change
  useEffect(() => {
    // If countdown is still running, decrement by 1 every second
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // 1000ms = 1 second
      // Cleanup: Clear timeout when component unmounts or countdown changes
      return () => clearTimeout(timer);
    } 
    // When countdown reaches 0 and not yet redirected
    else if (!redirected) {
      setRedirected(true);
      // Open blog in new tab (won't reload current page)
      window.open("https://express-blog-app-dlul.onrender.com/", "_blank");
    }
  }, [countdown, redirected]); // Re-run effect when countdown or redirected changes

  // Manual redirect function (triggered by button click)
  const handleManualRedirect = () => {
    setRedirected(true);
    window.open("https://express-blog-app-dlul.onrender.com/", "_blank");
  };

  return (
    <Layout>
      {/* ===== BLOG REDIRECT PAGE ===== */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ===== PAGE HEADER ===== */}
          <div className="mb-16">
            {/* Blog icon in colored circle */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-6 rounded-full">
                <FaBlog className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            {/* Blog name and description */}
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">
              Express & Expressions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              My personal blog where I share insights about web development, technology trends, and programming tutorials.
            </p>
          </div>

          {/* ===== REDIRECT CARD ===== */}
          {/* Main card with countdown timer and redirect status */}
          <div className="bg-white rounded-2xl p-12 shadow-xl mb-8">
            <div className="mb-8">
              {/* Clock icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full">
                  <FaClock className="w-8 h-8" />
                </div>
              </div>
              
              {/* Conditional content based on redirect status */}
              {!redirected ? (
                // BEFORE REDIRECT: Show countdown timer
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Redirecting to Blog
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    You&apos;ll be redirected to my blog in <span className="font-normal text-blue-600 text-2xl">{countdown}</span> seconds
                  </p>
                  {/* Animated progress bar showing countdown progress */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((5 - countdown) / 5) * 100}%` }} // Calculate percentage (0% to 100%)
                    ></div>
                  </div>
                </div>
              ) : (
                // AFTER REDIRECT: Show success message
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

            {/* ===== ACTION BUTTONS ===== */}
            {/* Primary: Manual redirect button, Secondary: Back to home */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA: Visit blog (manual redirect if auto-redirect failed) */}
              <button
                onClick={handleManualRedirect}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-normal hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Visit Blog Now</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              
              {/* Secondary: Return to home page */}
              <Link
                href="/"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-normal hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          {/* ===== BLOG INFO CARDS ===== */}
          {/* 3-column grid showing blog content preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-blue-600 text-2xl font-light mb-2">Latest Posts</div>
              <p className="text-gray-600">Web Development</p>
              <p className="text-gray-600">Programming Tutorials</p>
              <p className="text-gray-600">Tech Insights</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-green-600 text-2xl font-light mb-2">Topics Covered</div>
              <p className="text-gray-600">React & Next.js</p>
              <p className="text-gray-600">Node.js & Express</p>
              <p className="text-gray-600">MongoDB & Databases</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-purple-600 text-2xl font-light mb-2">Content Type</div>
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