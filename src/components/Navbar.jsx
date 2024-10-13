import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 bg-gray-800 px-4'>
      {/* Logo Section */}
      <div className='flex items-center'>
      <h1 className='text-white text-xl font-semibold hidden md:block'>
          Harshavardhan Govindu
        </h1>
        
        {/* Abbreviated Name: Visible on small screens */}
        <h1 className='text-white text-xl font-semibold md:hidden'>
          Ghv061101
        </h1>
      </div>
      
      {/* Social Media Icons */}
      <div className='flex items-center space-x-4'>
        <a href="https://www.linkedin.com/in/harshavardhan-govindu-611152193/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className='text-white hover:text-blue-500 transition duration-300' size={24} />
        </a>
        <a href="https://github.com/ghv061101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className='text-white hover:text-gray-400 transition duration-300' size={24} />
        </a>
        <a href="https://www.instagram.com/_lyrics9106_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className='text-white hover:text-pink-500 transition duration-300' size={24} />
        </a>
        <a href="https://discord.com/channels/@harsha91061101" target="_blank" rel="noopener noreferrer" aria-label="Discord" data-tip="Discord">
          <FaDiscord className='text-white hover:text-indigo-500 transition duration-300' size={24} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
