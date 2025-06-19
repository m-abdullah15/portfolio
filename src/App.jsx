import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Mail, 
  Phone, 
  Github, 
  ExternalLink, 
  User, 
  Briefcase, 
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Check,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "CitrusInsightAI",
      subtitle: "Citrus Disease Detection System",
      description: "A machine learning powered citrus disease detection system that classifies leaf diseases in orange trees. Features an image analysis model, dashboard for scan history, and web interface for uploading and viewing results.",
      features: ["Machine Learning Integration", "User Dashboard", "Scan History", "Disease Solutions", "Image Analysis"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "Property Sales & Management System",
      subtitle: "Complete Real Estate Platform",
      description: "A comprehensive real estate website that allows users to list, browse, and manage property listings. Features include authentication, admin panel, and user-friendly interface for managing property operations.",
      features: ["User Authentication", "Property Search & Filtering", "Admin Dashboard", "Inquiry Management", "Listing Management"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Chat Application",
      subtitle: "Real-time Communication Platform",
      description: "A real-time web chat application using WebSockets. Enables user registration, login, direct messaging, and group chat features. Built with modern technologies for fast communication.",
      features: ["Real-time Messaging", "User Registration", "Group Chat", "Direct Messaging", "WebSocket Integration"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const skills = [
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 85 },
    { name: "MongoDB", level: 88 },
    { name: "Express.js", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Machine Learning", level: 80 }
  ];

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-float ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400/30 to-purple-400/30' 
                : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Interactive cursor follower
  const CursorFollower = () => (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transition: 'all 0.1s ease-out',
      }}
    >
      <div className={`w-5 h-5 rounded-full opacity-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
    </div>
  );

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Animated Background Elements */}
      <FloatingParticles />
      <CursorFollower />
      
      {/* Geometric Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20' 
            : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10'
        }`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-full blur-xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20' 
            : 'bg-gradient-to-r from-emerald-400/10 to-teal-400/10'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-40 left-20 w-40 h-40 rounded-full blur-xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20' 
            : 'bg-gradient-to-r from-purple-400/10 to-pink-400/10'
        }`} style={{ animationDelay: '4s' }}></div>
        <div className={`absolute bottom-20 right-10 w-28 h-28 rounded-full blur-xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-orange-400/20 to-red-400/20' 
            : 'bg-gradient-to-r from-orange-400/10 to-red-400/10'
        }`} style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gray-900/90 border-gray-700/50' 
          : 'bg-white/90 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Muhammad Abdullah
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? isDarkMode
                          ? 'bg-blue-900/50 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors ${
              isDarkMode 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? isDarkMode
                        ? 'bg-blue-900/50 text-blue-300'
                        : 'bg-blue-100 text-blue-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-16 min-h-screen flex items-center relative transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Muhammad Abdullah
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A passionate <span className="font-semibold text-blue-600">Web Developer</span> crafting 
                beautiful, functional, and user-centric digital experiences
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                  <ExternalLink className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex justify-center space-x-6">
                <a href="mailto:m.abdullah3042@gmail.com" className={`p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                }`}>
                  <Mail className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="tel:+923052686065" className={`p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                }`}>
                  <Phone className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="https://github.com/m-abdullah15" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                }`}>
                  <Github className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 relative transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating innovative web solutions that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' 
                  : 'bg-gradient-to-r from-blue-50 to-purple-50'
              }`}>
                <User className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Web Developer</h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I specialize in building complete web solutions, from front-end user interfaces to back-end APIs. 
                  My expertise spans across modern technologies including React.js, Node.js, and machine learning integration.
                </p>
              </div>

              <div className={`p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-emerald-900/50 to-teal-900/50' 
                  : 'bg-gradient-to-r from-emerald-50 to-teal-50'
              }`}>
                <Code className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Full-Stack Expertise</h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  With experience in both frontend and backend development, I create seamless digital experiences 
                  that are both visually appealing and functionally robust.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl shadow-lg border transform hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Location</span>
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pakistan</p>
              </div>

              <div className={`p-6 rounded-xl shadow-lg border transform hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="flex items-center mb-4">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Focus Areas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Full-Stack', 'Machine Learning'].map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-blue-900/50 text-blue-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 relative transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-end relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="text-white relative z-10">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`mb-4 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className={`flex items-center text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black'
                  }`}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 relative transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Technical Skills</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`p-6 rounded-xl transform hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{skill.name}</span>
                  <span className="text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className={`w-full rounded-full h-3 ${
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                }`}>
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 relative transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to work together? Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Email</h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Send me a message</p>
                <a
                  href="mailto:m.abdullah3042@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  m.abdullah3042@gmail.com
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            <div className="text-center group">
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Phone</h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Call me directly</p>
                <a
                  href="tel:+923052686065"
                  className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                >
                  +92 305 2686065
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            <div className="text-center group">
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Let's Chat</h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Start a conversation</p>
                <button
                  onClick={() => window.open('mailto:m.abdullah3042@gmail.com')}
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                >
                  Start Discussion
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 relative transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-900'
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
    </div>
  );
}

export default App;