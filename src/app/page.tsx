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

import Link from "next/link"; // Next.js navigation component (client-side routing)
import Image from "next/image"; // Next.js optimized image component
import Layout from "@/components/Layout"; // Page wrapper with Header and Footer

export default function Home() {
  return (
    <Layout>

      {/* ===== HERO SECTION ===== */}
      {/* Main landing section with name, title, value prop, and CTAs */}
      <main className="px-4 sm:px-8 lg:px-16 xl:px-24 py-8 relative overflow-hidden">
        {/* Workbase background image - very low opacity for subtle texture */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/workbase.jpg')",
            opacity: 0.05,
            filter: 'grayscale(30%) blur(0.5px)'
          }}
        ></div>
        
        {/* Container: Max width with centered content */}
        <div className="max-w-[1800px] mx-auto relative z-10">
          
          {/* Profile Image - Positioned towards right tech arch */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 lg:translate-x-[0%] xl:translate-x-[10%] z-30">
            <div className="relative w-72 h-72 xl:w-[368px] xl:h-[368px]">
              <Image
                src="/images/workbase.jpg"
                alt="Fidel Niyidukunda"
                width={368}
                height={368}
                className="rounded-full object-cover opacity-50 shadow-2xl hover:opacity-70 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Two-column grid: Stacks on mobile (1 col), side-by-side on desktop (2 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 xl:gap-32 items-center min-h-[60vh]">
            
            {/* ===== LEFT COLUMN: Text Content ===== */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Name & Professional Title */}
              <div className="space-y-3 sm:space-y-4">
                {/* Full name with hover animation on each word */}
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
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
            
            {/* ===== RIGHT COLUMN: Tech Stack Cards in Semi-Arch ===== */}
            <div className="relative h-[320px] sm:h-[500px] lg:h-[700px]">
              
              {/* Profile Image - Mobile Only */}
              <div className="lg:hidden mb-8">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto">
                  <Image
                    src="/images/workbase.jpg"
                    alt="Fidel Niyidukunda"
                    width={288}
                    height={288}
                    className="rounded-full object-cover opacity-70 shadow-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 border-4 border-white/20"
                  />
                </div>
              </div>
              
              {/* Frontend Card - Top Right (1 o'clock position) */}
              <div className="absolute top-8 right-0 lg:right-4 xl:right-8 w-64 sm:w-72 lg:w-80 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">⚛️</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-600 dark:text-blue-300 text-xs rounded-full">React</span>
                      <span className="px-2.5 py-0.5 bg-gray-800/20 text-gray-700 dark:text-gray-300 text-xs rounded-full">Next.js</span>
                      <span className="px-2.5 py-0.5 bg-blue-600/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">✨</div>
              </div>

              {/* Backend Card - Right Upper (2 o'clock position) */}
              <div className="absolute top-32 right-0 lg:right-2 xl:right-4 sm:top-40 lg:top-48 w-64 sm:w-72 lg:w-80 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">🟩</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-green-600/20 text-green-600 dark:text-green-300 text-xs rounded-full">Node.js</span>
                      <span className="px-2.5 py-0.5 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Python</span>
                      <span className="px-2.5 py-0.5 bg-gray-600/20 text-gray-700 dark:text-gray-300 text-xs rounded-full">REST APIs</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-400">✨</div>
              </div>

              {/* Cloud & DevOps Card - Middle Right (3 o'clock position) */}
              <div className="absolute top-1/2 -translate-y-[60%] right-0 lg:right-0 xl:right-2 w-64 sm:w-72 lg:w-80 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">☁️</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-orange-500/20 text-orange-600 dark:text-orange-300 text-xs rounded-full">AWS</span>
                      <span className="px-2.5 py-0.5 bg-blue-400/20 text-blue-600 dark:text-blue-300 text-xs rounded-full">Docker</span>
                      <span className="px-2.5 py-0.5 bg-blue-600/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">Kubernetes</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400">✨</div>
              </div>

              {/* Database Card - Right Lower (4 o'clock position) */}
              <div className="absolute bottom-56 right-0 lg:right-2 xl:right-4 sm:bottom-64 lg:bottom-72 w-64 sm:w-72 lg:w-80 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">🍃</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Database</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-green-500/20 text-green-600 dark:text-green-300 text-xs rounded-full">MongoDB</span>
                      <span className="px-2.5 py-0.5 bg-blue-700/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">PostgreSQL</span>
                      <span className="px-2.5 py-0.5 bg-red-600/20 text-red-600 dark:text-red-300 text-xs rounded-full">Redis</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-400">✨</div>
              </div>

              {/* Microsoft & Enterprise Card - Bottom Right (4:30 o'clock position) */}
              <div className="absolute bottom-24 right-8 lg:right-12 xl:right-16 sm:bottom-32 lg:bottom-36 w-60 sm:w-64 lg:w-72 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">🪟</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Microsoft & Enterprise</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-blue-600/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">Azure</span>
                      <span className="px-2.5 py-0.5 bg-green-600/20 text-green-700 dark:text-green-300 text-xs rounded-full">Office 365</span>
                      <span className="px-2.5 py-0.5 bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">Active Directory</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">✨</div>
              </div>

              {/* Dev Tools Card - Bottom Center-Left (4:30 o'clock position) */}
              <div className="absolute bottom-4 right-[62%] lg:right-[58%] xl:right-[54%] w-60 sm:w-64 lg:w-72 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">🛠️</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Dev Tools</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-orange-600/20 text-orange-600 dark:text-orange-300 text-xs rounded-full">Git</span>
                      <span className="px-2.5 py-0.5 bg-purple-600/20 text-purple-600 dark:text-purple-300 text-xs rounded-full">CI/CD</span>
                      <span className="px-2.5 py-0.5 bg-gray-700/20 text-gray-700 dark:text-gray-300 text-xs rounded-full">Linux</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">✨</div>
              </div>

              {/* Networking & IT Card - Bottom Right (5:30 o'clock position) */}
              <div className="absolute bottom-4 right-[20%] lg:right-[18%] xl:right-[15%] w-60 sm:w-64 lg:w-72 group bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">🌐</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Networking & IT</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs rounded-full">Cisco Meraki</span>
                      <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-600 dark:text-blue-300 text-xs rounded-full">Fortinet</span>
                      <span className="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs rounded-full">Ubiquiti</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">✨</div>
              </div>
              
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

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  Crafting digital experiences that bridge the gap between 
                  <span className="text-white font-light"> enterprise infrastructure</span> and 
                  <span className="text-orange-400 font-light"> modern web development</span>
                </p>
              </div>

              {/* Right Column - Personal Mission Statement Card */}
              <div className="bg-gradient-to-br from-white/95 to-orange-50/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
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

      {/* About & Projects Summary Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* About Summary */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
                <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-6">About Me</h3>
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
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-normal transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Read More About Me →
                </Link>
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
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 p-12 rounded-3xl shadow-xl text-white">
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