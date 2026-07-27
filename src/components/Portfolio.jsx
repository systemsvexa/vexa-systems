import React from 'react';
import './Portfolio.css';

// Using the AI generated mockup images we copied earlier
import ecommerceImg from '../assets/ecommerce.png';
import turnosImg from '../assets/turn_management.png';
import restaurantImg from '../assets/restaurant.png';

const projects = [
  {
    title: 'E-commerce LEGOS',
    category: 'E-commerce B2B',
    image: ecommerceImg
  },
  {
    title: 'MedSchedule Plus',
    category: 'Gestión de Turnos',
    image: turnosImg
  },
  {
    title: 'FoodFlow Ordering',
    category: 'App Gastronómica',
    image: restaurantImg
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title reveal">Nuestros <span className="text-gradient">Trabajos</span></h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className={`portfolio-item reveal delay-${(index % 3) + 1}`} key={index}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
