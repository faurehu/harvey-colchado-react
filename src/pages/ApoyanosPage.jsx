import React, { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ApoyanosForm() {
  const [expandedPropuesta, setExpandedPropuesta] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const propuestas = [
    {
      id: 1,
      icon: '/images/propuestas/icons/liderazgo.svg',
      titulo: 'VOLUNTARIO/A EN ESTRATEGIA Y CONTENIDOS DIGITALES',
      detalles: [
        {
          subtitulo: '¿De qué se trata este voluntariado?',
          contenido: 'Buscamos personas creativas, comprometidas y con ganas de aprender que quieran sumarse al equipo digital de la campaña de Harvey Colchado 2026 para ayudarnos a transformar entrevistas, discursos y actividades en contenidos breves, dinámicos y atractivos para redes sociales, llevando el mensaje político de la campaña a más personas de forma clara, cercana y creativa.'
        },
        {
          subtitulo: '¿Qué harás?',
          contenido: '• Editar y adaptar clips cortos para Reels, TikTok y otras plataformas digitales.\n• Escribir copys y descripciones que conecten, enganchen e inviten a interactuar.\n• Apoyar en la planificación y organización de contenidos para redes sociales.\n• Monitorear mensajes, comentarios e interacciones en redes sociales, alertando sobre tendencias, consultas o riesgos comunicacionales.\n• Coordinar con el equipo de comunicación para mejorar continuamente los contenidos.'
        },
        {
          subtitulo: '¿Qué buscamos en ti?',
          contenido: '• Conocimientos básicos o intermedios en edición de video (CapCut, Premiere u otros).\n• Interés por la comunicación, la política y el impacto social.\n• Ganas de aprender, proponer ideas y trabajar en equipo.\n• Buena redacción y sensibilidad para contar historias en formatos digitales.\n• Experiencia previa en creación de contenidos (deseable, no excluyente).\n• Conocimientos en marketing digital o redes sociales (deseable).'
        },
        {
          subtitulo: '¿Qué ofrecemos?',
          contenido: '• La oportunidad de ser parte activa de una campaña política real y de impacto nacional.\n• Aprendizaje práctico en comunicación política y estrategia digital.\n• Un espacio para proponer, crear y crecer.'
        }
      ]
    },
    {
      id: 2,
      icon: '/images/propuestas/icons/policia.svg',
      titulo: 'VOLUNTARIO/A ENCUESTADOR/A',
      detalles: [
        {
          subtitulo: 'Subtítulo 2',
          contenido: 'Contenido de la segunda propuesta.'
        }
      ]
    }
  ];

  const toggleDetalle = (index) => {
    setExpandedPropuesta(expandedPropuesta === index ? null : index);
  };

  const handleVoluntarioSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // In development mode, always show success
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setSubmitSuccess(true);
        e.target.reset();
        setIsSubmitting(false);
      }, 1000); // Simulate network delay
      return;
    }

    if (!executeRecaptcha) {
      alert('reCAPTCHA no está listo. Por favor, recarga la página.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Execute reCAPTCHA v3
      const captchaToken = await executeRecaptcha('submit_volunteer');

      const formData = {
        captchaToken,
        nombres: e.target[0].value,
        apellidos: e.target[1].value,
        dni: e.target[2].value,
        celular: e.target[3].value,
        email: e.target[4].value,
        ayuda: e.target[5].value
      };

      const response = await fetch('/api/submit-volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        e.target.reset();
      } else {
        console.error('Server error response:', data);
        const errorMsg = data.details ? `Error: ${data.error}\nDetalles: ${data.details}` : `Error: ${data.error}`;
        alert(errorMsg);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Video Hero Section - Únete a la campaña */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/images/apoyanos/harvey-jovenes.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        {/* Title */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '48px', margin: 0 }}>Únete a la campaña</h2>
        </div>
      </div>

      {/* Form Section */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <h2>Involúcrate en lograr este cambio</h2>
          <div className="apoyo-content">
            <p>El cambio no se construye en soledad, se construye con personas comprometidas por un Perú más seguro. Si quieres participar activamente, aportar tu tiempo y tu talento, y ser parte de esta campaña, déjanos tus datos y cuéntanos en qué te gustaría colaborar: muy pronto nos pondremos en contacto contigo.</p>
            <p>Aquí te contamos en qué perfiles puedes sumarte:</p>

            <div className="propuestas-grid" style={{ marginBottom: '40px' }}>
              {propuestas.map((propuesta, index) => (
                <React.Fragment key={propuesta.id}>
                  <div className="propuesta-card">
                    <div className="propuesta-card-content">
                      <div className="propuesta-icon">
                        <img src={propuesta.icon} alt={propuesta.titulo} />
                      </div>
                      <div className="propuesta-text">
                        <h3>{propuesta.titulo}</h3>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={`propuesta-link ${expandedPropuesta === index ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDetalle(index);
                      }}
                    >
                      +
                    </a>
                  </div>
                  <div
                    id={`detalle-${propuesta.id}`}
                    className={`propuesta-detalle-expandible ${expandedPropuesta === index ? 'active' : ''}`}
                  >
                    {propuesta.detalles.map((detalle, detalleIndex) => (
                      <div key={detalleIndex}>
                        <h4>+ {detalle.subtitulo}</h4>
                        <p>{detalle.contenido}</p>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {submitSuccess ? (
              <div className="success-message" style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                margin: '20px 0'
              }}>
                <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>¡Gracias por tu interés en ser voluntario!</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'white', textAlign: 'center' }}>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="apoyo-form" onSubmit={handleVoluntarioSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="NOMBRES COMPLETOS"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, completa este campo.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="APELLIDOS COMPLETOS"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, completa este campo.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row form-row-half">
                  <input
                    type="text"
                    placeholder="DNI"
                    pattern="[0-9]{8}"
                    maxLength="8"
                    required
                    onInvalid={(e) => {
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity('Por favor, completa este campo.');
                      } else if (e.target.validity.patternMismatch) {
                        e.target.setCustomValidity('El DNI debe tener exactamente 8 dígitos numéricos.');
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      e.target.setCustomValidity('');
                    }}
                  />
                  <input
                    type="text"
                    placeholder="NÚMERO CELULAR"
                    pattern="[0-9]{9}"
                    maxLength="9"
                    required
                    onInvalid={(e) => {
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity('Por favor, completa este campo.');
                      } else if (e.target.validity.patternMismatch) {
                        e.target.setCustomValidity('El número celular debe tener 9 dígitos numéricos.');
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      e.target.setCustomValidity('');
                    }}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    placeholder="CORREO ELECTRÓNICO"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, ingresa un correo electrónico válido.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row">
                  <textarea
                    placeholder="¿EN QUÉ PUEDES AYUDAR?"
                    rows="4"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, completa este campo.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.5 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ME APUNTO'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ApoyanosPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY"}>
      <ApoyanosForm />
    </GoogleReCaptchaProvider>
  );
}

export default ApoyanosPage;
