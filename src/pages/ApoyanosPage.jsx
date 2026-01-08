import React, { useState } from 'react';

function ApoyanosPage() {
  const [expandedPropuesta, setExpandedPropuesta] = useState(null);

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

  const handleVoluntarioSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés en ser voluntario! Nos pondremos en contacto contigo pronto.');
    e.target.reset();
  };

  return (
    <>
      {/* Sección Únete a la campaña */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <h2>Únete a la campaña</h2>
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

            <form className="apoyo-form" onSubmit={handleVoluntarioSubmit}>
              <div className="form-row">
                <input type="text" placeholder="NOMBRES COMPLETOS" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="APELLIDOS COMPLETOS" required />
              </div>
              <div className="form-row form-row-half">
                <input type="text" placeholder="DNI" required />
                <input type="text" placeholder="NÚMERO CELULAR" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="CORREO ELECTRÓNICO" required />
              </div>
              <div className="form-row">
                <textarea placeholder="¿EN QUÉ PUEDES AYUDAR?" rows="4" required></textarea>
              </div>
              <button type="submit" className="form-submit">ME APUNTO</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApoyanosPage;
