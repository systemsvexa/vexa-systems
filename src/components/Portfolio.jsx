import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="portfolio-subtitle">
            {t('portfolio.subtitle')}
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
                  <span>{t('portfolio.view_gallery')}</span>
                </div>
                <div className="mobile-gallery-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>1 / {project.gallery.length}</span>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{index === 0 ? 'E-commerce' : index === 1 ? t('portfolio.projects.turnos_title') : t('portfolio.projects.admin_title')}</h3>
                <p className="portfolio-description">
                  {index === 0 ? t('portfolio.projects.bm_desc') : index === 1 ? t('portfolio.projects.turnos_desc') : t('portfolio.projects.admin_desc')}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link"
                  >
                    {t('portfolio.view_project')} &rarr;
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
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-gallery-main">
              {activeProject.gallery.length > 1 && (
                <button className="gallery-nav-btn prev" onClick={prevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}
              <img
                src={activeProject.gallery[activeImageIndex]}
                alt={`${activeProject.title} vista ${activeImageIndex + 1}`}
              />
              {activeProject.gallery.length > 1 && (
                <button className="gallery-nav-btn next" onClick={nextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
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
              <h3>{activeProject.id === 2 || activeProject.title === 'Administración completa para ventas' ? t('portfolio.projects.admin_title') : activeProject.title === 'Gestión de Turnos' ? t('portfolio.projects.turnos_title') : activeProject.title}</h3>
              <p>{activeProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
