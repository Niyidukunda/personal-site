/**
 * PROJECTS PAGE
 * 
 * Purpose: Showcase portfolio of real-world projects with details
 * 
 * Features:
 * - Project grid layout (responsive)
 * - Each project card includes:
 *   - Title, description, screenshot
 *   - Technology icons with colors
 *   - Features list
 *   - Live demo and GitHub links
 * - 7 featured projects total
 * - Hover effects and animations
 * 
 * Data Structure:
 * - projects array: Contains all project data
 * - Each project object has: id, title, description, image, technologies, features, liveUrl, githubUrl
 * 
 * Technologies displayed: Node.js, Express, MongoDB, JavaScript, React, TypeScript, etc.
 */

"use client"; // Enable client-side features

import Image from "next/image"; // Optimized image loading
import Link from "next/link"; // Next.js navigation
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript } from "react-icons/si"; // Tech stack icons
import { FaGithub, FaExternalLinkAlt, FaRocket, FaGlobe, FaBriefcase } from "react-icons/fa"; // UI icons
import Layout from "@/components/Layout"; // Page wrapper

export default function Projects() {
  // ===== PROJECTS DATA ARRAY =====
  // Each project object contains: id, title, description, image, technologies, features, liveUrl, githubUrl
  const projects = [
    // PROJECT 1: Purpose & Perspective Blog
    {
      id: 1,
      title: "Purpose & Perspective Blog",
      description: "Production-ready blog application with intelligent fallback systems, comprehensive security features, and dual-storage architecture. Built for educational platform reliability with MongoDB Atlas and Express.js.",
      image: "/images/desk-photo.jpg",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }
      ],
      features: [
        "Intelligent fallback storage system",
        "XSS protection & input sanitization",
        "Auto-reconnection with retry logic",
        "Real-time status notifications",
        "File upload security & validation",
        "Production-ready deployment config"
      ],
      liveUrl: "https://express-expressions.vercel.app/",
      githubUrl: "https://github.com/Niyidukunda/express-blog-app"
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Educational platform development with course management, student progress tracking, and interactive learning modules. Built while teaching coding and robotics to remote students from underserved backgrounds.",
      image: "/images/presentation-at-a-govtech-hackathon-2025.jpg",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }
      ],
      features: [
        "Course creation & content management",
        "Student progress tracking & analytics",
        "Interactive coding challenges",
        "Google Classroom integration",
        "Offline/online sync capabilities",
        "Real user feedback incorporation"
      ],
      liveUrl: "https://github.com/Niyidukunda",
      githubUrl: "https://github.com/Niyidukunda"
    },
    {
      id: 3,
      title: "Full-Stack Development Journey",
      description: "Comprehensive developer portfolio and learning journal showcasing mastery of full-stack web development through real projects, structured guides, and hands-on implementations.",
      technologies: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-custom-blue" }
      ],
      features: [
        "Progressive skill building documentation",
        "Real-world project implementations",
        "Modern development best practices",
        "Responsive design patterns",
        "Full-stack architecture examples",
        "Learning resource compilation"
      ],
      liveUrl: "https://github.com/Niyidukunda/full-stack-dev-journey",
      githubUrl: "https://github.com/Niyidukunda/full-stack-dev-journey"
    },
    {
      id: 4,
      title: "Authentication System",
      description: "Secure login portal with comprehensive middleware implementation, password validation, session management, and CSRF prevention. Built with enterprise-level security practices.",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }
      ],
      features: [
        "Secure user authentication",
        "Session handling & management",
        "Password hashing & validation",
        "Route protection middleware",
        "CSRF attack prevention",
        "Input validation & sanitization"
      ],
      liveUrl: "https://github.com/niyidukunda/webDev/tree/main/Backend/3.5%20Secrets%20Project",
      githubUrl: "https://github.com/niyidukunda/webDev/tree/main/Backend/3.5%20Secrets%20Project"
    },
    {
      id: 5,
      title: "QR Code Generator",
      description: "Professional utility application for generating QR codes with URL encoding, multiple export formats, and file management capabilities. Built with Node.js and NPM integration.",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }
      ],
      features: [
        "URL encoding & validation",
        "SVG and PNG export options",
        "File system operations",
        "CLI interface",
        "Error handling & validation",
        "Multiple use cases support"
      ],
      liveUrl: "https://github.com/niyidukunda/webDev/tree/main/Backend/2.4%20QR%20Code%20Project",
      githubUrl: "https://github.com/niyidukunda/webDev/tree/main/Backend/2.4%20QR%20Code%20Project"
    },
    {
      id: 6,
      title: "Kubernetes Learning Journal",
      description: "Hands-on learning documentation for mastering Kubernetes, containers, and Linux administration. Demonstrates DevOps expertise and cloud-native architecture understanding.",
      image: "/images/KCNA.png",
      technologies: [
        { name: "Kubernetes", icon: SiNodedotjs, color: "text-blue-600" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" }
      ],
      features: [
        "Container orchestration examples",
        "Kubernetes cluster management",
        "Linux administration practices",
        "Cloud-native architecture",
        "DevOps best practices",
        "Real-world deployment scenarios"
      ],
      liveUrl: "https://github.com/Niyidukunda/kubernetes-learning-journal",
      githubUrl: "https://github.com/Niyidukunda/kubernetes-learning-journal"
    },
    {
      id: 7,
      title: "GovTech Hackathon Solution",
      description: "Innovative government technology solution developed during the 2025 GovTech Hackathon, focusing on digital transformation and citizen services with real-world impact.",
      image: "/images/govtech-hackathon2025.jpg",
      technologies: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "TypeScript", icon: SiTypescript, color: "text-custom-blue" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" }
      ],
      features: [
        "Digital transformation solutions",
        "Citizen service optimization",
        "Government data integration",
        "Mobile-first responsive design",
        "Secure authentication systems",
        "API integration capabilities"
      ],
      liveUrl: "https://github.com/Niyidukunda",
      githubUrl: "https://github.com/Niyidukunda"
    }
  ];

  return (
    <Layout>
      {/* ===== MAIN PROJECTS SECTION ===== */}
      {/* Full-width container with responsive padding */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-[1600px] mx-auto">
          
          {/* ===== PAGE HEADER ===== */}
          {/* Centered introduction with title and description */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-custom-blue mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects showcasing full-stack development, educational technology, and network technical expertise.
              Built with enterprise-level reliability and informed by teaching real students in remote learning environments.
            </p>
          </div>

          {/* ===== PROJECTS GRID ===== */}
          {/* Vertical stack of project cards with spacing */}
          <div className="space-y-12">
            {/* Map through projects array and render each project card */}
            {projects.map((project) => (
              // Individual project card with glassmorphism effect
              <div key={project.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-custom-blue-light dark:border-slate-600">
                
                {/* ===== PROJECT CONTENT LAYOUT ===== */}
                {/* Vertical spacing between project sections */}
                <div className="space-y-6">
                  
                  {/* ===== PROJECT HEADER SECTION ===== */}
                  {/* Flexbox: stacks vertically on mobile, horizontal on desktop */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    
                    {/* ===== PROJECT IMAGE (FLOATING CARD) ===== */}
                    {/* Conditional render: only show if project has an image */}
                    {project.image && (
                      <div className="flex-shrink-0">
                        {/* Responsive image container: 48x32 mobile, 56x36 desktop */}
                        <div className="relative group w-48 h-32 md:w-56 md:h-36">
                          {/* Background layer with subtle rotation on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-custom-blue-light/20 to-custom-blue-light/20 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                          {/* Image card with glassmorphism and hover shadow effect */}
                          <div className="relative bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 border border-custom-blue-light/30">
                            {/* Next.js optimized image with hover opacity change */}
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              width={224}
                              height={144}
                              className={`w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300 ${
                                project.image.includes('presentation-at-a-govtech-hackathon-2025') 
                                  ? 'object-[center_20%]' // Custom crop: Focus on presenter in group photo
                                : project.image.includes('govtech-hackathon2025')
                                  ? 'object-[center_30%]' // Custom crop: Focus on you in hackathon group
                                : 'object-center' // Default: center crop for other images
                              }`}
                            />
                            {/* Gradient overlay from bottom to top for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ===== PROJECT TITLE & DESCRIPTION ===== */}
                    {/* Flex-1 takes remaining space next to image */}
                    <div className="flex-1">
                      {/* Project title: responsive text size (2xl → 3xl) */}
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h2>
                      {/* Project description with comfortable line height */}
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* ===== TECHNOLOGIES & FEATURES ROW ===== */}
                  {/* Grid: 1 column mobile, 2 columns desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* ===== TECHNOLOGIES SECTION ===== */}
                    <div>
                      {/* Section title */}
                      <h3 className="text-lg font-normal text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                      {/* Flex wrap container for technology badges */}
                      <div className="flex flex-wrap gap-2">
                        {/* Map through technologies array and render each badge */}
                        {project.technologies.map((tech) => (
                          <div key={tech.name} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-custom-blue-light/30 dark:border-slate-600 flex items-center space-x-2">
                            {/* Technology icon with custom color from tech object */}
                            <tech.icon className={`text-sm ${tech.color}`} />
                            {/* Technology name */}
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ===== KEY FEATURES SECTION ===== */}
                    <div>
                      {/* Section title */}
                      <h3 className="text-lg font-normal text-gray-900 dark:text-white mb-3">Key Features</h3>
                      {/* Unordered list with vertical spacing */}
                      <ul className="space-y-1">
                        {/* Map through features array and render each bullet point */}
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            {/* Custom arrow bullet point */}
                            <span className="text-custom-blue mr-2 mt-1 text-xs">▸</span>
                            {/* Feature description text */}
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ===== PROJECT LINKS SECTION ===== */}
                  {/* Flex container: stacks vertically on mobile, horizontal on small+ */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-custom-blue-light/20 dark:border-slate-600/20">
                    {/* "View Live" button - primary action */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>View Live</span>
                    </a>
                    {/* "View Code" button - secondary action with outline style */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaGithub className="text-sm" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== MORE PROJECTS CTA SECTION ===== */}
          {/* Centered call-to-action with top border separator */}
          <div className="text-center mt-20 pt-16 border-t border-custom-blue-light dark:border-slate-700">
            {/* CTA heading */}
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6">Explore More Projects</h2>
            {/* CTA description with max-width for readability */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              These projects represent my journey from HTML fundamentals to enterprise-level full-stack applications. 
              Visit my GitHub for more learning projects, code examples, and technical documentation.
            </p>
            {/* Primary CTA buttons container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA: GitHub profile link */}
              <a
                href="https://github.com/niyidukunda"
                target="_blank" rel="noopener noreferrer"
                className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-normal text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <FaGithub className="text-xl" />
                <span>View All on GitHub</span>
              </a>
              {/* Secondary CTA: Contact page link */}
              <Link
                href="/contact"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-8 py-4 rounded-xl font-normal text-lg transition-all duration-300"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
            
            {/* ===== ADDITIONAL NAVIGATION LINKS ===== */}
            {/* Small text links to related resources */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              {/* Link to full-stack development learning repository */}
              <a
                href="https://github.com/niyidukunda/webDev"
                target="_blank" rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-blue-hover transition-colors flex items-center space-x-2"
              >
                <FaRocket className="text-sm" />
                <span>Full-Stack Learning Journey</span>
              </a>
              {/* Link to business portfolio website */}
              <a
                href="https://delitweb.co.za"
                target="_blank" rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-blue-hover transition-colors flex items-center space-x-2"
              >
                <FaGlobe className="text-sm" />
                <span>Del IT+Web Portfolio</span>
              </a>
              {/* Link to LinkedIn professional profile */}
              <a
                href="https://linkedin.com/in/fidel-niyidukunda"
                target="_blank" rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-blue-hover transition-colors flex items-center space-x-2"
              >
                <FaBriefcase className="text-sm" />
                <span>Professional Experience</span>
              </a>
            </div>
          </div>

        </div>
      </div>


    </Layout>
  );
}
