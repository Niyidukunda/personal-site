"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { useState } from "react";

interface NavigationProps {
  currentPage: 'home' | 'projects' | 'about' | 'blog' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (page: string) => currentPage === page;

  return (
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
              {currentPage !== 'home' && (
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">
                  Home
                </Link>
              )}
              <Link 
                href="/projects" 
                className={isActive('projects') 
                  ? "text-custom-blue font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
                }
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className={isActive('about') 
                  ? "text-custom-blue font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
                }
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className={isActive('blog') 
                  ? "text-custom-blue font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
                }
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={isActive('contact') 
                  ? "text-custom-blue font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
                }
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Side - Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-3">
              <a href="https://web.facebook.com/finiyid" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              {currentPage === 'home' && (
                <a href="https://www.instagram.com/fidelfayid/" target="_blank" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
              )}
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
            {currentPage !== 'home' && (
              <Link 
                href="/" 
                className="block text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link 
              href="/projects" 
              className={`block py-2 ${isActive('projects') 
                ? "text-custom-blue font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 ${isActive('about') 
                ? "text-custom-blue font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`block py-2 ${isActive('blog') 
                ? "text-custom-blue font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 ${isActive('contact') 
                ? "text-custom-blue font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-slate-600">
              <a href="https://web.facebook.com/finiyid" target="_blank" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              {currentPage === 'home' && (
                <a href="https://www.instagram.com/fidelfayid/" target="_blank" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
              )}
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
  );
}