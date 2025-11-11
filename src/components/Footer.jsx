import React from "react";
import {Code, Mail,Phone,Github, ExternalLink,User,Briefcase,MessageCircle,ChevronDown,Menu,X,MapPin,Check,Sun,Moon} from 'lucide-react';
export default function Footer({ isDarkMode }) {
    return <footer className={`py-12 relative transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Muhammad Abdullah
            </h3>
            <p className="text-gray-400 mb-6">Web Developer • Full-Stack • Problem Solver</p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:m.abdullah3042@gmail.com" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a href="tel:+923052686065" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="https://github.com/m-abdullah15" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Muhammad Abdullah. Built with React.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
}