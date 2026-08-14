import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={vexaLogo} alt="Vexa Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text"><span className="logo-v">VEXA</span> <span style={{fontWeight: 700, letterSpacing: '-0.02em'}}>SYSTEMS</span></span>
        </a>
        <div className="navbar-links">
          <a href="#home" className="nav-link">{t('navbar.home')}</a>
          <a href="#services" className="nav-link">{t('navbar.services')}</a>
          <a href="#portfolio" className="nav-link">{t('navbar.portfolio')}</a>
          <a href="#about" className="nav-link">{t('navbar.about')}</a>
          <a href="#contact" className="nav-link">{t('navbar.contact')}</a>
          
          <button className="lang-switcher" onClick={toggleLanguage} aria-label="Cambiar idioma">
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </button>
        </div>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
