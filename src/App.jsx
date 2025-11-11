import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import CursorFollower from './components/CursorFollower';
import Contact from './components/Contact';
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

 


  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gray-50 text-gray-900'
      }`}>
      {/* Animated Background Elements */}
      <FloatingParticles isDarkMode={isDarkMode}/>
      <CursorFollower mousePosition={mousePosition} isDarkMode={isDarkMode} />

      {/* Header Section */}
     <Header isDarkMode={isDarkMode} activeSection={activeSection} isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} toggleDarkMode={toggleDarkMode} setIsMenuOpen={setIsMenuOpen}/>

      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} isLoaded={isLoaded} scrollToSection={scrollToSection} />

      {/* About Section */}
      <About isDarkMode={isDarkMode} />
      {/* Projects Section */}
      <Projects isDarkMode={isDarkMode} projects={projects} />
      {/* Skills Section */}
       <Skills isDarkMode={isDarkMode} skills={skills} />
      {/* Contact Section */}
      <Contact isDarkMode={isDarkMode}/>
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;