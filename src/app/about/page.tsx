/**
 * ABOUT PAGE
 * 
 * Purpose: Detailed professional profile with bio, services, certifications, and experience
 * 
 * Main Sections:
 * 1. Background Image - Hackathon presentation photo with blur overlay
 * 2. Circular Overlays - Strategic placement to obscure faces (privacy)
 * 3. Professional Summary - Experience and expertise overview
 * 4. Services - IT Support, Web Development, Educational Technology
 * 5. Certifications Grid - CCNA, KCNA, Network+, Security+, A+
 * 6. Professional Journey Timeline - Career progression
 * 
 * Responsive Design: Flex/grid layout optimized for mobile, tablet, desktop
 */

"use client"; // Enable client-side features for Next.js

import Image from "next/image"; // Optimized image component
import { SiComptia, SiCisco, SiKubernetes, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"; // Tech icons
import Layout from "@/components/Layout"; // Page wrapper

export default function About() {
  return (
    <Layout>
      {/* ===== ABOUT PAGE CONTENT ===== */}
      {/* Main container with responsive padding and minimum height */}
      <main className="relative px-2 sm:px-4 lg:px-8 py-16 min-h-[600px]">
        
        {/* ===== BACKGROUND IMAGE LAYER ===== */}
        {/* Full-screen background with dual-layer effect for depth */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Radial gradient mask creates central focus blur effect */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            
            {/* Base Layer: Subtle opacity with slight blur */}
            <Image 
              src="/images/presentation-at-a-govtech-hackathon-2025.jpg" 
              alt="Fidel Niyidukunda" 
              fill
              style={{ objectFit: 'cover', opacity: 0.15 }}
              className="blur-[0.5px]"
            />
            <Image 
              src="/images/presentation-at-a-govtech-hackathon-2025.jpg" 
              alt="Fidel Niyidukunda" 
              fill
              style={{ objectFit: 'cover', opacity: 0.35 }}
              className="[mask-image:radial-gradient(circle_at_center,black_0%,transparent_30%,transparent_100%)]"
            />
            
            {/* ===== PRIVACY OVERLAYS ===== */}
            {/* Strategic circular overlays to obscure faces in background photo */}
            
            {/* Left Overlay: IT Services label */}
            <div className="absolute left-[0%] top-[8%] w-24 h-24 bg-white/70 rounded-full shadow-lg border-2 border-blue-200 z-20 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">IT</span>
            </div>
            
            {/* Center Overlay: Edu-Tech Services label */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/80 rounded-full shadow-lg border-2 border-purple-200 z-30 flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">Edu-Tech</span>
            </div>
          </div>
        </div>
        
        {/* ===== FOREGROUND CONTENT ===== */}
        {/* Content layer above background (z-10) */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* ===== PAGE HEADER ===== */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">About Me</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-Stack Developer & Network Technician with a passion for building reliable applications and teaching others to code.
              </p>
            </div>
            
            {/* ===== PROFESSIONAL OVERVIEW SECTION ===== */}
            {/* Responsive flex layout: Stacks on mobile, side-by-side on desktop */}
            <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-12 lg:gap-32 mb-12 mx-auto max-w-full sm:max-w-2xl lg:max-w-6xl min-h-[320px] px-2">
              {/* Row-specific Background Overlay for extra contrast */}
              <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="w-full h-full bg-white/10" />
              </div>
              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col lg:flex-row w-full gap-6 sm:gap-12 lg:gap-32 justify-between">
                {/* Professional Summary Section */}
                <div className="flex-1 min-w-[180px] max-w-full sm:max-w-md lg:max-w-[400px] bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-2xl p-4 sm:p-8 shadow-lg border border-blue-100 flex flex-col justify-center backdrop-blur-sm bg-opacity-80 mx-auto relative">
                  <h3 className="text-lg sm:text-xl font-light text-blue-700 mb-2 text-center">Professional Summary</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 text-center">
                    I am a versatile technologist with hands-on experience in web development, IT support, and automation. My toolkit spans modern frameworks, databases, and integration methods, alongside infrastructure design, network administration, and server operations. Certified in CompTIA and Cisco, I build scalable, user-focused solutions—from custom applications to cloud optimization and complex network troubleshooting. I thrive in environments that value adaptability, clear communication, and ownership.
                  </p>
                  <div className="flex flex-col items-center mt-6 gap-2">
                    <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-normal px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow transition-all duration-200">Contact Me</a>
                  </div>
                </div>
                {/* Services Section */}
                <div className="flex-[1.3] min-w-[180px] max-w-full sm:max-w-md lg:max-w-[480px] bg-white rounded-2xl p-4 sm:p-12 shadow-xl border border-orange-100 flex flex-col justify-center backdrop-blur-sm bg-opacity-80 mx-auto relative">
                  <h3 className="text-lg sm:text-2xl font-light text-orange-600 mb-4 text-center">Services</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-normal text-sm sm:text-base mb-1">IT Support</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Networking, installation, troubleshooting, and repairs for networks and devices.</p>
                    </div>
                    <div>
                      <h4 className="font-normal text-sm sm:text-base mb-1">Web Development</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Custom websites, web apps, and related digital solutions for businesses and individuals.</p>
                    </div>
                    <div>
                      <h4 className="font-normal text-sm sm:text-base mb-1">Educational Technology</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">CMS design, online learning platforms, and technology for education and training.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-6 gap-2">
                    <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-normal px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow transition-all duration-200">WhatsApp Me</a>
                  </div>
                  {/* Overlay moved to top right of services section */}
                  <div className="absolute right-[-16px] sm:right-[-32px] top-[-16px] sm:top-[-32px] w-16 h-16 sm:w-24 sm:h-24 bg-white/80 rounded-full shadow-lg border-2 border-purple-200 z-30 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs sm:text-lg">Edu-Tech</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-20">
              <h3 className="text-3xl font-light text-gray-800 text-center mb-12">Professional Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                
                {/* CCNA */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SiCisco className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">CCNA</h4>
                  <p className="text-gray-600 text-sm">Cisco Certified Network Associate</p>
                </div>

                {/* KCNA */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SiKubernetes className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">KCNA</h4>
                  <p className="text-gray-600 text-sm">Kubernetes & Cloud Native Associate</p>
                </div>

                {/* Network+ */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SiComptia className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Network+</h4>
                  <p className="text-gray-600 text-sm">CompTIA Network+</p>
                </div>

                {/* Security+ */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SiComptia className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Security+</h4>
                  <p className="text-gray-600 text-sm">CompTIA Security+</p>
                </div>

                {/* A+ */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SiComptia className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">A+</h4>
                  <p className="text-gray-600 text-sm">CompTIA A+</p>
                </div>
              </div>
            </div>

            {/* Experience & Background */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-light text-gray-800 mb-8 text-center">Professional Journey</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-8">
                  <h4 className="text-xl font-normal text-gray-800 mb-2">Full-Stack Developer</h4>
                  <p className="text-blue-600 font-normal mb-3">Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Developing robust web applications with modern JavaScript frameworks, 
                    focusing on user experience and performance optimization. Specializing in 
                    React, Next.js, and Node.js applications with MongoDB integration.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-8">
                  <h4 className="text-xl font-normal text-gray-800 mb-2">Network Technician</h4>
                  <p className="text-green-600 font-normal mb-3">2021 - Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Managing and maintaining enterprise network infrastructure, 
                    implementing security protocols, and ensuring optimal network performance. 
                    Certified in Cisco and CompTIA technologies.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-8">
                  <h4 className="text-xl font-normal text-gray-800 mb-2">Tech Educator</h4>
                  <p className="text-purple-600 font-normal mb-3">2020 - Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Creating educational content and tutorials to help others learn 
                    programming and technology. Passionate about sharing knowledge 
                    and building the next generation of developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}