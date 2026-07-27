import React, { useState, useEffect } from 'react';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={vexaLogo} alt="Vexa Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text"><span className="logo-v">VEXA</span> SYSTEMS</span>
        </a>
        <div className="navbar-links">
          <a href="#home" className="nav-link">Inicio</a>
          <a href="#about" className="nav-link">Quiénes Somos</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#portfolio" className="nav-link">Portafolio</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
