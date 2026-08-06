import React from 'react';
import './About.css';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import aboutImg from '../assets/about.jpeg';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">Sobre <span className="text-gradient">Nosotros</span></h2>

        <div className="about-content">
          <div className="about-text reveal delay-1">
            <h3>Nuestra Misión</h3>
            <p>
              En Vexa Systems somos un equipo de profesionales apasionados por crear soluciones de software que resuelven problemas reales. No solo escribimos código; construimos herramientas que escalan y optimizan los procesos de nuestros clientes.
            </p>
            <p>
              Nuestra filosofía se basa en entender profundamente la necesidad del negocio para luego aplicar la tecnología adecuada. Ya sea una plataforma de ecommerce, un sistema de gestión interno, o una aplicación web compleja, entregamos calidad premium.
            </p>
          </div>

          <div className="founders-list reveal delay-2" style={{ marginTop: 0 }}>
            <h4 className="founders-title">Fundadores</h4>
            <div className="founder-item">
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Valentino Benedetti</span>
                <span className="founder-role">Analista de Sistemas</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinobenedetti9@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> Enviar correo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <div className="founder-item">
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Juan Nievas</span>
                <span className="founder-role">Analista de Sistemas</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juannievas15@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> Enviar correo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <div className="founder-item">
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Juan Saenz</span>
                <span className="founder-role">Analista de Sistemas</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juannsaenzz17@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> Enviar correo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-photo-container reveal delay-3">
          <img src={aboutImg} alt="Equipo Vexa Systems" className="team-photo-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
