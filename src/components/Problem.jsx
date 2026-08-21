import React from 'react';
import './Problem.css';

const Problem = () => {

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const target = document.getElementById('services');
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top - 76;
      const startTime = performance.now();
      const duration = 1200;

      const scrollAnimation = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = progress < 0.5 
          ? 4 * Math.pow(progress, 3) 
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
    <section id="problem" className="section problem-section">
      <div className="container">
        <div className="problem-header reveal">
          <h2 className="section-title">El crecimiento trae oportunidades. También nuevos desafíos.</h2>
          <p className="problem-subtitle">
            Cada cliente nuevo, cada pedido, cada turno o cada tarea suma complejidad. Cuando los procesos siguen siendo manuales, el crecimiento empieza a jugar en contra.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card reveal delay-1">
            <div className="problem-number">01</div>
            <h3>Tiempo</h3>
            <p>Encontrar lo que necesitás lleva más tiempo del que debería.</p>
          </div>

          <div className="problem-card reveal delay-2">
            <div className="problem-number">02</div>
            <h3>Trabajo repetitivo</h3>
            <p>Dedicás horas a tareas manuales que podrían automatizarse.</p>
          </div>

          <div className="problem-card reveal delay-3">
            <div className="problem-number">03</div>
            <h3>Falta de control</h3>
            <p>Cuesta saber qué pasa en el negocio cuando la información está desordenada.</p>
          </div>
        </div>

        <div className="problem-footer reveal delay-2">
          <a href="#services" onClick={handleScrollToServices} className="btn btn-primary">
            Ver nuestras soluciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
