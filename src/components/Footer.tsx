import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Projects</span>
                </div>
                <div className="text-gray-300">
                  <div className="space-y-1 text-sm">
                    <a href="mailto:fidel@delitweb.co.za" className="hover:text-white transition-colors block">
                      fidel@delitweb.co.za
                    </a>
                    <a href="mailto:finiyid@gmail.com" className="hover:text-white transition-colors block">
                      finiyid@gmail.com
                    </a>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  <div>Specializing in:</div>
                  <div className="text-gray-300">Software • Hardware • Security • EduTech Solutions</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <div className="space-y-4">
                <div className="flex justify-center items-center space-x-4">
                  {/* Cisco Badge */}
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-sm">CISCO</span>
                  </div>
                  {/* CompTIA Badge */}
                  <div className="bg-red-500 p-3 rounded-lg">
                    <span className="text-white font-bold text-sm">CompTIA</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  {/* Linux Foundation Badge */}
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <span className="text-black font-bold text-sm">Linux Foundation</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Certified in Network Technology & Infrastructure
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="space-y-4">
                <div className="flex flex-col space-y-3">
                  <a href="https://github.com/niyidukunda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center justify-center md:justify-end space-x-2">
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/fidel-niyidukunda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center justify-center md:justify-end space-x-2">
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://wa.me/27677188232" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center justify-center md:justify-end space-x-2">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 mt-8 text-center">
            <p className="text-gray-300 mb-6">
              © 2025 Fidel Niyidukunda • Building reliable applications with real user insights
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-400 text-lg">Powered by</span>
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
  );
}