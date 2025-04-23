import React from 'react';
import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Brave Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-gray-800">Brave</span>
        </a>
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-red-600 transition">Home</a>
          <a href="#features" className="hover:text-red-600 transition">Features</a>
          <a href="#video" className="hover:text-red-600 transition">Video</a>
          <a href="#faq" className="hover:text-red-600 transition">FAQ</a>
          <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          <a href="#download" className="hover:text-red-600 transition">Download</a>
        </nav>
      </div>
    </header> )
};

export default Header;
