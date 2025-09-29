"use client";

import Image from "next/image";
import Link from "next/link";
import { SiComptia, SiCisco, SiKubernetes, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-custom-blue-light to-custom-blue-light dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Professional Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-custom-blue-light dark:border-slate-700 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Only */}
            <div className="flex items-center">
              <a href="https://delitweb.co.za" target="_blank" className="hover:opacity-80 transition-opacity">
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
                <Link href="/about" className="text-custom-blue font-semibold">About</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Blog</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Contact</Link>
              </nav>
            </div>

            {/* Right Side - Social Icons & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* Social Icons - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-3">
                <a href="https://web.facebook.com/finiyid" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/27760831539" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://github.com/niyidukunda" target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
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
                href="/" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className="block text-custom-blue font-semibold py-2"
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
                <a href="https://web.facebook.com/finiyid" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/27760831539" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://github.com/niyidukunda" target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* About Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-custom-blue mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Full-Stack Developer & Network Engineer with a passion for building reliable applications and teaching others to code.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            
            {/* Left Column - Story & Background */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Story</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I&apos;m Fidel Niyidukunda, a passionate Full-Stack Developer and Network Engineer based in South Africa. 
                    My journey in technology began with a curiosity about how systems connect and communicate, which led me 
                    to pursue both web development and network engineering.
                  </p>
                  <p>
                    What sets me apart is my unique combination of enterprise-level network thinking and modern web development skills. 
                    I understand how to build applications that are not just functional, but reliable, scalable, and secure from the ground up.
                  </p>
                  <p>
                    As an active coding instructor, I teach real students, which gives me invaluable insights into user experience 
                    and common pain points that most developers never encounter. This perspective helps me build more intuitive 
                    and user-friendly applications.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-custom-blue mr-3">▸</span>
                    Build full-stack web applications with modern frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-blue mr-3">▸</span>
                    Design and implement network infrastructure solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-blue mr-3">▸</span>
                    Teach coding and mentor aspiring developers
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-blue mr-3">▸</span>
                    Provide technical consulting for business solutions
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 relative">
                  <Image 
                    src="/images/crossing-arms-image.jpg" 
                    alt="Fidel Niyidukunda - Professional Portrait" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/20 via-transparent to-custom-blue/10 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Development Skills */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
                    { name: 'TypeScript', icon: SiTypescript, color: 'text-custom-blue' },
                    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
                    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
                    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
                    { name: 'Express', icon: SiExpress, color: 'text-gray-700' },
                    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
                    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-custom-blue-light dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <skill.icon className={`text-3xl mb-2 ${skill.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Network & Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Network & Certifications</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: 'CompTIA A+', icon: SiComptia, color: 'text-red-600' },
                    { name: 'CompTIA Network+', icon: SiComptia, color: 'text-red-600' },
                    { name: 'CompTIA Security+', icon: SiComptia, color: 'text-red-600' },
                    { name: 'Cisco CCNA', icon: SiCisco, color: 'text-custom-blue' },
                    { name: 'Kubernetes KCNA', icon: SiKubernetes, color: 'text-custom-blue' }
                  ].map((cert) => (
                    <div key={cert.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center space-x-4">
                      <cert.icon className={`text-3xl ${cert.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Highlights */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">5+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Production Applications Built</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">100+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Students Taught</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-slate-600 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">3+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities, innovative projects, or just having a conversation about technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </section>

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