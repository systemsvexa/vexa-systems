import React, { useState, useEffect } from 'react';
import './Portfolio.css';

import bm01 from '../assets/bloquemundo_01.png';
import bm02 from '../assets/bloquemundo_02.png';
import bm03 from '../assets/bloquemundo_03.png';
import bm04 from '../assets/bloquemundo_04.png';
import bm05 from '../assets/bloquemundo_05.png';
import bm06 from '../assets/bloquemundo_06.png';
import bm07 from '../assets/bloquemundo_07.png';
import bm08 from '../assets/bloquemundo_08.png';

import admin01 from '../assets/admin_01.png';
import admin02 from '../assets/admin_02.png';
import admin03 from '../assets/admin_03.png';
import admin04 from '../assets/admin_04.png';
import admin05 from '../assets/admin_05.png';
import admin06 from '../assets/admin_06.png';

import turnos01 from '../assets/turnos_01.png';
import turnos02 from '../assets/turnos_02.png';
import turnos03 from '../assets/turnos_03.png';
import turnos04 from '../assets/turnos_04.png';
import turnos05 from '../assets/turnos_05.png';

const projects = [
  {
    title: 'E-commerce',
    category: 'Bloque Mundo',
    description: 'Página web para venta de productos, con carrito de compras, pasarela de pagos y sección favoritos.',
    image: bm01,
    gallery: [bm01, bm02, bm03, bm04, bm05, bm06, bm07, bm08],
    link: 'https://bloquemundo.vercel.app/'
  },
  {
    title: 'Gestión de Turnos',
    category: 'Centro Quiropráctico Nicolás',
    description: 'Sistema integral de administración de turnos y fichas de pacientes.',
    image: turnos01,
    gallery: [turnos01, turnos02, turnos03, turnos04, turnos05]
  },
  {
    title: 'Administración completa para ventas',
    category: 'Bloque Mundo',
    description: 'Sistema de gestión de productos, ventas, envíos y clientes.',
    image: admin01,
    gallery: [admin01, admin02, admin03, admin04, admin05, admin06]
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeProject) {
      setActiveImageIndex((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeProject) {
      setActiveImageIndex((prev) => (prev === 0 ? activeProject.gallery.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link"
                  >
                    Ver proyecto &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-gallery-main">
              {activeProject.gallery.length > 1 && (
                <button className="gallery-nav-btn prev" onClick={prevImage}>&#10094;</button>
              )}
              <img
                src={activeProject.gallery[activeImageIndex]}
                alt={`${activeProject.title} vista ${activeImageIndex + 1}`}
              />
              {activeProject.gallery.length > 1 && (
                <button className="gallery-nav-btn next" onClick={nextImage}>&#10095;</button>
              )}

              {activeProject.gallery.length > 1 && (
                <div className="gallery-dots">
                  {activeProject.gallery.map((_, idx) => (
                    <span
                      key={idx}
                      className={`gallery-dot ${idx === activeImageIndex ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                    />
                  ))}
                </div>
              )}
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
