import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt: "Exploring the latest features in Next.js 15 and how they can help you build more performant and scalable web applications.",
    content: "Next.js 15 brings exciting new features that revolutionize how we build modern web applications. With improved App Router, enhanced performance optimizations, and better developer experience, it's the perfect time to upgrade your projects...",
    author: "Fidel Niyidukunda",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    featured: true
  },
  {
    id: 2,
    title: "Network Infrastructure for Modern Web Applications",
    excerpt: "Understanding the network fundamentals that power today's web applications and how to optimize for performance and reliability.",
    content: "As web applications become more complex, understanding the underlying network infrastructure becomes crucial for developers. In this post, we'll explore key networking concepts that every full-stack developer should know...",
    author: "Fidel Niyidukunda",
    date: "2024-12-10",
    readTime: "12 min read",
    tags: ["Networking", "Infrastructure", "CCNA", "Performance"],
    featured: false
  },
  {
    id: 3,
    title: "Teaching Code: Lessons from 100+ Students",
    excerpt: "Insights and best practices learned from teaching coding to over 100 students in bootcamp environments.",
    content: "Over the past few years, I've had the privilege of teaching coding to more than 100 students. This experience has taught me valuable lessons about learning, mentorship, and effective teaching methods...",
    author: "Fidel Niyidukunda",
    date: "2024-12-05",
    readTime: "6 min read",
    tags: ["Teaching", "Mentorship", "Education", "Career"],
    featured: false
  },
  {
    id: 4,
    title: "From Bootcamp to Professional Developer",
    excerpt: "A guide for bootcamp graduates transitioning into professional development roles and what to expect in the industry.",
    content: "Making the transition from bootcamp student to professional developer can be challenging. Here's what you need to know to successfully navigate this important career milestone...",
    author: "Fidel Niyidukunda",
    date: "2024-11-28",
    readTime: "10 min read",
    tags: ["Career", "Bootcamp", "Professional Development", "Tips"],
    featured: false
  },
  {
    id: 5,
    title: "Building a Learning Management System with React",
    excerpt: "Technical deep-dive into creating a comprehensive LMS platform using React, Node.js, and modern web technologies.",
    content: "Creating a Learning Management System requires careful planning and robust architecture. In this technical article, we'll explore the key components and decisions involved in building a modern LMS...",
    author: "Fidel Niyidukunda",
    date: "2024-11-20",
    readTime: "15 min read",
    tags: ["React", "LMS", "Node.js", "Architecture"],
    featured: false
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-custom-blue transition-colors font-medium">About</Link>
                <Link href="/blog" className="text-custom-blue font-semibold">Blog</Link>
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

      {/* Blog Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-custom-blue mb-6">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Insights on web development, networking, teaching, and the latest in technology. 
              Sharing knowledge from real-world projects and classroom experiences.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Post Image Placeholder */}
                  <div className="bg-gradient-to-br from-custom-blue to-custom-blue-hover p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-6xl text-white">📝</span>
                      </div>
                      <span className="text-white/80 text-lg font-semibold">Featured Post</span>
                    </div>
                  </div>
                  
                  {/* Featured Post Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <FaCalendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaClock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-custom-blue-light text-custom-blue rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Read Full Article
                      <FaArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Post Image Placeholder */}
                <div className="bg-gradient-to-br from-custom-blue-light to-custom-blue p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl text-white">📖</span>
                    </div>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaCalendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-custom-blue-light text-custom-blue rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <button className="inline-flex items-center text-custom-blue hover:text-custom-blue-hover font-semibold text-sm transition-colors">
                    Read More
                    <FaArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup Section */}
          <div className="mt-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on web development, networking, and tech education delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-custom-blue-light dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Subscribe
              </button>
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