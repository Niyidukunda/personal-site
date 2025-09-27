// Backup of working version
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Headshot Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              FN
            </div>
          </div>

          {/* Strategic Positioning Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fidel Niyidukunda
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Full-Stack Developer & Network Engineer
          </h2>

          {/* Value Proposition */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build reliable web applications with enterprise-level thinking while teaching coding to real students gives me unique user experience insights most developers never get.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Key Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Production Applications</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">CCNA</div>
              <div className="text-gray-600 dark:text-gray-400">Network Engineering</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Taught</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/niyidukunda" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/fidel-niyidukunda" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:fidel@delitweb.co.za" className="hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Fidel Niyidukunda. Building reliable applications with real user insights.
          </p>
        </div>
      </footer>
    </div>
  );
}