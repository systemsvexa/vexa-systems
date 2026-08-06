import React, { useState, useEffect } from 'react';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is 100vh. We switch to solid background right before leaving it.
      if (window.scrollY > window.innerHeight - 80) {
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
          <span className="navbar-logo-text"><span className="logo-v">VEXA</span> <span style={{fontWeight: 700, letterSpacing: '-0.02em'}}>SYSTEMS</span></span>
        </a>
        <div className="navbar-links">
          <a href="#home" className="nav-link">Inicio</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#portfolio" className="nav-link">Portafolio</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
