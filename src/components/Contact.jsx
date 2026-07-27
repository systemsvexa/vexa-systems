import React from 'react';
import './Contact.css';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>;

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title reveal">Contáctanos</h2>

        <div className="contact-wrapper">
          <div className="contact-info reveal delay-1">
            <h3>Hablemos de tu próximo gran proyecto.</h3>
            <p>
              Estamos listos para transformar tus ideas en una realidad digital. Completa el formulario o utiliza nuestros canales de contacto directos.
            </p>

            <div className="contact-item">
              <div className="contact-icon"><MapPinIcon /></div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Ubicación</h4>
                <span style={{ color: 'var(--color-text-muted)' }}>Concepción del Uruguay, Entre Rios, Argentina</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><MailIcon /></div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                <span style={{ color: 'var(--color-text-muted)' }}>vexasystems@gmail.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><PhoneIcon /></div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Teléfono</h4>
                <span style={{ color: 'var(--color-text-muted)' }}>+54 9 11 1234-5678</span>
              </div>
            </div>
          </div>

          <div className="contact-form reveal delay-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Tu Nombre Completo" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Tu Correo Electrónico" required />
              </div>
              <div className="form-group">
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Selecciona el servicio que te interesa</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="turnos">Gestión de Turnos</option>
                  <option value="stock">Control de Stock</option>
                  <option value="gastronomia">Sistema de pedidos</option>
                  <option value="blog">Blog / página de presentación</option>
                  <option value="otro">Otro Desarrollo a Medida</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-input" placeholder="Cuéntanos más sobre tu proyecto..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
