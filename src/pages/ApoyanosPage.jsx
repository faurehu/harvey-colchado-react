import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ApoyanosForm() {
  const [expandedPropuesta, setExpandedPropuesta] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [volunteerType, setVolunteerType] = useState('');
  const [otrosDescription, setOtrosDescription] = useState('');
  const [distrito, setDistrito] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const distritosLima = [
    'Ancón', 'Ate', 'Barranco', 'Breña', 'Carabayllo', 'Chaclacayo', 'Chorrillos',
    'Cieneguilla', 'Comas', 'El Agustino', 'Independencia', 'Jesús María', 'La Molina',
    'La Victoria', 'Lima', 'Lince', 'Los Olivos', 'Lurigancho', 'Lurín', 'Magdalena del Mar',
    'Miraflores', 'Pachacámac', 'Pucusana', 'Pueblo Libre', 'Puente Piedra', 'Punta Hermosa',
    'Punta Negra', 'Rímac', 'San Bartolo', 'San Borja', 'San Isidro', 'San Juan de Lurigancho',
    'San Juan de Miraflores', 'San Luis', 'San Martín de Porres', 'San Miguel', 'Santa Anita',
    'Santa María del Mar', 'Santa Rosa', 'Santiago de Surco', 'Surquillo', 'Villa El Salvador',
    'Villa María del Triunfo'
  ];

  const propuestas = [
    {
      id: 1,
      icon: '/images/apoyanos/editor.png',
      titulo: 'VOLUNTARIO/A EN CONTENIDOS DIGITALES',
      detalles: [
        {
          subtitulo: '¿De qué se trata este voluntariado?',
          contenido: 'Buscamos personas creativas, comprometidas y con ganas de aprender que quieran sumarse al equipo digital de la campaña de Harvey Colchado 2026 para ayudarnos a transformar entrevistas, discursos y actividades en contenidos breves, dinámicos y atractivos para redes sociales, llevando el mensaje político de la campaña a más personas de forma clara, cercana y creativa.'
        },
        {
          subtitulo: '¿Qué harás?',
          contenido: [
            'Editar y adaptar clips cortos para Reels, TikTok y otras plataformas digitales.',
            'Escribir copys y descripciones que conecten, enganchen e inviten a interactuar.',
            'Apoyar en la planificación y organización de contenidos para redes sociales.',
            'Monitorear mensajes, comentarios e interacciones en redes sociales, alertando sobre tendencias, consultas o riesgos comunicacionales.',
            'Coordinar con el equipo de comunicación para mejorar continuamente los contenidos.'
          ]
        },
        {
          subtitulo: '¿Qué buscamos en ti?',
          contenido: [
            'Conocimientos básicos o intermedios en edición de video (CapCut, Premiere u otros).',
            'Interés por la comunicación, la política y el impacto social.',
            'Ganas de aprender, proponer ideas y trabajar en equipo.',
            'Buena redacción y sensibilidad para contar historias en formatos digitales.',
            'Experiencia previa en creación de contenidos (deseable, no excluyente).',
            'Conocimientos en marketing digital o redes sociales (deseable).'
          ]
        },
        {
          subtitulo: '¿Qué ofrecemos?',
          contenido: [
            'La oportunidad de ser parte activa de una campaña política real y de impacto nacional.',
            'Aprendizaje práctico en comunicación política y estrategia digital.',
            'Un espacio para proponer, crear y crecer.'
          ]
        }
      ]
    },
    {
      id: 2,
      icon: '/images/apoyanos/encuestador.png',
      titulo: 'VOLUNTARIO/A EN APOYO TERRITORIAL',
      detalles: [
        {
          subtitulo: '¿De qué se trata este voluntariado?',
          contenido: 'Buscamos personas comprometidas con la democracia y el cambio que quieran ser parte fundamental de nuestra campaña en el territorio. Como voluntario/a en apoyo territorial, serás clave para conectar la campaña con las comunidades, organizando actividades, identificando oportunidades de contacto con la ciudadanía, construyendo redes locales y recogiendo información directa sobre las necesidades y expectativas de la población.'
        },
        {
          subtitulo: '¿Qué harás?',
          contenido: [
            'Apoyar en la organización de eventos, actividades y encuentros comunitarios en tu distrito o zona.',
            'Prospectar y proponer lugares estratégicos para visitas, charlas o actividades de la campaña.',
            'Construir y fortalecer redes locales con líderes vecinales, organizaciones comunitarias y ciudadanos comprometidos.',
            'Aplicar encuestas presenciales a ciudadanos en diferentes distritos y sectores.',
            'Recoger de forma objetiva las opiniones, preocupaciones y expectativas de la población.',
            'Registrar información de manera clara y ordenada para su posterior análisis.',
            'Coordinarte con el equipo de campo para cumplir los objetivos de la campaña en territorio.',
            'Representar los valores de la campaña con respeto, ética y profesionalismo.'
          ]
        },
        {
          subtitulo: '¿Qué buscamos en ti?',
          contenido: [
            'Actitud proactiva, responsable y respetuosa en el trato con las personas.',
            'Disponibilidad para salir a terreno (fines de semana y/o entre semana).',
            'Habilidades de comunicación y capacidad para conectar con personas de diferentes sectores.',
            'Capacidad para escuchar sin prejuicios y registrar información con precisión.',
            'Iniciativa para identificar oportunidades y proponer ideas para fortalecer la presencia territorial.',
            'Compromiso con los valores democráticos y el trabajo en equipo.',
            'Conocimiento de tu distrito o comunidad local (deseable).',
            'Experiencia en organización comunitaria, trabajo de campo o gestión de eventos (deseable, no excluyente).'
          ]
        },
        {
          subtitulo: '¿Qué ofrecemos?',
          contenido: [
            'Formación en trabajo territorial, organización comunitaria y técnicas de encuesta.',
            'La oportunidad de ser parte activa del proceso real de una campaña política nacional.',
            'Contacto directo con la ciudadanía y experiencia práctica en organización de eventos y construcción de redes.',
            'Desarrollo de habilidades en liderazgo comunitario, comunicación política y trabajo en equipo.',
            'Certificado de participación como voluntario/a en la campaña Harvey Colchado 2026.',
            'Un espacio de aprendizaje, crecimiento personal y compromiso cívico.'
          ]
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

    // Construct the ayuda field based on volunteer type
    let ayudaValue;
    if (volunteerType === 'contenidos') {
      ayudaValue = 'Contenidos digitales';
    } else if (volunteerType === 'territorial') {
      ayudaValue = 'Apoyo territorial';
    } else if (volunteerType === 'otros') {
      ayudaValue = `Otros: ${otrosDescription}`;
    }

    // In development mode, always show success
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setSubmitSuccess(true);
        e.target.reset();
        setVolunteerType('');
        setOtrosDescription('');
        setDistrito('');
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
        nombres: e.target.nombres.value,
        apellidos: e.target.apellidos.value,
        dni: e.target.dni.value,
        celular: e.target.celular.value,
        email: e.target.email.value,
        distrito: distrito,
        ayuda: ayudaValue
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
        setVolunteerType('');
        setOtrosDescription('');
        setDistrito('');
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
      <Helmet>
        <title>Únete a la Campaña - Harvey Colchado 2026 | Voluntarios</title>
        <meta name="description" content="Sé parte del cambio. Únete como voluntario a la campaña de Harvey Colchado. Contenidos digitales, apoyo territorial y más formas de colaborar para lograr un Perú más seguro." />
        <meta name="keywords" content="voluntarios Harvey Colchado, únete campaña 2026, apoyo territorial, contenidos digitales, voluntariado político Perú" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/apoyanos" />
        <meta property="og:title" content="Únete a la Campaña - Harvey Colchado 2026" />
        <meta property="og:description" content="Sé parte del cambio. Únete como voluntario a la campaña de Harvey Colchado para un Perú más seguro." />
        <meta property="og:image" content="https://harveycolchado.com.pe/images/apoyanos/harvey-short.mp4" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/apoyanos" />
        <meta property="twitter:title" content="Únete a la Campaña - Harvey Colchado 2026" />
        <meta property="twitter:description" content="Sé parte del cambio. Únete como voluntario a la campaña de Harvey Colchado." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/apoyanos" />
      </Helmet>

      {/* Video Hero Section - Únete a la campaña */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            zIndex: 0
          }}
        >
          <source src="/images/apoyanos/harvey-short.mp4" type="video/mp4" />
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
            <p>Aquí te contamos en qué perfiles puedes sumarte. Pero si ninguno de estos calza exactamente contigo, ¡igual regístrate y cuéntanos cómo quieres ayudar!</p>

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
                    <button
                      type="button"
                      className={`propuesta-link ${expandedPropuesta === index ? 'active' : ''}`}
                      onClick={() => toggleDetalle(index)}
                      style={{ border: 'none', background: 'none', padding: 0 }}
                    >
                      +
                    </button>
                  </div>
                  <div
                    id={`detalle-${propuesta.id}`}
                    className={`propuesta-detalle-expandible ${expandedPropuesta === index ? 'active' : ''}`}
                  >
                    {propuesta.detalles.map((detalle, detalleIndex) => (
                      <div key={detalleIndex}>
                        <h4>+ {detalle.subtitulo}</h4>
                        {Array.isArray(detalle.contenido) ? (
                          <ul>
                            {detalle.contenido.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{detalle.contenido}</p>
                        )}
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
                    name="nombres"
                    placeholder="NOMBRES COMPLETOS"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, completa este campo.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="APELLIDOS COMPLETOS"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, completa este campo.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row form-row-half">
                  <input
                    type="text"
                    name="dni"
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
                    name="celular"
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
                    name="email"
                    placeholder="CORREO ELECTRÓNICO"
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, ingresa un correo electrónico válido.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                <div className="form-row">
                  <select
                    name="distrito"
                    value={distrito}
                    onChange={(e) => setDistrito(e.target.value)}
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Por favor, selecciona tu distrito.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '14px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '4px',
                      backgroundColor: 'white',
                      color: distrito ? 'var(--azul-principal)' : '#999',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" disabled>DISTRITO DE LIMA DONDE VIVES</option>
                    {distritosLima.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600', color: 'var(--azul-principal)', fontSize: '14px' }}>¿EN QUÉ QUIERES AYUDAR?</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--azul-principal)', fontSize: '15px' }}>
                      <input
                        type="radio"
                        name="volunteerType"
                        value="contenidos"
                        checked={volunteerType === 'contenidos'}
                        onChange={(e) => setVolunteerType(e.target.value)}
                        required
                        style={{
                          marginRight: '10px',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                          accentColor: 'var(--azul-principal)'
                        }}
                      />
                      Contenidos digitales
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--azul-principal)', fontSize: '15px' }}>
                      <input
                        type="radio"
                        name="volunteerType"
                        value="territorial"
                        checked={volunteerType === 'territorial'}
                        onChange={(e) => setVolunteerType(e.target.value)}
                        required
                        style={{
                          marginRight: '10px',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                          accentColor: 'var(--azul-principal)'
                        }}
                      />
                      Apoyo territorial
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--azul-principal)', fontSize: '15px' }}>
                      <input
                        type="radio"
                        name="volunteerType"
                        value="otros"
                        checked={volunteerType === 'otros'}
                        onChange={(e) => setVolunteerType(e.target.value)}
                        required
                        style={{
                          marginRight: '10px',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                          accentColor: 'var(--azul-principal)'
                        }}
                      />
                      Otros
                    </label>
                  </div>
                </div>
                {volunteerType === 'otros' && (
                  <div className="form-row">
                    <textarea
                      placeholder="Cuéntanos en qué te gustaría ayudar"
                      rows="4"
                      value={otrosDescription}
                      onChange={(e) => setOtrosDescription(e.target.value)}
                      required
                      onInvalid={(e) => e.target.setCustomValidity('Por favor, describe en qué te gustaría ayudar.')}
                      onInput={(e) => e.target.setCustomValidity('')}
                    ></textarea>
                  </div>
                )}
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
