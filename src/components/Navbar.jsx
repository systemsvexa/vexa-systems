import React, { useState, useEffect } from 'react';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to solid background as soon as we start scrolling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled || isMenuOpen ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={vexaLogo} alt="Vexa Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text"><span className="logo-v">VEXA</span> <span style={{fontWeight: 700, letterSpacing: '-0.02em'}}>SYSTEMS</span></span>
        </a>
        <div className="navbar-right">
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Inicio</a>
            <a href="#services" className="nav-link" onClick={closeMenu}>Servicios</a>
            <a href="#portfolio" className="nav-link" onClick={closeMenu}>Portafolio</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>Nosotros</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contacto</a>
          </div>
          
          <div className="navbar-controls">
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
