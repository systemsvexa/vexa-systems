import React from 'react';
import './Footer.css';
import vexaLogo from '../assets/vexa_logo_transparent.png';

const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>; // simple representation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col footer-col-brand reveal">
            <a href="#home" className="footer-logo">
              <img src={vexaLogo} alt="Vexa Logo" className="footer-logo-img" />
              <span className="footer-logo-text"><span className="logo-v">VEXA</span> SYSTEMS</span>
            </a>
            <p className="footer-desc">
              Impulsando negocios con soluciones de software innovadoras, 
              robustas y diseñadas a medida para el éxito en el mundo digital.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><InstagramIcon /></a>
              <a href="#" className="social-icon"><FacebookIcon /></a>
              <a href="#" className="social-icon"><WhatsAppIcon /></a>
            </div>
          </div>
          
          <div className="footer-col reveal delay-1">
            <h4>NAVEGACIÓN</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Quiénes Somos</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Portafolio</a></li>
            </ul>
          </div>
          
          <div className="footer-col reveal delay-2">
            <h4>AYUDA Y SOPORTE</h4>
            <ul>
              <li><a href="#">Políticas de Compra</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          </div>

          <div className="footer-col reveal delay-3">
            <h4>CONTACTO</h4>
            <ul>
              <li className="contact-li">
                <span className="contact-li-icon">📍</span> 
                Concepción del Uruguay, Entre Ríos, Argentina
              </li>
              <li className="contact-li">
                <span className="contact-li-icon">✉️</span> 
                vexasystems@gmail.com
              </li>
              <li className="contact-li">
                <span className="contact-li-icon">📞</span> 
                +54 9 11 1234-5678
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom reveal delay-1">
          <p>Copyright &copy; {new Date().getFullYear()} Vexa Systems. Todos los derechos reservados.</p>
          <div className="footer-developed">
            <span>DESARROLLADO POR</span>
            <img src={vexaLogo} alt="Vexa" className="footer-developed-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
