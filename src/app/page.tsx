"use client";

import Image from "next/image";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaBars, FaTimes, FaCode, FaRocket, FaLink } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700" style={{background: 'linear-gradient(to bottom right, #f8fafc, #e2f3ff, #cef0ff)'}}>
      {/* Professional Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-700 sticky top-0 z-50" style={{borderBottomColor: '#6EC1E4'}}>
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
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Projects</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">About</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Blog</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Contact</Link>
              </nav>
            </div>

            {/* Right Side - Social Icons & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* Social Icons - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-3">
                <a href="https://web.facebook.com/finiyid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/fidelfayid/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <SiInstagram className="w-5 h-5" />
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
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-custom-blue transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-custom-blue-light dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
            <nav className="px-4 py-4 space-y-4">
              <Link 
                href="/projects" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                <a href="https://web.facebook.com/finiyid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/fidelfayid/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <SiInstagram className="w-5 h-5" />
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
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Left Column - Condensed Content */}
            <div className="lg:col-span-2 space-y-6 lg:pl-16 lg:pr-8 flex flex-col justify-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-custom-blue">
                    Fidel Niyidukunda
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Full-Stack Developer & Network Engineer
                </h2>

                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-3 h-3 bg-custom-blue rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Available for Projects</span>
                </div>
              </div>

              {/* Value Proposition */}
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I build <span className="text-blue-600 font-semibold">reliable web applications</span> with enterprise-level thinking while teaching coding to real students gives me <span className="text-blue-700 font-semibold">unique user experience insights</span> most developers never get.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue-hover hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
                >
                  Get In Touch
                </a>
              </div>

              {/* Powered by Del IT+Web */}
              <div className="flex items-center space-x-3 pt-8 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 text-sm">Powered by</span>
                <a href="https://delitweb.co.za" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/FullLogo_Transparent_NoBuffer.png" 
                    alt="Del IT+Web Logo" 
                    width={64} 
                    height={64} 
                    className="bg-transparent"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Expanded Tech Visualization */}
            <div className="lg:col-span-3 relative flex justify-start items-end" style={{marginLeft: '120px'}}>
              {/* Main container with geometric design */}
              <div className="relative w-full max-w-3xl">
                
                {/* Background geometric patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 border-2 border-blue-400 rounded-lg transform rotate-12 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-blue-500 rounded-full transform -rotate-12 animate-pulse delay-700"></div>
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-blue-600 transform rotate-45 animate-pulse delay-1000"></div>
                </div>

                {/* Clean laptop image - transparent background */}
                <div className="relative z-10 w-[40rem] h-[40rem] flex items-center justify-center">
                  {/* Laptop image with transparent background */}
                  <div className="relative group">
                    <Image 
                      src="/images/IT-support-laptop.jpg" 
                      alt="Professional Developer Workspace" 
                      width={640}
                      height={640}
                      className="object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))',
                        mixBlendMode: 'multiply'
                      }}
                      priority
                    />
                  </div>
                </div>

                {/* Tech stack icons positioned to the right */}
                <div className="absolute top-12 right-[-5rem] flex flex-col space-y-4">
                  <div className="group">
                    <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-6">
                      <div className="text-center">
                        <div className="text-blue-600 text-2xl mb-1">⚛️</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">React</div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 dark:border-slate-600 flex items-center justify-center transform transition-all duration-500 hover:scale-110 delay-300">
                      <div className="text-center">
                        <FaLink className="text-blue-600 text-2xl mb-1 mx-auto" />
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">API</div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 dark:border-slate-600 flex items-center justify-center transform transition-all duration-500 hover:scale-110 delay-500">
                      <div className="text-center">
                        <FaCode className="text-blue-600 text-2xl mb-1 mx-auto" />
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Code</div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 dark:border-slate-600 flex items-center justify-center transform transition-all duration-500 hover:scale-110 delay-700">
                      <div className="text-center">
                        <FaRocket className="text-blue-600 text-2xl mb-1 mx-auto" />
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Deploy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl transform scale-150"></div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">5+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Production Applications</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">CCNA</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Network Engineering</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">100+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Students Taught</div>
            </div>
          </div>

          {/* About & Projects Summary Section */}
          <div className="max-w-7xl mx-auto mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* About Summary */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  I&apos;m a passionate Full-Stack Developer and Network Engineer with 5+ years of experience building reliable web applications. 
                  My unique combination of enterprise-level network engineering background and hands-on teaching experience gives me 
                  insights that most developers never get.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-custom-blue rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Full-Stack Development (React, Node.js, TypeScript)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-custom-blue rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Network Engineering & Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-custom-blue rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Teaching & Mentoring (100+ students)</span>
                  </div>
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Read More About Me →
                </Link>
              </div>

              {/* Projects Summary */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  From production-ready blog applications to government technology solutions, I&apos;ve built diverse projects 
                  that showcase modern web development practices and real-world problem solving.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Purpose & Perspective Blog</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Production-ready blog with intelligent fallback systems and comprehensive security</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Learning Management System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Educational platform with course management and student progress tracking</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">GovTech Hackathon Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Digital transformation platform for citizen services with real-world impact</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Authentication System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Secure login portal with enterprise-level security practices and CSRF prevention</p>
                  </div>
                </div>
                <Link 
                  href="/projects"
                  className="inline-flex items-center bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  View All Projects →
                </Link>
              </div>
            </div>
          </div>

          {/* What Makes Me Different */}
          <section id="advantage" className="max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              What Makes Me Different as a Developer
            </h3>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
                    Most Developers
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Build applications without seeing how real users interact with them daily.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Most network engineers understand reliability but don&apos;t build user-facing applications.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></span>
                    I Combine Both
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-orange-600 font-semibold">Real User Feedback:</span> I see daily how users actually interact with applications, not just what analytics show.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-red-600 font-semibold">Network Engineering Mindset:</span> I build applications with enterprise-level reliability thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="max-w-4xl mx-auto text-center mb-20 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 text-blue-50 leading-relaxed">
                Let&apos;s discuss how I can help bring your ideas to life with reliable, user-focused solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-custom-blue hover:bg-custom-blue-light hover:text-custom-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
                <a
                  href="https://wa.me/27760831539?text=Hi%20Fidel,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-custom-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
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
                <a href="https://delitweb.co.za" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
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