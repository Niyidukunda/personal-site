"use client";

import Image from "next/image";
import { SiComptia, SiCisco, SiKubernetes, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* About Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-Stack Developer & Network Technician with a passion for building reliable applications and teaching others to code.
            </p>
          </div>

          {/* Professional Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <Image 
                    src="/images/presentation-at-a-govtech-hackathon-2025.jpg" 
                    alt="Fidel Niyidukunda" 
                    width={200} 
                    height={200} 
                    className="rounded-full mx-auto mb-6 shadow-lg object-cover"
                  />
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Fidel Niyidukunda</h2>
                  <p className="text-slate-600 text-center mb-4">Full-Stack Developer & Network Technician</p>
                  <div className="text-center space-y-2 text-sm">
                    <p className="text-gray-600">📍 Based in South Africa</p>
                    <p className="text-gray-600">🎯 Available for Projects</p>
                    <p className="text-gray-600">💼 3+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Expertise */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Technical Expertise</h3>
                
                {/* Programming Languages */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Programming Languages</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <SiJavascript className="w-6 h-6 text-yellow-500" />
                      <span className="font-medium">JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <SiTypescript className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Frameworks & Libraries</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-cyan-50 rounded-lg">
                      <SiReact className="w-6 h-6 text-cyan-500" />
                      <span className="font-medium">React</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-black rounded-lg">
                      <SiNextdotjs className="w-6 h-6 text-white" />
                      <span className="font-medium text-white">Next.js</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <SiNodedotjs className="w-6 h-6 text-green-600" />
                      <span className="font-medium">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <SiExpress className="w-6 h-6 text-gray-700" />
                      <span className="font-medium">Express.js</span>
                    </div>
                  </div>
                </div>

                {/* Databases */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Databases</h4>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <SiMongodb className="w-6 h-6 text-green-500" />
                    <span className="font-medium">MongoDB</span>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Tools & Technologies</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-cyan-50 rounded-lg">
                      <SiTailwindcss className="w-6 h-6 text-cyan-500" />
                      <span className="font-medium">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <SiKubernetes className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">Kubernetes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              
              {/* CCNA */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SiCisco className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">CCNA</h4>
                <p className="text-gray-600 text-sm">Cisco Certified Network Associate</p>
              </div>

              {/* KCNA */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SiKubernetes className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">KCNA</h4>
                <p className="text-gray-600 text-sm">Kubernetes & Cloud Native Associate</p>
              </div>

              {/* Network+ */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SiComptia className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Network+</h4>
                <p className="text-gray-600 text-sm">CompTIA Network+</p>
              </div>

              {/* Security+ */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SiComptia className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Security+</h4>
                <p className="text-gray-600 text-sm">CompTIA Security+</p>
              </div>

              {/* A+ */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SiComptia className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">A+</h4>
                <p className="text-gray-600 text-sm">CompTIA A+</p>
              </div>
            </div>
          </div>

          {/* Experience & Background */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Journey</h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Full-Stack Developer</h4>
                <p className="text-blue-600 font-semibold mb-3">Present</p>
                <p className="text-gray-600 leading-relaxed">
                  Developing robust web applications with modern JavaScript frameworks, 
                  focusing on user experience and performance optimization. Specializing in 
                  React, Next.js, and Node.js applications with MongoDB integration.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Network Technician</h4>
                <p className="text-green-600 font-semibold mb-3">2021 - Present</p>
                <p className="text-gray-600 leading-relaxed">
                  Managing and maintaining enterprise network infrastructure, 
                  implementing security protocols, and ensuring optimal network performance. 
                  Certified in Cisco and CompTIA technologies.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Tech Educator</h4>
                <p className="text-purple-600 font-semibold mb-3">2020 - Present</p>
                <p className="text-gray-600 leading-relaxed">
                  Creating educational content and tutorials to help others learn 
                  programming and technology. Passionate about sharing knowledge 
                  and building the next generation of developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}