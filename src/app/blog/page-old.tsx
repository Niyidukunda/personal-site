"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaExternalLinkAlt, FaBlog, FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const [countdown, setCountdown] = useState(3);

  // Auto-redirect with countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect when countdown reaches 0
      window.open("https://express-expressions.vercel.app/", "_blank");
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-custom-blue-light to-custom-blue-light dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Professional Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-custom-blue-light dark:border-slate-700 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Only */}
            <div className="flex items-center">
              <a href="https://delitweb.co.za" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/delitweb-logo.jpg" 
                  alt="Del IT+Web Logo" 
                  width={80} 
                  height={80} 
                  className="bg-transparent"
                />
              </a>
            </div>

            {/* Centered Navigation */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Home</Link>
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Projects</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">About</Link>
                <Link href="/blog" className="text-custom-blue font-semibold">Blog</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Contact</Link>
              </nav>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center space-x-3">
              <a href="https://web.facebook.com/finiyid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/27760831539" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Redirect Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Redirect Hero Section */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-custom-blue-light dark:border-slate-600 mb-12">
            <div className="flex justify-center mb-8">
              <div className="bg-custom-blue/10 p-6 rounded-full">
                <FaBlog className="w-16 h-16 text-custom-blue" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Purpose & Perspective Blog
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Welcome to my personal reflection space where I share insights on life, growth, and meaningful living. 
              My blog features thoughts on purpose, perspective, and the journey of continuous learning.
            </p>

            {/* Redirect Notice */}
            <div className="bg-custom-blue/5 border border-custom-blue/20 rounded-2xl p-6 mb-8">
              <p className="text-custom-blue font-semibold mb-2 flex items-center space-x-2">
                <FaArrowRight className="text-sm" />
                <span>Redirecting you to my live blog...</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {countdown > 0 ? (
                  <>You&apos;ll be automatically redirected in <span className="font-bold text-custom-blue">{countdown}</span> seconds, or click the button below to visit now.</>
                ) : (
                  <>Opening your blog now...</>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://express-expressions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span>Visit My Blog</span>
              </a>
              
              <Link
                href="/projects"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>View My Projects</span>
              </Link>
            </div>
          </div>

          {/* Blog Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-custom-blue-light/30 dark:border-slate-600">
              <div className="text-3xl font-bold text-custom-blue mb-2">Personal</div>
              <div className="text-gray-600 dark:text-gray-400">Reflections & Insights</div>
            </div>
            
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-custom-blue-light/30 dark:border-slate-600">
              <div className="text-3xl font-bold text-custom-blue mb-2">Technical</div>
              <div className="text-gray-600 dark:text-gray-400">Development Journey</div>
            </div>
            
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-custom-blue-light/30 dark:border-slate-600">
              <div className="text-3xl font-bold text-custom-blue mb-2">Growth</div>
              <div className="text-gray-600 dark:text-gray-400">Learning & Teaching</div>
            </div>
            
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-custom-blue-light/30 dark:border-slate-600">
              <div className="text-3xl font-bold text-custom-blue mb-2">Project Ideas</div>
              <div className="text-gray-600 dark:text-gray-400">Innovation & Concepts</div>
            </div>
          </div>

          {/* Features */}
          <div className="text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What You&apos;ll Find</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <span className="text-custom-blue mr-3 mt-1">▸</span>
                Personal reflections on purpose and meaningful living
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <span className="text-custom-blue mr-3 mt-1">▸</span>
                Technical insights from my development journey
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <span className="text-custom-blue mr-3 mt-1">▸</span>
                Lessons learned from teaching 100+ students
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <span className="text-custom-blue mr-3 mt-1">▸</span>
                Perspectives on growth, learning, and self-improvement
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <span className="text-custom-blue mr-3 mt-1">▸</span>
                Creative project ideas and innovative concepts
              </li>
            </ul>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/niyidukunda" target="_blank" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:fidel@delitweb.co.za" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                <span>Email</span>
              </a>
            </div>
            
            <div className="border-t border-blue-800 pt-8 mt-8">
              <p className="text-blue-200 mb-6">
                © 2025 Fidel Niyidukunda • Building reliable applications with real user insights
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-blue-300 text-lg">Powered by</span>
                <a href="https://delitweb.co.za" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/FullLogo_Transparent_NoBuffer.png" 
                    alt="Del IT+Web Logo" 
                    width={120} 
                    height={120} 
                    className="bg-transparent"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
