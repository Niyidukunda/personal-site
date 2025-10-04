import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs } from "react-icons/si";

export default function Contact() {
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
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Blog</Link>
                <Link href="/contact" className="text-custom-blue font-semibold">Contact</Link>
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
              <a href="https://wa.me/27667188232" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-custom-blue mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to bring your project to life? Let&apos;s discuss how we can work together to create something amazing.
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Me a Message</h2>
              
              <form action="mailto:fidel@delitweb.co.za" method="post" encType="text/plain" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="+27 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-application">Web Application</option>
                    <option value="e-commerce">E-Commerce Site</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="api-development">API Development</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project ideas, timeline, budget, and any specific requirements you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-8">
              
              {/* Direct Contact Info */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-custom-blue p-3 rounded-lg">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <a href="mailto:fidel@delitweb.co.za" className="text-custom-blue hover:text-custom-blue-hover transition-colors">
                        fidel@delitweb.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-custom-blue p-3 rounded-lg">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                      <a href="https://wa.me/27667188232" target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-blue-hover transition-colors">
                        067188232
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-custom-blue p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">Johannesburg, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Methods */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Connect</h2>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/27667188232?text=Hi%20Fidel,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>WhatsApp Me</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/fidel-niyidukunda"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/niyidukunda"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <FaGithub className="text-xl" />
                    <span>View My GitHub</span>
                  </a>
                </div>
              </div>

              {/* Response Time & Availability */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Response Time</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Usually responds within 2-4 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span>Available Monday - Friday, 8 AM - 6 PM SAST</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span>Weekend emergency support available</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Why Work With Me Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Why Work With Me?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SiReact className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modern Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I use the latest technologies and best practices to ensure your project is built for the future.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Clear Communication</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular updates, clear timelines, and transparent pricing. You&apos;ll always know where your project stands.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SiNodedotjs className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Full-Stack Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  From database design to user interfaces, I handle every aspect of your web application.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 mt-20">
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
