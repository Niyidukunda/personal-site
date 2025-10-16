"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>


      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
              {/* Left Column - Bold Content */}
              <div className="space-y-8">
                {/* Name & Title First */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">Fidel</span>
                    <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300 ml-3">Niyidukunda</span>
                  </h2>
                  <div className="inline-flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 rounded-full px-5 py-2 border border-gray-200 dark:border-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-base text-gray-700 dark:text-gray-300 font-semibold">Full-Stack Developer & Network Technician</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                    <span className="text-orange-500 block">Building</span>
                    <span className="text-gray-900 dark:text-white block">Digital</span>
                    <span className="text-gray-700 dark:text-gray-300 block">Solutions.</span>
                  </h1>
                  <div className="flex items-center space-x-3 my-8">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium text-lg">Available for Projects</span>
                  </div>
                </div>
                {/* Value Proposition */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  I create <span className="text-gray-900 dark:text-white font-bold">enterprise-grade applications</span> with real-world user insights from teaching 100+ students and 5+ years of network technical experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link href="/contact" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                    Contact Me
                  </Link>
                  <a
                    href="https://niyidukunda.github.io/Professional-PROFILE-AUTOMATION/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-white text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>📄</span> Resume
                  </a>
                </div>
              </div>
              {/* Right Column - Creative Elements + Tech Tools */}
              <div className="relative h-[600px] lg:h-[700px]">
                {/* Large Centered Globe with Orange Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 animate-spin-slow">
                  <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center text-white text-5xl lg:text-6xl shadow-2xl border-4 border-orange-400">
                    🌍
                  </div>
                </div>
                {/* Dynamic Tech Tools */}
                {/* React */}
                <div className="absolute top-24 left-8 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold animate-float shadow-xl hover:scale-110 transition-transform">
                  ⚛️
                </div>
                {/* Node.js */}
                <div className="absolute top-44 right-28 w-18 h-18 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}}>
                  �
                </div>
                {/* Python */}
                <div className="absolute top-64 left-16 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold animate-wiggle shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                  🐍
                </div>
                {/* JavaScript */}
                <div className="absolute bottom-48 right-20 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black text-xl font-bold animate-pulse shadow-xl hover:scale-110 transition-transform">
                  JS
                </div>
                {/* TypeScript */}
                <div className="absolute bottom-64 left-20 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold animate-float shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '1.5s'}}>
                  TS
                </div>
                {/* Docker */}
                <div className="absolute top-52 right-8 w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-wiggle shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '2s'}}>
                  🐳
                </div>
                {/* MongoDB */}
                <div className="absolute bottom-32 left-12 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '2.5s'}}>
                  🍃
                </div>
                {/* AWS */}
                <div className="absolute top-36 left-32 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold animate-pulse shadow-xl hover:scale-110 transition-transform" style={{animationDelay: '3s'}}>
                  ☁️
                </div>
                {/* Floating Code Symbol */}
                <div className="absolute bottom-20 right-40 w-18 h-18 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold animate-float shadow-xl transform rotate-12">
                  &lt;/&gt;
                </div>
                {/* Floating Network Icon */}
                <div className="absolute bottom-40 left-40 w-20 h-20 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center text-white dark:text-gray-800 text-3xl animate-float shadow-xl" style={{animationDelay: '1s'}}>
                  🔗
                </div>
                {/* Geometric Shapes - Smaller and repositioned */}
                <div className="absolute top-72 left-4 w-12 h-12 border-4 border-gray-400 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-16 right-8 w-10 h-10 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                {/* Plus Signs - Repositioned */}
                <div className="absolute top-80 right-48 text-3xl text-gray-400 animate-pulse">+</div>
                <div className="absolute bottom-72 left-48 text-2xl text-gray-400 animate-pulse" style={{animationDelay: '1s'}}>+</div>
                {/* Abstract Lines */}
                <div className="absolute top-48 left-28 w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent transform rotate-12"></div>
                <div className="absolute bottom-56 right-32 w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </main>



      {/* Dark Section - Stats & Slogan Divider */}
      <section className="relative py-16 overflow-hidden">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 via-gray-600/70 to-slate-700/80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-400 rounded-full blur-2xl animate-float"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-40 w-16 h-16 border-2 border-white/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-24 left-40 w-12 h-12 bg-orange-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 left-20 text-4xl text-white/20 animate-pulse">{ }</div>
          <div className="absolute bottom-1/3 right-24 text-3xl text-white/20 animate-pulse" style={{animationDelay: '2s'}}>&lt;/&gt;</div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout: Text Left, Stats Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              
              {/* Left Column - Text Content */}
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Crafting digital experiences that bridge the gap between 
                  <span className="text-white font-semibold"> enterprise infrastructure</span> and 
                  <span className="text-orange-400 font-semibold"> modern web development</span>
                </p>
              </div>

              {/* Right Column - Compact Stats Cards */}
              <div className="flex flex-col space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black text-orange-500 mb-2">5+</div>
                  <div className="text-gray-800 font-semibold text-base">Production Applications</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black text-orange-500 mb-2">100+</div>
                  <div className="text-gray-800 font-semibold text-base">Students Taught</div>
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

      {/* About & Projects Summary Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* About Summary */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  I&apos;m a passionate Full-Stack Developer and Network Technician with 5+ years of experience building reliable web applications. 
                  My unique combination of enterprise-level network technical background and hands-on teaching experience gives me 
                  insights that most developers never get.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Full-Stack Development (React, Node.js, TypeScript)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Network Technician & Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Teaching & Mentoring (100+ students)</span>
                  </div>
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Read More About Me →
                </Link>
              </div>

              {/* Projects Summary */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  From production-ready blog applications to government technology solutions, I&apos;ve built diverse projects 
                  that showcase modern web development practices and real-world problem solving.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Purpose & Perspective Blog</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Production-ready blog with intelligent fallback systems and comprehensive security</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Learning Management System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Educational platform with course management and student progress tracking</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">GovTech Hackathon Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Digital transformation platform for citizen services with real-world impact</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Authentication System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Secure login portal with enterprise-level security practices and CSRF prevention</p>
                  </div>
                </div>
                <Link 
                  href="/projects"
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
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
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-600">
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
                    Most network technicians understand reliability but don&apos;t build user-facing applications.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
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
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Let&apos;s discuss how I can help bring your ideas to life with reliable, user-focused solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
                <a
                  href="https://wa.me/27677188232?text=Hi%20Fidel,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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