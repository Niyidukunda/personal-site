/**
 * HEADER COMPONENT
 * 
 * Purpose: Top navigation bar with logo, nav links, social icons, and mobile menu
 * 
 * Features:
 * - Logo linked to Del IT+Web company site
 * - Desktop horizontal navigation (Home, Projects, About, Blog, Contact)
 * - Social media icons (Facebook, Instagram, LinkedIn, WhatsApp, GitHub)
 * - Mobile hamburger menu with dropdown
 * - Sticky positioning (stays at top when scrolling)
 * - Responsive design (desktop nav hidden on mobile, mobile menu hidden on desktop)
 * 
 * State Management:
 * - isMobileMenuOpen: Controls mobile menu visibility (toggle with hamburger icon)
 */

"use client"; // Enable client-side interactivity for useState

import Image from "next/image"; // Optimized image loading
import Link from "next/link"; // Client-side navigation (no page reload)
import { useState } from "react"; // React state hook
import { SiInstagram } from "react-icons/si"; // Instagram icon
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaBars, FaTimes } from "react-icons/fa"; // Social and menu icons

export default function Header() {
  // State: Track mobile menu open/closed status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Sticky header with transparent background to blend with hero
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* ===== LEFT: LOGO ===== */}
          {/* Company logo linked to external Del IT+Web website */}
          <div className="flex items-center">
            <a href="https://delitweb.co.za" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/FullLogo_Transparent_NoBuffer.png" 
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
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium">Home</Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium">Projects</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium">About</Link>
              <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium">Contact</Link>
            </nav>
          </div>

          {/* Right Side - Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-3">
              <a href="https://web.facebook.com/finiyid" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fidelfayid/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/27677188232" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-white transition-colors p-2"
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
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <nav className="px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <a href="https://web.facebook.com/finiyid" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fidelfayid/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/27677188232" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}