import React, { useState } from 'react';
import './Contact.css';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>;

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.get('nombre').trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    const email = formData.get('email').trim();
    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Ingresa un correo válido (ej: nombre@ejemplo.com)';
    }

    if (!formData.get('servicio_interes')) {
      newErrors.servicio_interes = 'Por favor selecciona un servicio';
    }

    if (!formData.get('mensaje').trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Custom validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/systemsvexa@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title reveal">Contactanos</h2>

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
                <span style={{ color: 'var(--color-text-muted)' }}>systemsvexa@gmail.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><PhoneIcon /></div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Teléfono</h4>
                <span style={{ color: 'var(--color-text-muted)' }}>+54 9 3442 588921</span>
              </div>
            </div>
          </div>

          <div className="contact-form reveal delay-2">
            {status === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-large">✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
                  style={{ width: '100%', marginTop: '1.5rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="_subject" value="Nuevo mensaje de contacto desde la Web" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
                  <input type="text" name="nombre" className={`form-input ${errors.nombre ? 'has-error' : ''}`} placeholder="Tu Nombre Completo" />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="Tu Correo Electrónico"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <select name="servicio_interes" className={`form-input ${errors.servicio_interes ? 'has-error' : ''}`} defaultValue="">
                    <option value="" disabled>Selecciona el servicio que te interesa</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Gestión de Turnos">Gestión de Turnos</option>
                    <option value="Control de Stock">Control de Stock</option>
                    <option value="Sistema de pedidos">Sistema de pedidos</option>
                    <option value="Blog / página de presentación">Blog / página de presentación</option>
                    <option value="Otro Desarrollo a Medida">Otro Desarrollo a Medida</option>
                  </select>
                  {errors.servicio_interes && <span className="field-error">{errors.servicio_interes}</span>}
                </div>

                <div className="form-group">
                  <textarea name="mensaje" className={`form-input ${errors.mensaje ? 'has-error' : ''}`} placeholder="Contanos más sobre tu proyecto..."></textarea>
                  {errors.mensaje && <span className="field-error">{errors.mensaje}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#ff4d4f', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
