"use client";

import Image from "next/image";
import Link from "next/link";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description: "Modern task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "/images/govtech-hackathon2025.jpg",
      technologies: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
      ],
      features: [
        "Real-time task updates",
        "Drag & drop task management",
        "Team collaboration tools",
        "Progress tracking & analytics",
        "Mobile-responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Comprehensive LMS for coding bootcamps with course management, student progress tracking, and interactive coding exercises.",
      technologies: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-custom-blue" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" }
      ],
      features: [
        "Course creation & management",
        "Student progress tracking",
        "Interactive coding challenges",
        "Video lecture integration",
        "Assignment submission system"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "GovTech Hackathon Solution",
      description: "Innovative government technology solution developed during the 2025 GovTech Hackathon, focusing on digital transformation and citizen services.",
      image: "/images/KCNA.png",
      technologies: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "TypeScript", icon: SiTypescript, color: "text-custom-blue" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" }
      ],
      features: [
        "Real-time citizen service tracking",
        "Government data visualization",
        "Mobile-first responsive design",
        "Secure authentication system",
        "API integration with government databases"
      ],
      liveUrl: "#",
      githubUrl: "#"
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
                <Link href="/projects" className="text-custom-blue font-semibold">Projects</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">About</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Blog</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">Contact</Link>
              </nav>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center space-x-3">
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
              A showcase of my work in full-stack development, from e-commerce platforms to learning management systems.
              Each project demonstrates different aspects of modern web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 ${project.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-16 items-center ${index % 2 === 1 && project.image ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Project Image */}
                {project.image && (
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-custom-blue-light/30 to-custom-blue-light/30 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border border-custom-blue-light/50">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={400}
                          height={800}
                          className={`w-full h-[32rem] object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300 ${
                            project.image.includes('presentation-at-a-govtech-hackathon-2025') 
                              ? 'object-[center_20%]' // Focus on the presenter (you) in the group photo
                            : project.image.includes('govtech-hackathon2025')
                              ? 'object-[center_30%]' // Focus on you in the hackathon group
                            : 'object-center'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-custom-blue-light/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 && project.image ? 'lg:col-start-1 lg:row-start-1' : ''} ${!project.image ? 'max-w-5xl mx-auto text-center' : ''}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                    <div className={`flex flex-wrap gap-3 ${!project.image ? 'justify-center' : ''}`}>
                      {project.technologies.map((tech) => (
                        <div key={tech.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-custom-blue-light dark:border-slate-600 flex items-center space-x-2">
                          <tech.icon className={`text-lg ${tech.color}`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <ul className={`space-y-2 ${!project.image ? 'max-w-2xl mx-auto' : ''}`}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-start text-gray-600 dark:text-gray-400 ${!project.image ? 'justify-center text-center' : ''}`}>
                          <span className="text-custom-blue mr-3 mt-1">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className={`flex flex-col sm:flex-row gap-4 ${!project.image ? 'justify-center' : ''}`}>
                    <a
                      href={project.liveUrl}
                      className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>View Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-20 pt-16 border-t border-custom-blue-light dark:border-slate-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interested in More?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              These are just a few examples of my work. I have many more projects and am always working on something new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/niyidukunda"
                target="_blank"
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
          </div>

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