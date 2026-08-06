import React, { useState, useEffect } from 'react';
import './Portfolio.css';

// Using the AI generated mockup images we copied earlier
import ecommerceImg from '../assets/ecommerce.png';
import turnosImg from '../assets/turn_management.png';
import restaurantImg from '../assets/restaurant.png';

const projects = [
  {
    title: 'E-commerce',
    category: 'Bloque Mundo',
    description: 'Página web completa para venta de productos marca LEGO.',
    image: ecommerceImg,
    gallery: [ecommerceImg, ecommerceImg, ecommerceImg] // Simulated gallery
  },
  {
    title: 'Gestión de Turnos',
    category: 'Centro Quiropráctico Nicolás',
    description: 'Sistema integral de administración de turnos e historial de pacientes.',
    image: turnosImg,
    gallery: [turnosImg, turnosImg, turnosImg] // Simulated gallery
  },
  {
    title: 'FoodFlow Ordering',
    category: 'App Gastronómica',
    description: 'Menú digital interactivo y sistema de gestión de pedidos para cadena de restaurantes.',
    image: restaurantImg,
    gallery: [restaurantImg, restaurantImg, restaurantImg] // Simulated gallery
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling in background
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeProject) closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="portfolio-header reveal">
          <h2 className="section-title">Ideas convertidas en soluciones reales.</h2>
          <p className="portfolio-subtitle">
            Descubrí algunos de los proyectos que desarrollamos para empresas y profesionales, adaptados a las necesidades de cada negocio.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className={`portfolio-card reveal delay-${(index % 3) + 1}`} key={index}>
              <div
                className="portfolio-image-wrapper"
                onClick={() => openModal(project)}
                style={{ cursor: 'pointer' }}
                title="Ver galería"
              >
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-image-overlay">
                  <span>Ver galería +</span>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <a
                  href="#portfolio"
                  className="portfolio-link"
                  onClick={(e) => { e.preventDefault(); openModal(project); }}
                >
                  Ver proyecto &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeProject && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-gallery-main">
              <img
                src={activeProject.gallery[activeImageIndex]}
                alt={`${activeProject.title} vista ${activeImageIndex + 1}`}
              />
            </div>
            <div className="modal-gallery-thumbnails">
              {activeProject.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`modal-thumbnail ${idx === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} />
                </div>
              ))}
            </div>
            <div className="modal-info">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
