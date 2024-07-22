import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <div className="header-container">
    <header className={`header ${isOpen ? 'open-header' : ''}`}>
        <div className={`logo ${isOpen ? 'open-logo' : ''}`}></div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home"><Link to="home" smooth={true} duration={800} onClick={closeMenu}>Home</Link></a></li>
            <li><a href="#about"><Link to="about" smooth={true} duration={800} onClick={closeMenu}>About</Link></a></li>
            <li><a href="#projects"><Link to="projects" smooth={true} duration={800} onClick={closeMenu}>Projects</Link></a></li>
            <li><a href="#contact"><Link to="contact" smooth={true} duration={800} onClick={closeMenu}>Contact</Link></a></li>
          </ul>
        </nav>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  )
}
