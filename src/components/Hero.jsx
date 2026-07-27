import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle animate-fade-in">Transformamos Ideas en Software</span>
          <h1 className="hero-title animate-fade-in">
            Soluciones Digitales <br />
            <span className="text-gradient">A Medida</span>
          </h1>
          <p className="hero-description animate-fade-in">
            En Vexa Systems creamos ecosistemas de software robustos, escalables y 
            diseñados para potenciar tu negocio. Desde E-commerce hasta sistemas complejos de gestión.
          </p>
          <div className="hero-buttons animate-fade-in">
            <a href="#contact" className="btn btn-primary">Iniciar Proyecto</a>
            <a href="#portfolio" className="btn btn-outline">Ver Trabajos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
