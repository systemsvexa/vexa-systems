import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
const UtensilsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>;
const PenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;

const servicesData = [
  {
    icon: <CartIcon />,
    title: 'E-commerce',
    target: 'Ideal para comercios que venden online.',
    description: 'Tiendas online optimizadas para vender más, con pagos integrados y una experiencia rápida y segura.'
  },
  {
    icon: <CalendarIcon />,
    title: 'Gestión de turnos',
    target: 'Ideal para clínicas, consultorios y profesionales.',
    description: 'Sistemas inteligentes para automatizar reservas, enviar recordatorios y organizar tu agenda sin esfuerzo.'
  },
  {
    icon: <PackageIcon />,
    title: 'Control de stock',
    target: 'Ideal para negocios con inventario.',
    description: 'Plataformas precisas para gestionar tus productos, proveedores y flujo de mercadería en tiempo real.'
  },
  {
    icon: <UtensilsIcon />,
    title: 'Sistemas para pedidos',
    target: 'Ideal para restaurantes y locales gastronómicos.',
    description: 'Aplicaciones web para recibir pedidos directos, menú digital QR y gestión ágil de cocina.'
  },
  {
    icon: <PenIcon />,
    title: 'Blogs',
    target: 'Ideal para creadores de contenido y marcas.',
    description: 'Sitios web autogestionables, optimizados para SEO y diseñados para posicionar tu contenido.'
  },
  {
    icon: <SettingsIcon />,
    title: 'Software a medida',
    target: 'Para empresas con procesos únicos.',
    description: 'Desarrollamos la herramienta exacta que tu modelo de negocio necesita para escalar sin límites.'
  }
];

const Services = () => {
  const { t } = useTranslation();
  const [progressPx, setProgressPx] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      let closestIndex = 0;
      let minDistance = Infinity;

      // Encontrar el ítem más cercano al centro de la pantalla
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Centro del ítem relativo al viewport
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - triggerPoint);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // Si la sección está muy abajo (aún no se llega), podemos dejar el índice en 0
      // o apagarlo, pero anclarlo al más cercano es perfecto para que el salto sea lógico.
      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Llamar un par de veces al inicio para asegurar que los elementos ya están renderizados
    handleScroll();
    setTimeout(handleScroll, 100);
    setTimeout(handleScroll, 500); // Un chequeo extra para carga de imágenes o fuentes

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cuando cambia el ítem activo, movemos la barra EXACTAMENTE a su centro
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el && timelineRef.current) {
      // En lugar de calcular el centro del ítem, buscamos el nodo exacto
      const nodeEl = el.querySelector('.timeline-node');
      
      if (nodeEl) {
        // Obtenemos la posición exacta del nodo relativa al contenedor de la línea
        const containerRect = timelineRef.current.getBoundingClientRect();
        const nodeRect = nodeEl.getBoundingClientRect();
        
        // Distancia desde el tope del contenedor hasta el centro del nodo
        const targetPx = (nodeRect.top - containerRect.top) + (nodeRect.height / 2);
        setProgressPx(targetPx);
      } else {
        // Fallback por si no encuentra el nodo
        const targetPx = el.offsetTop + (el.offsetHeight / 2);
        setProgressPx(targetPx);
      }
    }
  }, [activeIndex]);

  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    const target = document.getElementById('portfolio');
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top;
      const startTime = performance.now();
      const duration = 1200;

      const scrollAnimation = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startPosition + targetPosition * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      };
      requestAnimationFrame(scrollAnimation);
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header reveal">
          <h2 className="section-title">
            {t('services.title')}
          </h2>
          <p className="services-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-progress" style={{ height: `${progressPx}px` }}></div>
            <div className="timeline-glow" style={{ top: `${progressPx}px` }}>
              <div className="timeline-glow-inner"></div>
            </div>
          </div>

          {servicesData.map((service, index) => {
            const isActive = index === activeIndex;
            const keys = ['ecommerce', 'turnos', 'stock', 'pedidos', 'blogs', 'software'];
            const key = keys[index];

            return (
              <div 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isActive ? 'active' : ''}`} 
                key={index}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
              >
                <div className="timeline-node">
                  <div className="node-inner"></div>
                </div>
                
                <div className="timeline-content">
                  <span className="service-number">0{index + 1}</span>
                  <h3>{t(`services.${key}.title`)}</h3>
                  <p className="service-target">{t(`services.${key}.target`)}</p>
                  <p className="service-description">{t(`services.${key}.desc`)}</p>
                </div>
                
                <div className="timeline-visual">
                  <div className="visual-box">
                    {service.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-bridge reveal">
          <h2 className="bridge-title">{t('services.bridge_title')}</h2>
          <p className="bridge-text">
            {t('services.bridge_text')}
          </p>
          <a href="#portfolio" onClick={handleScrollToPortfolio} className="btn btn-primary">
            {t('services.btn_explore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
