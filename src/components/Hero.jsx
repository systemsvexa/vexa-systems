import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const target = document.getElementById('problem');
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top;
      const startTime = performance.now();
      const duration = 1200; // 1.2 seconds for a slow, cinematic scroll

      const scrollAnimation = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function: easeInOutCubic for very smooth start and end
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
    <section id="home" className="hero">
      {/* Background Ambient Elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          <div className="hero-badge">
            Digitalizamos y potenciamos tu negocio
          </div>
          
          <h1 className="hero-title">
            <span className="typewriter-text">
              <span style={{color: 'var(--color-brand-blue)'}}>VEXA</span> <span style={{color: 'white', fontWeight: 700, letterSpacing: '-0.02em'}}>SYSTEMS</span>
            </span>
          </h1>
          
          <div className="hero-buttons">
            <a href="#problem" onClick={handleScrollDown} className="btn btn-primary btn-glow">
              Descubrir más 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bounce-arrow" style={{ marginLeft: '8px' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
