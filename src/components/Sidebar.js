import React from 'react';
import logo from '../assets/webdaddy-final-logo.png';

const Sidebar = ({ scrollToPage }) => {
  const handleClick = (e, pageNumber) => {
    e.preventDefault();
    scrollToPage(pageNumber);
  };

  return (
    <div className="sidebar fixed top-0 left-0 h-full bg-[#333333] z-20 flex flex-col items-center py-4 space-y-4 w-15">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-15 h-15 flex items-center justify-center">
          <img src={logo} alt="W" className="cursor-pointer w-full h-full object-contain" onClick={(e) => handleClick(e, 'home')}/>
        </div>
      </div>
      <a href="/" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'home')}>H</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/about" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'about')}>A</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/team" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'last')}>T</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/services" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'services')}>S</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/portfolio" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'portfolio')}>P</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/blog" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'blog')}>B</a>
      <div className="w-1.5 h-1.5 bg-[#26d4b4] rounded-full"></div>
      <a href="/contact" className="text-white hover:text-gray-300 sidebaricon fontmycustom" onClick={(e) => handleClick(e, 'last-vertical')}>C</a>
    </div>
  );
};

export default Sidebar;