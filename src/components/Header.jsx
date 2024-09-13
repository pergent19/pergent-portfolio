import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css'

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
            <li><Link to="home" smooth={true} duration={800} onClick={closeMenu}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={800} onClick={closeMenu}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={800} onClick={closeMenu}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={800} onClick={closeMenu}>Contact</Link></li>
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
