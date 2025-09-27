import Image from "next/image";
import { SiInstagram, SiExpress, SiCisco, SiComptia, SiKubernetes } from "react-icons/si";
import { FaNetworkWired, FaShieldAlt, FaLaptopCode, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Professional Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-blue-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-4">
              <a href="https://delitweb.co.za" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/delitweb-logo.jpg" 
                  alt="Del IT+Web Logo" 
                  width={80} 
                  height={80} 
                  className="bg-transparent"
                />
              </a>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-xl">Fidel Niyidukunda</div>
                <div className="text-sm text-blue-600 font-medium">Full-Stack Developer & Network Engineer</div>
              </div>
            </div>

            {/* Navigation & Social Icons */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors font-medium">Projects</a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors font-medium">Contact</a>
              </nav>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a href="https://web.facebook.com/finiyid" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/fidelfayid/" target="_blank" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/27760831539" target="_blank" className="text-gray-600 hover:text-green-600 transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://github.com/niyidukunda" target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 bg-clip-text text-transparent">
                    Fidel Niyidukunda
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Full-Stack Developer & Network Engineer
                </h2>

                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Available for Projects</span>
                </div>
              </div>

              {/* Value Proposition */}
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I build <span className="text-blue-600 font-semibold">reliable web applications</span> with enterprise-level thinking while teaching coding to real students gives me <span className="text-emerald-600 font-semibold">unique user experience insights</span> most developers never get.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-500 to-emerald-600 hover:from-blue-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
                >
                  Get In Touch
                </a>
              </div>

              {/* Powered by Del IT+Web */}
              <div className="flex items-center space-x-3 pt-8 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 text-sm">Powered by</span>
                <a href="https://delitweb.co.za" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/delitweb-logo.jpg" 
                    alt="Del IT+Web Logo" 
                    width={64} 
                    height={64} 
                    className="bg-transparent"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Enhanced Professional Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-spin-slow opacity-20"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full animate-pulse opacity-30"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-orange-500 via-red-600 to-orange-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    <div className="text-center">
                      <div className="text-6xl mb-2">👨‍💻</div>
                      <div className="text-2xl font-bold">FN</div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce">
                    ⚛️
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce delay-300">
                    🔧
                  </div>
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-xl animate-pulse">
                    🎓
                  </div>
                </div>
              </div>
              <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-200 dark:bg-red-800 rounded-full opacity-20 animate-float delay-1000"></div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 dark:border-slate-600">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">5+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Production Applications</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 dark:border-slate-600">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-3">CCNA</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Network Engineering</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 dark:border-slate-600">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">100+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Students Taught</div>
            </div>
          </div>

          {/* What Makes Me Different */}
          <section id="advantage" className="max-w-6xl mx-auto mt-32 mb-20">
            <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              What Makes Me Different as a Developer
            </h3>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
                    Most Developers
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Build applications without seeing how real users interact with them daily.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Most network engineers understand reliability but don't build user-facing applications.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></span>
                    I Combine Both
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-orange-600 font-semibold">Real User Feedback:</span> I see daily how users actually interact with applications, not just what analytics show.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      <span className="text-red-600 font-semibold">Network Engineering Mindset:</span> I build applications with enterprise-level reliability thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="max-w-6xl mx-auto text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Tech Stack & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: 'JavaScript', icon: '🟨' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'React', icon: '⚛️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Express', icon: '🚀' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Tailwind', icon: '💨' }
              ].map((tech) => (
                <div key={tech.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Certifications */}
          <section className="max-w-6xl mx-auto text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'CompTIA A+', icon: SiComptia, color: 'text-red-600' },
                { name: 'CompTIA Network+', icon: SiComptia, color: 'text-red-600' },
                { name: 'CompTIA Security+', icon: SiComptia, color: 'text-red-600' },
                { name: 'Cisco CCNA', icon: SiCisco, color: 'text-blue-600' },
                { name: 'Kubernetes KCNA', icon: SiKubernetes, color: 'text-blue-500' }
              ].map((cert) => (
                <div key={cert.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <cert.icon className={`text-4xl mb-3 mx-auto ${cert.color}`} />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-emerald-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
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
                    src="/delitweb-logo.jpg" 
                    alt="Del IT+Web Logo" 
                    width={96} 
                    height={96} 
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