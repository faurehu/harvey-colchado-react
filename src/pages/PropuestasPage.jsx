import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Static data hoisted to module level to avoid recreation on every render
const PROPUESTAS = [
    {
      id: 1,
      icon: '/images/propuestas/icons/policia.svg',
      titulo: 'REFORMA DE LA POLICÍA NACIONAL DEL PERÚ',
      detalles: [
        {
          subtitulo: 'Prueba del polígrafo obligatoria para los Altos Mandos de la PNP',
          contenido: 'Para prevenir y descartar perfiles inadecuados y vinculados a la corrupción.'
        },
        {
          subtitulo: 'Incorporación de las Escuelas de Oficiales y Suboficiales como entidades supervisables de la SUNEDU y MINEDU',
          contenido: 'Con la finalidad de supervisar el cumplimiento de las normas, garantizar la transparencia del proceso y prevenir actos de corrupción.'
        },
        {
          subtitulo: 'Procesos sumarios de 40 días de duración para policías involucrados en actos de corrupción',
          contenido: ''
        },
        {
          subtitulo: 'Impulsar la adecuada correspondencia entre las competencias del personal y sus especialidades funcionales (orden y seguridad e investigación criminal) en la PNP',
          contenido: 'Con el objetivo de evitar interrupciones en las líneas de carrera y asegurar una correcta especialización profesional. Esto, mediante la aprobación del Manual de Clasificación de Cargos.'
        },
        {
          subtitulo: 'Impulsar la aprobación del Bono Anticrimen',
          contenido: 'Considerando que a la fecha los investigadores policiales no reciben ningún incentivo económico por desarticular bandas y organizaciones criminales, pese a la falta de logística y al alto riesgo que asumen. Este bono busca reconocer el trabajo efectivo en la lucha contra el crimen organizado, fortalecer la motivación del personal especializado y mejorar los resultados en materia de seguridad ciudadana.'
        },
        {
          subtitulo: 'Impulsar el incremento de 16 a 20 soles por la hora trabajada para los policías de la especialidad de orden y seguridad',
          contenido: 'En el marco del Plan Celador.'
        },
        {
          subtitulo: 'Implementación de un shock de inversiones en logística, tecnología e infraestructura de la Policía Nacional del Perú (PNP)',
          contenido: 'Orientado a fortalecer sus capacidades operativas, modernizar sus herramientas de trabajo y mejorar las condiciones para una lucha más eficaz contra el crimen.'
        },
        {
          subtitulo: 'Impulso de la meritocracia en los procesos de ascenso',
          contenido: 'Se incluirá a Servir como observador en el proceso de ascenso. Se promoverá la valoración de la conducta profesional, incrementando el factor disciplinario al 30%.'
        }
      ]
    },
    {
      id: 2,
      icon: '/images/propuestas/icons/crimen.svg',
      titulo: 'LUCHA CONTRA EL CRIMEN Y LA CORRUPCIÓN',
      detalles: [
        {
          subtitulo: 'Derogación de las leyes pro crimen',
          contenido: ''
        },
        {
          subtitulo: 'Aprobación de ley para incorporación del delito de producción, posesión y difusión de mensajes extorsivos en el Código Penal',
          contenido: ''
        },
        {
          subtitulo: 'Aprobación de ley para designar equipos de enlace en bancos, empresas de telefonía y plataformas digitales',
          contenido: 'Para la entrega inmediata de información al sistema de justicia en casos de extorsión.'
        },
        {
          subtitulo: 'Creación de la Dirección Especializada de Investigaciones de Alta Complejidad',
          contenido: 'Orientada a combatir economías ilegales y la corrupción en el poder.'
        },
        {
          subtitulo: 'Impulsar la creación de unidades de maniobra especializadas contra la minería ilegal a nivel nacional',
          contenido: 'Considerando que actualmente la DIRMEAMB —unidad policial especializada en este delito— requiere el apoyo de otras unidades para ejecutar operativos de interdicción. Se propone la conformación de unidades in situ en zonas de alta complejidad como Pataz o Madre de Dios, debidamente equipadas y con capacidad operativa autónoma para intervenir de manera eficaz y sostenida.'
        },
        {
          subtitulo: 'Creación del Departamento de Investigación de Desvío de Insumos Químicos para la Minería Ilegal',
          contenido: 'Considerando que esta actividad ilícita involucra el uso y tráfico de insumos como mercurio, cianuro y otras sustancias controladas. Este departamento permitirá identificar las rutas de desvío, desarticular las cadenas de suministro ilegal y atacar el núcleo logístico que sostiene a la minería ilegal.'
        },
        {
          subtitulo: 'Implementación del Reglamento de Inscripciones de Bienes vinculados a la Pequeña Minería y Minería Artesanal en el Registro de Bienes Muebles de la SUNARP',
          contenido: ''
        },
        {
          subtitulo: 'Fiscalización de plantas de beneficio a cargo del MINEM, OEFA, MTPE, SUNAFIL y OSINERGMIN',
          contenido: ''
        }
      ]
    },
    {
      id: 3,
      icon: '/images/propuestas/icons/liderazgo.svg',
      titulo: 'CONGRESO SIN BLINDAJE',
      detalles: [
        {
          subtitulo: 'Reforma de la Comisión de Ética del Congreso',
          contenido: 'Considerando que actualmente su funcionamiento se ve condicionado por acuerdos políticos entre bancadas que pueden derivar en el blindaje o sanción selectiva de determinados legisladores.'
        },
        {
          subtitulo: 'Aprobación de la inmunidad parlamentaria facultativa y oposición a la inmunidad parlamentaria total',
          contenido: 'Ante el intento de establecer una inmunidad total que impediría la investigación de los congresistas por cualquier tipo de delito. Se plantea la derogatoria de dicha figura y la implementación de la inmunidad facultativa, mediante la cual cada parlamentario pueda solicitar voluntariamente el levantamiento de su inmunidad para someterse y facilitar las investigaciones correspondientes.'
        },
        {
          subtitulo: 'Aprobación de una ley que prohíba a los funcionarios de elección popular pertenecientes a las Fuerzas Armadas y a la Policía Nacional del Perú percibir simultáneamente más de una remuneración del Estado',
          contenido: ''
        }
      ]
    },
    {
      id: 4,
      icon: '/images/propuestas/icons/inteligencia.svg',
      titulo: 'INTELIGENCIA PARA PROTEGER A LOS PERUANOS',
      detalles: [
        {
          subtitulo: 'Impulsar la asignación directa de presupuesto para acciones de inteligencia en los Departamentos de Investigación Criminal (DEPINCRI)',
          contenido: 'Considerando que actualmente ninguna DEPINCRI cuenta con recursos propios para realizar seguimientos, vigilancias, filmaciones u otras labores de inteligencia. Esta medida permitirá fortalecer la investigación criminal y asegurar la captura efectiva de delincuentes a nivel distrital.'
        },
        {
          subtitulo: 'Impulsar la asignación de agentes de inteligencia en las comisarías con mayor incidencia de extorsión en Lima Metropolitana',
          contenido: 'Considerando que actualmente este delito se enfrenta principalmente mediante despliegues policiales presenciales, lo que no ataca las estructuras criminales ni permite identificar a los responsables que operan detrás de estos delitos. Esta medida busca fortalecer la inteligencia policial y mejorar la desarticulación efectiva de las redes de extorsión.'
        },
        {
          subtitulo: 'Creación de plataforma de control y trazabilidad de la inteligencia policial',
          contenido: 'Que permita supervisar en tiempo real las acciones de los agentes y el uso de los recursos de inteligencia del Estado.'
        }
      ]
    }
];

function PropuestasPage() {
  const [expandedPropuesta, setExpandedPropuesta] = useState(null);

  const toggleDetalle = (index) => {
    setExpandedPropuesta(expandedPropuesta === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Propuestas - Harvey Colchado 2026 | El Método Colchado</title>
        <meta name="description" content="Conoce las propuestas de Harvey Colchado para el Perú 2026: reforma policial, lucha contra el crimen y corrupción, inteligencia para proteger a los peruanos, y un congreso sin blindaje." />
        <meta name="keywords" content="propuestas Harvey Colchado, método Colchado, reforma policial Perú, lucha contra el crimen, anticorrupción, congreso sin blindaje, inteligencia policial" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.pe/propuestas" />
        <meta property="og:title" content="Propuestas - Harvey Colchado 2026 | El Método Colchado" />
        <meta property="og:description" content="Conoce las propuestas de Harvey Colchado: reforma policial, lucha contra el crimen y corrupción, inteligencia y congreso sin blindaje." />
        <meta property="og:image" content="https://harveycolchado.pe/images/propuestas/propuestas_fondo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.pe/propuestas" />
        <meta property="twitter:title" content="Propuestas - Harvey Colchado 2026" />
        <meta property="twitter:description" content="Conoce las propuestas de Harvey Colchado para reformar la policía y luchar contra el crimen y la corrupción." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.pe/propuestas" />
      </Helmet>

      {/* Video Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/propuestas/propuestas_fondo.png"
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
          <source src="/images/propuestas/huallaga.mp4" type="video/mp4" />
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
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '48px', margin: 0 }}>Propuestas</h2>
        </div>
      </div>

      {/* Propuestas Grid */}
      <section className="propuestas-section">
        <div className="propuestas-header">
          <h2>¿Cómo lucharemos contra el crimen y la corrupción?</h2>
        </div>

        <div className="propuestas-grid">
          {PROPUESTAS.map((propuesta, index) => (
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
                <ol style={{ paddingLeft: '2rem' }}>
                  {propuesta.detalles.map((detalle, detalleIndex) => (
                    <li key={detalleIndex} style={{ marginBottom: '1rem' }}>
                      {detalle.subtitulo}
                      {detalle.contenido && ` ${detalle.contenido}`}
                    </li>
                  ))}
                </ol>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default PropuestasPage;
