"use client";

import Image from "next/image";
import Link from "next/link";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaExternalLinkAlt, FaRocket, FaGlobe, FaBriefcase } from "react-icons/fa";

export default function Projects() {
  const projects = [
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
                <Link href="/projects" className="text-custom-blue font-semibold">Projects</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">About</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Blog</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Contact</Link>
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
              <a href="https://wa.me/27760831539" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-custom-blue mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects showcasing full-stack development, educational technology, and network engineering expertise.
              Built with enterprise-level reliability and informed by teaching real students in remote learning environments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-custom-blue-light dark:border-slate-600">
                
                {/* Project Content with Floating Image */}
                <div className="space-y-6">
                  
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    
                    {/* Project Image - Smaller and Floating */}
                    {project.image && (
                      <div className="flex-shrink-0">
                        <div className="relative group w-48 h-32 md:w-56 md:h-36">
                          <div className="absolute inset-0 bg-gradient-to-r from-custom-blue-light/20 to-custom-blue-light/20 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                          <div className="relative bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 border border-custom-blue-light/30">
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              width={224}
                              height={144}
                              className={`w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300 ${
                                project.image.includes('presentation-at-a-govtech-hackathon-2025') 
                                  ? 'object-[center_20%]' // Focus on the presenter (you) in the group photo
                                : project.image.includes('govtech-hackathon2025')
                                  ? 'object-[center_30%]' // Focus on you in the hackathon group
                                : 'object-center'
                              }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project Title and Description */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h2>
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies and Features Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Technologies Used */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <div key={tech.name} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-custom-blue-light/30 dark:border-slate-600 flex items-center space-x-2">
                            <tech.icon className={`text-sm ${tech.color}`} />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-custom-blue mr-2 mt-1 text-xs">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-custom-blue-light/20 dark:border-slate-600/20">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>View Live</span>
                    </a>
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

          {/* More Projects CTA */}
          <div className="text-center mt-20 pt-16 border-t border-custom-blue-light dark:border-slate-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Explore More Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              These projects represent my journey from HTML fundamentals to enterprise-level full-stack applications. 
              Visit my GitHub for more learning projects, code examples, and technical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/niyidukunda"
                target="_blank" rel="noopener noreferrer"
                className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <FaGithub className="text-xl" />
                <span>View All on GitHub</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
            
            {/* Additional Links */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://github.com/niyidukunda/webDev"
                target="_blank" rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-blue-hover transition-colors flex items-center space-x-2"
              >
                <FaRocket className="text-sm" />
                <span>Full-Stack Learning Journey</span>
              </a>
              <a
                href="https://delitweb.co.za"
                target="_blank" rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-blue-hover transition-colors flex items-center space-x-2"
              >
                <FaGlobe className="text-sm" />
                <span>Del IT+Web Portfolio</span>
              </a>
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
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
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
