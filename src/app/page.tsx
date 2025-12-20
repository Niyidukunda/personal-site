/**
 * HOME PAGE (Landing Page)
 * 
 * Purpose: First impression page showcasing professional profile
 * 
 * Main Sections:
 * 1. Hero Section - Name, title, value proposition, CTA buttons
 * 2. Animated Tech Stack - Floating technology icons
 * 3. Dark Stats Divider - Production apps and students taught
 * 4. About Summary - Quick professional intro
 * 5. Projects Summary - Featured work preview
 * 6. Unique Value Proposition - Competitive advantage
 * 7. Contact CTA - Final call-to-action
 * 
 * Responsive Design: Mobile-first with sm/md/lg breakpoints
 */

"use client"; // Enable client-side interactivity for React hooks

import { useState, useEffect } from "react"; // React state management and side effects
import Link from "next/link"; // Next.js navigation component (client-side routing)
import Image from "next/image"; // Next.js optimized image component
import Layout from "@/components/Layout"; // Page wrapper with Header and Footer

export default function Home() {
  // Media carousel state
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mediaItems = [
    { type: 'video', src: '/images/fix clip.mp4', title: 'Tech duties' },
    { type: 'video', src: '/images/code clip.mp4', title: 'Coding Session' }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
        setIsTransitioning(false);
      }, 500); // Fade out duration
    }, 8000); // Switch every 8 seconds

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  const nextMedia = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevMedia = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentMedia((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <Layout>
      {/* ===== HERO SECTION ===== */}
      {/* Main landing section with name, title, value prop, and CTAs */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 py-8 relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Container: Max width with centered content */}
        <div className="max-w-[1800px] mx-auto relative z-10">
          
          {/* CTA Card - Positioned on far right edge of screen */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-1/4 -mr-16 xl:-mr-14">
            <div className="bg-gradient-to-br from-orange-400/70 to-orange-500/70 dark:from-orange-500/60 dark:to-orange-600/60 p-6 rounded-2xl shadow-2xl border border-orange-400/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 w-56">
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-2 left-2 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-2">Start Your Project</h3>
                
                {/* Description */}
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  Let's turn your ideas into reality with cutting-edge solutions
                </p>
                
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="block w-full bg-white text-orange-600 text-center py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started →
                </Link>
                
                {/* Tech indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-xs">Available Now</span>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* Profile Image - Positioned towards right tech arch */}
          {/* <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 lg:translate-x-[0%] xl:translate-x-[10%] z-30">
            <div className="relative w-72 h-72 xl:w-[368px] xl:h-[368px]">
              <Image
                src="/images/workbase.jpg"
                alt="Fidel Niyidukunda"
                width={368}
                height={368}
                className="rounded-full object-cover opacity-50 shadow-2xl hover:opacity-70 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div> */}
          
          {/* Two-column grid: Stacks on mobile (1 col), side-by-side on desktop (2 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 xl:gap-32 items-center min-h-[60vh]">
            
            {/* ===== LEFT COLUMN: Text Content ===== */}
            <div className="space-y-6 sm:space-y-8 lg:ml-auto lg:mr-8 xl:mr-12 lg:max-w-xl xl:max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Name & Professional Title */}
              <div className="space-y-3 sm:space-y-4">
                {/* Full name with hover animation on each word */}
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white tracking-tight flex items-center gap-3 justify-center lg:justify-start">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Fidel</span>
                  <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">Niyidukunda</span>
                  {/* Rotating earth icon next to name */}
                  <div className="inline-block w-10 h-10 sm:w-12 sm:h-12 animate-spin-slow">
                    <div className="w-full h-full bg-orange-500/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-2 border-orange-400/30">
                      🌍
                    </div>
                  </div>
                </h2>
                {/* Professional role badge with animated pulse indicator */}
                <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gray-100 dark:bg-gray-800 rounded-full px-4 sm:px-5 py-2 border border-gray-200 dark:border-gray-600">
                  {/* Green pulsing dot for "available" status */}
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-base text-gray-700 dark:text-gray-300 font-light">Full-Stack Developer & Network Technician</span>
                </div>
              </div>
              
              {/* Main headline and availability status */}
              <div className="space-y-4 sm:space-y-6">
                {/* Large bold headline split into 3 lines for visual impact */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-none">
                  <span className="text-orange-500 block">Building</span>
                  <span className="text-gray-900 dark:text-white block">Digital</span>
                  <span className="text-gray-700 dark:text-gray-300 block">Solutions.</span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 my-6 sm:my-8">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg">Available for Projects</span>
                </div>
              </div>
              
              {/* Services CTA - What you can get */}
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm sm:max-w-xl md:max-w-2xl font-light tracking-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Need</span>{" "}
                <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">web</span>{" "}
                <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">applications?</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Network</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">infrastructure</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">setup?</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Cloud</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">migration?</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Or</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">technical</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">guidance?</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">Let&apos;s</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">build</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">something</span>{" "}
                <span className="text-gray-900 dark:text-white inline-block transform hover:scale-105 transition-transform duration-300">great.</span>
              </h2>
              
              {/* Call-to-Action Buttons: Stack on mobile, horizontal on tablet+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                {/* Primary CTA: Contact page link with hover lift effect */}
                <Link href="/contact" className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-normal text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                  Contact Me
                </Link>
                {/* Secondary CTA: External resume link with border style */}
                <a
                  href="https://niyidukunda.github.io/Professional-PROFILE-AUTOMATION/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:border-white text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-normal text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📄</span> Resume
                </a>
              </div>
            </div>
            
            {/* ===== RIGHT COLUMN: Artwork Image ===== */}
            <div className="relative flex flex-col items-center justify-start h-full lg:mr-auto lg:ml-8 xl:ml-12">
              {/* Main Image */}
              <div className="relative w-full h-full min-h-[60vh]">
                <Image
                  src="/images/second-col-pic.png"
                  alt="Hero artwork"
                  fill
                  className="object-contain scale-150"
                  priority
                />
              </div>
              
              {/* Developer Tools Cards */}
              <div className="flex justify-center items-center gap-6 w-full max-w-2xl mt-4 pb-8">
                {/* React Card */}
                <div className="bg-white dark:bg-gray-800 w-24 h-24 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-3xl mb-1">⚛️</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-white">React</div>
                </div>
                
                {/* TypeScript Card */}
                <div className="bg-white dark:bg-gray-800 w-24 h-24 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-3xl mb-1">📘</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-white">TypeScript</div>
                </div>
                
                {/* Node.js Card */}
                <div className="bg-white dark:bg-gray-800 w-24 h-24 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-3xl mb-1">🟢</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-white">Node.js</div>
                </div>
                
                {/* Tailwind Card */}
                {/* Database Card (PostgreSQL) */}
                <div className="bg-white dark:bg-gray-800 w-24 h-24 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
                  <svg className="w-8 h-8 mb-1 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <ellipse cx="12" cy="6" rx="9" ry="3.5" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                    <ellipse cx="12" cy="18" rx="9" ry="3.5" />
                  </svg>
                  <div className="text-xs font-medium text-gray-900 dark:text-white">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Slogan Section */}
      <section className="relative py-16 overflow-hidden bg-gray-300 dark:bg-gray-800">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout: Text Left, Stats Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              
              {/* Left Column - Text Content */}
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-0.5 bg-orange-400"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  Crafting digital experiences that bridge the gap between 
                  <span className="text-gray-900 dark:text-white font-medium"> enterprise infrastructure</span> and 
                  <span className="text-orange-500 font-medium"> modern web development</span>
                </p>
              </div>

              {/* Right Column - Personal Mission Statement Card */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-6 text-8xl text-orange-200/40 font-serif leading-none">&ldquo;</div>
                
                {/* Mission badge */}
                <div className="flex items-center space-x-2 mb-4 relative z-10">
                  <div className="px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-xs font-light">My Philosophy</div>
                </div>
                
                {/* Personal statement */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light italic relative z-10">
                  &ldquo;I believe the best solutions come from understanding both the infrastructure layer and user experience. 
                  My approach combines network reliability with elegant code, ensuring systems that are not just functional, 
                  but resilient and scalable.&rdquo;
                </p>
                
                {/* Profile info */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-orange-200">
                    <Image
                      src="/images/desk-photo.jpg"
                      alt="Fidel Niyidukunda"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900 font-normal">Fidel Niyidukunda</div>
                    <div className="text-gray-500 text-sm font-light">del IT and Web</div>
                  </div>
                </div>
                
                {/* Collaboration badge */}
                <div className="mt-6 flex items-center space-x-2 text-sm text-orange-600 relative z-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="font-light">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-[#faf9f7]"/>
          </svg>
        </div>
      </section>

      {/* Media & Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Media Carousel */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
                {/*<h4 className="text-3xl font-light text-gray-900 dark:text-white mb-6">In Action</h4> */}
                
                {/* Carousel Container */}
                <div className="relative aspect-video bg-gray-900/30 dark:bg-gray-800/30 rounded-xl overflow-hidden mb-4">
                  <video
                    key={currentMedia}
                    className={`w-full h-full transition-opacity duration-500 ${
                      isTransitioning ? 'opacity-0' : 'opacity-30'
                    } ${currentMedia === 0 ? 'object-contain' : 'object-cover'}`}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={mediaItems[currentMedia].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevMedia}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Previous media"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Next media"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Media Title */}
                <p className="text-center text-gray-700 dark:text-gray-300 font-light text-lg mb-4">
                  {mediaItems[currentMedia].title}
                </p>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMedia(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMedia
                          ? 'bg-gray-700 dark:bg-gray-300 w-8'
                          : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to media ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Projects Summary */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
                <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-6">Featured Projects</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  From production-ready blog applications to government technology solutions, I&apos;ve built diverse projects 
                  that showcase modern web development practices and real-world problem solving.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-normal text-gray-900 dark:text-white">Purpose & Perspective Blog</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Production-ready blog with intelligent fallback systems and comprehensive security</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Learning Management System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Educational platform with course management and student progress tracking</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-normal text-gray-900 dark:text-white">GovTech Hackathon Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Digital transformation platform for citizen services with real-world impact</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-normal text-gray-900 dark:text-white">Authentication System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Secure login portal with enterprise-level security practices and CSRF prevention</p>
                  </div>
                </div>
                <Link 
                  href="/projects"
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-normal transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  View All Projects →
                </Link>
              </div>
            </div>
          </div>

          {/* What Makes Me Different */}
          <section id="advantage" className="max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-light text-center text-gray-900 dark:text-white mb-16">
              What Makes Me Different as a Developer
            </h3>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-light text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
                    Most Developers
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Build applications without seeing how real users interact with them daily.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Most network technicians understand reliability but don&apos;t build user-facing applications.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gray-600 rounded-full mr-3"></span>
                    I Combine Both
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold">Real User Feedback:</span> I see daily how users actually interact with applications, not just what analytics show.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold">Network Technical Mindset:</span> I build applications with enterprise-level reliability thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="max-w-4xl mx-auto text-center mb-20 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 dark:bg-gray-800 p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-4xl font-light mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Let&apos;s discuss how I can help bring your ideas to life with reliable, user-focused solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-xl font-normal text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
                <a
                  href="https://wa.me/27677188232?text=Hi%20Fidel,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-normal text-lg transition-all duration-300"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </section>
      </section>
    </Layout>
  );
}