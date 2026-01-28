import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './GaleriaPage.css';

// Images data for lightbox
const BIOGRAFIA_IMAGES = [
  { src: '/images/biografia/bio3.png', alt: 'Harvey Colchado en sus primeros años' },
  { src: '/images/biografia/bio4.png', alt: 'Harvey Colchado en formación policial' },
  { src: '/images/biografia/bio1.png', alt: 'Harvey Colchado en capacitación internacional' },
  { src: '/images/biografia/bio7.jpg', alt: 'Harvey Colchado durante la captura de Artemio' },
  { src: '/images/biografia/bio8.jpg', alt: 'Harvey Colchado en la DIVIAC' },
];

function BiografiaPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="conocimiento-page biografia-page">
      <Helmet>
        <title>Biografía - Harvey Colchado | Coronel PNP y Candidato a Diputado</title>
        <meta name="description" content="Conoce la historia de Harvey Colchado Huamaní, coronel de la Policía Nacional del Perú con 28 años de servicio combatiendo el crimen organizado y la corrupción." />
        <meta name="keywords" content="biografía Harvey Colchado, coronel PNP, Huancayo, Policía Nacional Perú, trayectoria policial, historia Harvey Colchado" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://harveycolchado.pe/conocimiento/biografia" />
        <meta property="og:title" content="Biografía - Harvey Colchado | Coronel PNP" />
        <meta property="og:description" content="Conoce la historia de Harvey Colchado, coronel de la PNP con 28 años combatiendo el crimen y la corrupción." />
        <meta property="og:image" content="https://harveycolchado.pe/images/inicio/harvey-portrait-transparente.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.pe/conocimiento/biografia" />
        <meta property="twitter:title" content="Biografía - Harvey Colchado" />
        <meta property="twitter:description" content="Conoce la historia de Harvey Colchado, coronel de la PNP dedicado a combatir el crimen y la corrupción." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.pe/conocimiento/biografia" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://harveycolchado.pe"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Conocimiento",
                "item": "https://harveycolchado.pe/conocimiento"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Biografía",
                "item": "https://harveycolchado.pe/conocimiento/biografia"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/conocimiento" className="back-link">← Volver</Link>
          <h2>Biografía</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="biografia-content">
        <div className="biografia-container">
          {/* Meet Harvey Section */}
          <div className="biografia-intro">
            <h3>Conóceme</h3>
            <p className="intro-text">
              Si hay crimen y corrupción, la tumbamos.
            </p>
            <p className="intro-text">
              Soy Harvey Colchado, coronel de la Policía Nacional del Perú, y he dedicado mi vida a combatir a las organizaciones criminales y a quienes usan el poder para robarle al país. Durante 28 años de servicio, enfrenté al crimen organizado sin miedo, sin favores y sin mirar a quién.
            </p>
          </div>

          {/* Early Life Section */}
          <div className="biografia-section">
            <h3>Mis primeros años</h3>
            <div className="biografia-section-content">
              <picture onClick={() => openImage(0)} className="biografia-image-clickable">
                <source media="(min-width: 1200px)" srcSet="/images/biografia/optimized/bio3-desktop.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/images/biografia/optimized/bio3-tablet.webp" type="image/webp" />
                <source srcSet="/images/biografia/optimized/bio3-mobile.webp" type="image/webp" />
                <img src="/images/biografia/bio3.png" alt="Harvey Colchado en sus primeros años" className="biografia-image" loading="lazy" />
              </picture>
              <div>
                <p>
                  Nací el 11 de abril de 1974 en Lima. Mi historia comienza en una familia trabajadora. Mi madre, arequipeña, fue obrera en una fábrica y dirigente sindical; mi padre, ancashino, sirvió al país como efectivo de la Guardia Republicana del Perú. Crecí en Comas, el distrito que ha sido mi hogar casi toda la vida, junto a tres de mis cinco hermanos.
                </p>
                <p>
                  Desde joven fui un estudiante aplicado. Siempre me apasionaron la historia del Perú y la historia universal, porque entender el pasado es clave para no repetir los errores. Fuera de las aulas practiqué boxeo y jugué fútbol en ligas distritales de Comas, Los Olivos, Chorrillos y Chaclacayo, deportes que me enseñaron esfuerzo, disciplina y trabajo en equipo.
                </p>
              </div>
            </div>
          </div>

          {/* Police Academy Section */}
          <div className="biografia-section">
            <h3>Mi formación policial</h3>
            <div className="biografia-section-content image-right">
              <picture onClick={() => openImage(1)} className="biografia-image-clickable">
                <source media="(min-width: 1200px)" srcSet="/images/biografia/optimized/bio4-desktop.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/images/biografia/optimized/bio4-tablet.webp" type="image/webp" />
                <source srcSet="/images/biografia/optimized/bio4-mobile.webp" type="image/webp" />
                <img src="/images/biografia/bio4.png" alt="Harvey Colchado en formación policial" className="biografia-image" loading="lazy" />
              </picture>
              <div>
                <p>
                  En 1993 ingresé a la Escuela de Oficiales de la Policía Nacional del Perú. Desde el inicio destaqué académicamente y encontré mi vocación en los cursos de investigación criminal. Paralelamente seguí practicando fútbol, atletismo y boxeo.
                </p>
                <p>
                  Egresé en el tercer puesto entre 194 cadetes de mi promoción, con la convicción clara de que mi carrera estaría al servicio de la ley y del país.
                </p>
              </div>
            </div>
          </div>

          {/* DIRCOTE */}
          <div className="biografia-section">
            <h3>El inicio de una carrera marcada por el riesgo</h3>
            <p>
              En 1997, mientras el Perú vivía uno de los episodios más duros del terrorismo con la toma de la residencia del embajador de Japón por el MRTA, me gradué como oficial y fui asignado a la DIRCOTE. Mi primera tarea fue analizar las escuchas obtenidas de los micrófonos infiltrados en la residencia. Ahí comenzó una carrera intensa, exigente y peligrosa.
            </p>
            <p>
              A lo largo de los años serví en unidades especializadas como DIRCOTE, DIRANDRO, DIRINCRI y en la Dirección de Policía del Ministerio Público. Investigué en casi todos los departamentos del Perú, enfrentando terrorismo, narcotráfico, sicariato y crimen organizado.
            </p>
          </div>

          {/* International Training */}
          <div className="biografia-section">
            <h3>Preparación dentro y fuera del país</h3>
            <div className="biografia-section-content">
              <picture onClick={() => openImage(2)} className="biografia-image-clickable">
                <source media="(min-width: 1200px)" srcSet="/images/biografia/optimized/bio1-desktop.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/images/biografia/optimized/bio1-tablet.webp" type="image/webp" />
                <source srcSet="/images/biografia/optimized/bio1-mobile.webp" type="image/webp" />
                <img src="/images/biografia/bio1.png" alt="Harvey Colchado en capacitación internacional" className="biografia-image" loading="lazy" />
              </picture>
              <div>
                <p>
                  Mientras cumplía funciones policiales, estudié Derecho en horario nocturno en la Universidad Nacional Federico Villarreal. Además, fui seleccionado para capacitarme en Washington D.C. con la DEA de los Estados Unidos, y participé en programas de la International Law Enforcement Academy (ILEA) en Nuevo México y El Salvador.
                </p>
                <p>
                  También tuve el honor de compartir mi experiencia como expositor en conferencias sobre investigación criminal en países como Brasil, Colombia, Ecuador, Bolivia, España, Angola y Austria, entre otros.
                </p>
              </div>
            </div>
          </div>

          {/* Camarada Artemio */}
          <div className="biografia-section">
            <h3>La captura de camarada Artemio</h3>
            <div className="biografia-section-content image-right">
              <picture onClick={() => openImage(3)} className="biografia-image-clickable">
                <source media="(min-width: 1200px)" srcSet="/images/biografia/optimized/bio7-desktop.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/images/biografia/optimized/bio7-tablet.webp" type="image/webp" />
                <source srcSet="/images/biografia/optimized/bio7-mobile.webp" type="image/webp" />
                <img src="/images/biografia/bio7.jpg" alt="Harvey Colchado durante la captura de Artemio" className="biografia-image" loading="lazy" />
              </picture>
              <div>
                <p>
                  En 2006 asumí uno de los mayores desafíos de mi carrera: desmantelar la actividad narcoterrorista en el Alto Huallaga. Fueron siete años de trabajo sostenido, de riesgo permanente y de compromiso absoluto con el país.
                </p>
                <p>
                  Ese esfuerzo culminó con la captura de Florindo Eleuterio Flores, alias "camarada Artemio", uno de los principales remanentes de Sendero Luminoso. Fue un golpe decisivo contra el terrorismo.
                </p>
              </div>
            </div>
          </div>

          {/* DIVIAC */}
          <div className="biografia-section">
            <h3>La DIVIAC y la lucha contra la corrupción</h3>
            <div className="biografia-section-content">
              <picture onClick={() => openImage(4)} className="biografia-image-clickable">
                <source media="(min-width: 1200px)" srcSet="/images/biografia/optimized/bio8-desktop.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/images/biografia/optimized/bio8-tablet.webp" type="image/webp" />
                <source srcSet="/images/biografia/optimized/bio8-mobile.webp" type="image/webp" />
                <img src="/images/biografia/bio8.jpg" alt="Harvey Colchado en la DIVIAC" className="biografia-image" loading="lazy" />
              </picture>
              <div>
                <p>
                  En 2016 fui convocado como oficial fundador de la División de Investigación de Alta Complejidad (DIVIAC), creada para enfrentar la criminalidad organizada en todas sus formas: corrupción de funcionarios, lavado de activos, tráfico de terrenos, sicariato, trata de personas, extorsión, minería y tala ilegal, entre otros delitos.
                </p>
                <p>
                  Desde la DIVIAC participé en investigaciones emblemáticas como Cuellos Blancos del Puerto, Odebrecht, Los Piratas del Norte, el clan Orellana, Los Malditos de Santa Rosa, y en casos que involucraron a figuras del poder político y económico del país, sin excepciones ni privilegios.
                  Siempre actué con un solo criterio: la ley es igual para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Current Chapter */}
          <div className="biografia-section">
            <h3>Un nuevo capítulo</h3>
            <p>
              En 2024, la DIVIAC fue desactivada por decisión del Ministerio del Interior. Fui reasignado y, poco tiempo después, pasado al retiro de manera anticipada, poniendo fin a mis 28 años de servicio en la Policía Nacional del Perú.
            </p>
            <p>
              A mis 51 años, ese retiro no significó rendirme. Al contrario, me llevó a dar un paso al frente e ingresar a la política, como una nueva forma de seguir luchando contra el crimen y la corrupción, ahora desde el lado de las decisiones y las reformas.
            </p>
            <p>
              Ya no practico boxeo, pero sigo jugando fútbol cada vez que puedo. Mantengo la misma energía, la misma convicción y el mismo compromiso con el Perú.
            </p>
          </div>

          {/* Big Photo Section - at the bottom */}
          <div className="biografia-hero-section">
            <div className="biografia-hero-content">
              <div className="biografia-hero-text">
                <h3>Mi compromiso</h3>
                <p>
                  Mi trayectoria representa lo que creo que debe ser un servidor público: honesto, valiente, firme frente al poder, leal al pueblo y siempre con ansias de seguir aprendiendo.
                </p>
                <p>
                  Nunca me detuve ante las amenazas ni ante los nombres influyentes. Y no lo haré ahora.
                </p>
                <p>
                  Sigo en esta lucha porque creo en un Perú justo, seguro y transparente, donde la ley se cumpla y el Estado esté del lado de los ciudadanos, no de las mafias.
                </p>
                <p>
                  Ese es mi compromiso.
                  Y por ese país, vamos a tumbar el crimen y la corrupción.
                </p>
              </div>
              <div className="biografia-hero-image">
                <img src="/images/inicio/harvey-portrait-transparente.png" alt="Harvey Colchado" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >
          <span className="gallery-modal-close">&times;</span>
          <img
            className="gallery-modal-content"
            src={BIOGRAFIA_IMAGES[selectedImage].src}
            alt={BIOGRAFIA_IMAGES[selectedImage].alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default BiografiaPage;
