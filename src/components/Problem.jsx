import React from 'react';
import { useTranslation } from 'react-i18next';
import './Problem.css';

const Problem = () => {
  const { t } = useTranslation();

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
          <h2 className="section-title">{t('problem.title')}</h2>
          <p className="problem-subtitle">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card reveal delay-1">
            <div className="problem-number">01</div>
            <h3>{t('problem.card1_title')}</h3>
            <p>{t('problem.card1_desc')}</p>
          </div>

          <div className="problem-card reveal delay-2">
            <div className="problem-number">02</div>
            <h3>{t('problem.card2_title')}</h3>
            <p>{t('problem.card2_desc')}</p>
          </div>

          <div className="problem-card reveal delay-3">
            <div className="problem-number">03</div>
            <h3>{t('problem.card3_title')}</h3>
            <p>{t('problem.card3_desc')}</p>
          </div>
        </div>

        <div className="problem-footer reveal delay-2">
          <a href="#services" onClick={handleScrollToServices} className="btn btn-primary">
            {t('problem.btn_solutions')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
