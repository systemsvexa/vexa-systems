import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import vexaLogo from '../assets/vexa_logo_transparent.png';
import aboutImg from '../assets/about.jpeg';
import imgValentino from '../assets/valentino_benedetti.png';
import imgSaenz from '../assets/juan_saenz.png';
import imgNievas from '../assets/juan_nievas.png';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;

const About = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">{t('about.title')}</h2>

        <div className="about-text-center reveal delay-1">
          <h3>{t('about.mission_title')}</h3>
          <p>{t('about.mission_p1')}</p>
          <p>{t('about.mission_p2')}</p>
        </div>

        <div className="about-content">
          <div className="team-photo-container reveal delay-2">
            <div className={`team-photo-wrapper ${hoveredFounder ? 'has-hover' : ''}`}>
              <img src={aboutImg} alt="Equipo Vexa Systems" className="team-photo-img base-img" />
              
              {/* Imágenes resaltadas */}
              <img 
                src={imgValentino} 
                alt="Valentino destacado" 
                className={`team-photo-img highlight-img ${hoveredFounder === 'benedetti' ? 'active' : ''}`} 
              />
              <img 
                src={imgSaenz} 
                alt="Juan Saenz destacado" 
                className={`team-photo-img highlight-img ${hoveredFounder === 'saenz' ? 'active' : ''}`} 
              />
              <img 
                src={imgNievas} 
                alt="Juan Nievas destacado" 
                className={`team-photo-img highlight-img ${hoveredFounder === 'nievas' ? 'active' : ''}`} 
              />
            </div>
          </div>

          <div className="founders-list reveal delay-3" style={{ marginTop: 0 }}>
            <h4 className="founders-title">{t('about.founders_title')}</h4>
            <div 
              className="founder-item"
              onMouseEnter={() => setHoveredFounder('benedetti')}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Valentino Benedetti</span>
                <span className="founder-role">{t('about.role_analyst')}</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinobenedetti9@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> {t('about.send_email')}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <div 
              className="founder-item"
              onMouseEnter={() => setHoveredFounder('nievas')}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Juan Nievas</span>
                <span className="founder-role">{t('about.role_analyst')}</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juannievas15@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> {t('about.send_email')}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <div 
              className="founder-item"
              onMouseEnter={() => setHoveredFounder('saenz')}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              <div className="founder-photo-placeholder"></div>
              <div className="founder-info">
                <span className="founder-name">Juan Saenz</span>
                <span className="founder-role">{t('about.role_analyst')}</span>
              </div>
              <div className="founder-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juannsaenzz17@gmail.com" target="_blank" rel="noopener noreferrer" className="founder-mail-btn">
                  <MailIcon /> {t('about.send_email')}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="founder-linkedin-btn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
