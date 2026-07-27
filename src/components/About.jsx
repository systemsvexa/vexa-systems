import React from 'react';
import './About.css';
import vexaLogo from '../assets/vexa_logo_transparent.png';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">Quiénes <span className="text-gradient">Somos</span></h2>

        <div className="about-content">
          <div className="about-image reveal delay-1">
            <div className="about-img-placeholder">
              <img src={vexaLogo} alt="Vexa Systems Logo" style={{ width: '90%', height: '90%', objectFit: 'contain', zIndex: 1, filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>

          <div className="about-text reveal delay-2">
            <h3>Innovación Tecnológica para tu Empresa</h3>
            <p>
              En Vexa Systems somos un equipo de ingenieros y diseñadores apasionados por crear soluciones de software que resuelven problemas reales. No solo escribimos código; construimos herramientas que escalan y optimizan los procesos de nuestros clientes.
            </p>
            <p>
              Nuestra filosofía se basa en entender profundamente la necesidad del negocio para luego aplicar la tecnología adecuada. Ya sea una plataforma de ecommerce de alto tráfico, un sistema de gestión interno, o una aplicación web compleja, entregamos calidad premium.
            </p>

            <div className="founders-list">
              <h4 className="founders-title">Fundadores</h4>
              <a href="mailto:valentinobenedetti9@gmail.com" className="founder-item reveal delay-1">
                <div className="founder-photo-placeholder"></div>
                <div className="founder-info">
                  <span className="founder-name">Valentino Benedetti</span>
                  <span className="founder-role">Analista de Sistemas</span>
                </div>
              </a>
              <a href="mailto:juannievas15@gmail.com" className="founder-item reveal delay-2">
                <div className="founder-photo-placeholder"></div>
                <div className="founder-info">
                  <span className="founder-name">Juan Nievas</span>
                  <span className="founder-role">Analista de Sistemas</span>
                </div>
              </a>
              <a href="mailto:juannsaenzz17@gmail.com" className="founder-item reveal delay-3">
                <div className="founder-photo-placeholder"></div>
                <div className="founder-info">
                  <span className="founder-name">Juan Saenz</span>
                  <span className="founder-role">Analista de Sistemas</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
