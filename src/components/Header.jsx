import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Rashed Zaman</h1>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="block hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="block hover:text-blue-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="block hover:text-blue-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="block hover:text-blue-600 transition-colors">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;