import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

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
            <a href="#home" className="nav-link" onClick={closeMenu}>{t('navbar.home')}</a>
            <a href="#services" className="nav-link" onClick={closeMenu}>{t('navbar.services')}</a>
            <a href="#portfolio" className="nav-link" onClick={closeMenu}>{t('navbar.portfolio')}</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>{t('navbar.about')}</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>{t('navbar.contact')}</a>
          </div>
          
          <div className="navbar-controls">
            <button className="lang-switcher" onClick={toggleLanguage} aria-label="Cambiar idioma">
              {i18n.language.startsWith('es') ? 'EN' : 'ES'}
            </button>
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
