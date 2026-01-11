import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import CasoCard from '../components/shared/CasoCard';

function HomePage() {
  const [showX, setShowX] = useState(false);
  const [showDesktopX, setShowDesktopX] = useState(false);
  const [numberKey, setNumberKey] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const heroImages = [
    {
      name: "harvey-portrait-transparente",
      png: "/images/inicio/harvey-portrait-transparente.png",
      webp: {
        mobile: "/images/inicio/optimized/harvey-portrait-transparente-mobile.webp",
        tablet: "/images/inicio/optimized/harvey-portrait-transparente-tablet.webp",
        desktop: "/images/inicio/optimized/harvey-portrait-transparente-desktop.webp"
      }
    },
    {
      name: "HC_SOLO",
      png: "/images/inicio/HC_SOLO.png",
      webp: {
        mobile: "/images/inicio/optimized/HC_SOLO-mobile.webp",
        tablet: "/images/inicio/optimized/HC_SOLO-tablet.webp",
        desktop: "/images/inicio/optimized/HC_SOLO-desktop.webp"
      }
    },
    {
      name: "TORITO PORTADA",
      png: "/images/inicio/TORITO PORTADA.png",
      webp: {
        mobile: "/images/inicio/optimized/TORITO PORTADA-mobile.webp",
        tablet: "/images/inicio/optimized/TORITO PORTADA-tablet.webp",
        desktop: "/images/inicio/optimized/TORITO PORTADA-desktop.webp"
      }
    }
  ];

  // Random initial image for mobile, sequential for desktop
  const [currentImageIndex] = useState(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    return randomIndex;
  });
  const [desktopImageIndex, setDesktopImageIndex] = useState(1); // Start with HC_SOLO

  // Preload critical hero images
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const sizeKey = screenWidth <= 480 ? 'mobile' : screenWidth <= 768 ? 'tablet' : 'desktop';

    // Preload the appropriate size for current screen
    const imagesToPreload = [
      ...heroImages.map(img => img.webp[sizeKey]),
      `/images/inicio/optimized/CASCO-${sizeKey}.webp`,
      `/images/inicio/optimized/NÚMERO 1-${sizeKey}.webp`
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const container = document.getElementById('juicer-container');
    if (!container) return;

    // Create the feed element
    const feedElement = document.createElement('ul');
    feedElement.className = 'juicer-feed';
    feedElement.setAttribute('data-feed-id', 'harveycolchadoficial');
    container.appendChild(feedElement);

    // Check if script is already loaded
    let existingScript = document.querySelector('script[src*="juicer.io"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.juicer.io/embed/harveycolchadoficial/embed-code.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      existingScript = script;
    }

    return () => {
      // Clean up the feed element
      if (container && feedElement.parentNode === container) {
        container.removeChild(feedElement);
      }
    };
  }, []);

  // Image rotation effect (desktop only)
  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Track window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <Helmet>
        <title>Harvey Colchado - Candidato a Diputado por Lima 2026 | Página Oficial</title>
        <meta name="description" content="Harvey Colchado, candidato a diputado por Lima en las elecciones 2026. Conoce sus propuestas para luchar contra el crimen organizado, la corrupción y reformar la Policía Nacional. Con tu voto tumbamos el crimen y la corrupción." />
        <meta name="keywords" content="Harvey Colchado, candidato diputado Lima 2026, elecciones Peru 2026, congreso, lucha contra el crimen, anticorrupción, reforma policial, seguridad ciudadana, Ahora Nación" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/" />
        <meta property="og:title" content="Harvey Colchado - Candidato a Diputado por Lima 2026" />
        <meta property="og:description" content="Harvey Colchado, candidato a diputado por Lima 2026. Con tu voto tumbamos el crimen y la corrupción." />
        <meta property="og:image" content="https://harveycolchado.com.pe/images/inicio/harvey-portrait-transparente.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/" />
        <meta property="twitter:title" content="Harvey Colchado - Candidato a Diputado por Lima 2026" />
        <meta property="twitter:description" content="Harvey Colchado, candidato a diputado por Lima 2026. Con tu voto tumbamos el crimen y la corrupción." />
        <meta property="twitter:image" content="https://harveycolchado.com.pe/images/inicio/harvey-portrait-transparente.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/" />

        {/* Structured Data - Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Harvey Colchado Huamaní",
            "url": "https://harveycolchado.com.pe",
            "image": "https://harveycolchado.com.pe/images/inicio/harvey-portrait-transparente.png",
            "jobTitle": "Candidato a Diputado por Lima",
            "description": "Candidato a diputado por Lima en las elecciones 2026, ex coronel de la Policía Nacional del Perú",
            "sameAs": [
              "https://www.facebook.com/harveycolchadooficial",
              "https://www.instagram.com/harveycolchadoficial",
              "https://twitter.com/harveycolchado"
            ]
          })}
        </script>

        {/* Structured Data - Political Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Harvey Colchado - Campaña al Congreso 2026",
            "url": "https://harveycolchado.com.pe",
            "logo": "https://harveycolchado.com.pe/images/inicio/logo-campanha.svg",
            "description": "Campaña de Harvey Colchado para diputado por Lima en las elecciones del Perú 2026",
            "foundingDate": "2025",
            "sameAs": [
              "https://www.facebook.com/harveycolchadooficial",
              "https://www.instagram.com/harveycolchadoficial"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero hero-prueba">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imagesLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={`hero-logo hero-logo-mobile ${!showX ? 'pulse-attention' : ''}`} onClick={() => setShowX(true)} style={{ cursor: 'pointer' }}>
            <img src="/images/inicio/logo-campanha.svg" alt="Logo Campaña Harvey Colchado" className="logo-campanha logo-desktop" />
            <img src="/images/inicio/LOGO-AHORA-NACIÓN.png" alt="Logo Ahora Nación" className="logo-campanha logo-mobile" />
            {showX && (
              <svg className="x-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M 15,12 Q 20,18 30,30 Q 50,52 70,72 Q 80,83 88,90"
                  stroke="black"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 88,12 Q 80,20 70,30 Q 50,50 30,70 Q 20,81 12,88"
                  stroke="black"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
                    opacity: { duration: 0, delay: 0.5 }
                  }}
                />
              </svg>
            )}
          </div>
          <div className="hero-main-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={imagesLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-logo hero-logo-desktop">
                <img src="/images/inicio/logo-campanha.svg" alt="Logo Campaña Harvey Colchado" className="logo-campanha" />
              </div>
              <p>Con tu voto tumbamos el crimen y la corrupción!</p>
              <div className="cta-container">
                <Link to="/propuestas" className="cta-button">CONOCE EL MÉTODO COLCHADO</Link>
              </div>
            </motion.div>
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={imagesLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              {!isMobile ? (
                // Desktop: rotating images with helmet and number
                <div className="hero-images-desktop">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={desktopImageIndex}
                      className={`hero-image-part hero-image-person ${!imagesLoaded ? 'hero-image-loading' : ''}`}
                      style={
                        heroImages[desktopImageIndex].name === 'TORITO PORTADA'
                          ? { width: '80%', height: 'auto', position: 'absolute', bottom: 0 }
                          : { position: 'absolute', bottom: 0 }
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          srcSet={heroImages[desktopImageIndex].webp.desktop}
                          type="image/webp"
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet={heroImages[desktopImageIndex].webp.tablet}
                          type="image/webp"
                        />
                        <source
                          srcSet={heroImages[desktopImageIndex].webp.mobile}
                          type="image/webp"
                        />
                        <img
                          src={heroImages[desktopImageIndex].png}
                          alt="Harvey Colchado"
                          style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'bottom' }}
                        />
                      </picture>
                    </motion.div>
                  </AnimatePresence>
                  <picture>
                    <source
                      media="(min-width: 1200px)"
                      srcSet="/images/inicio/optimized/CASCO-desktop.webp"
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="/images/inicio/optimized/CASCO-tablet.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/inicio/optimized/CASCO-mobile.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/inicio/CASCO.png"
                      alt="Casco"
                      className={`hero-image-part hero-image-helmet ${!imagesLoaded ? 'hero-image-loading' : ''}`}
                    />
                  </picture>
                  <picture>
                    <source
                      media="(min-width: 1200px)"
                      srcSet="/images/inicio/optimized/NÚMERO 1-desktop.webp"
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="/images/inicio/optimized/NÚMERO 1-tablet.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/inicio/optimized/NÚMERO 1-mobile.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/inicio/NÚMERO 1.png"
                      alt="Número 1"
                      className={`hero-image-part hero-image-number ${!imagesLoaded ? 'hero-image-loading' : ''}`}
                    />
                  </picture>
                </div>
              ) : (
                // Mobile: random static image
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className={`hero-image hero-image-mobile ${!imagesLoaded ? 'hero-image-loading' : ''}`}
                    style={
                      heroImages[currentImageIndex].name === 'TORITO PORTADA'
                        ? { transform: 'translate(15px, 50px)' }
                        : heroImages[currentImageIndex].name === 'HC_SOLO'
                        ? { transform: 'translateY(-10px) scale(1.6)' }
                        : { transform: 'translate(0px, 50px) scale(1.2)' }
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <picture>
                      <source
                        media="(min-width: 1200px)"
                        srcSet={heroImages[currentImageIndex].webp.desktop}
                        type="image/webp"
                      />
                      <source
                        media="(min-width: 768px)"
                        srcSet={heroImages[currentImageIndex].webp.tablet}
                        type="image/webp"
                      />
                      <source
                        srcSet={heroImages[currentImageIndex].webp.mobile}
                        type="image/webp"
                      />
                      <img
                        src={heroImages[currentImageIndex].png}
                        alt="Harvey Colchado"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </picture>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Voting Instructions - Desktop Only */}
              <motion.div
                className="voting-instructions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="voting-box" onClick={() => setShowDesktopX(true)} style={{ cursor: 'pointer' }}>
                  <div className={`voting-square ${!showDesktopX ? 'pulse-attention' : ''}`}>
                    <img src="/images/inicio/LOGO-AHORA-NACIÓN.png" alt="Logo Ahora Nación" className="voting-logo" />
                    {showDesktopX && (
                      <svg className="voting-x-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                          d="M 15,12 Q 20,18 30,30 Q 50,52 70,72 Q 80,83 88,90"
                          stroke="black"
                          strokeWidth="5"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M 88,12 Q 80,20 70,30 Q 50,50 30,70 Q 20,81 12,88"
                          stroke="black"
                          strokeWidth="5"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
                            opacity: { duration: 0, delay: 0.5 }
                          }}
                        />
                      </svg>
                    )}
                  </div>
                  <p className="voting-label">MARCA</p>
                </div>
                <div className="voting-box" onClick={() => setNumberKey(prev => prev + 1)} style={{ cursor: 'pointer' }}>
                  <div className="voting-square voting-number">
                    <svg key={numberKey} className="voting-number-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                      {/* Diagonal top stroke */}
                      <motion.path
                        d="M 30,30 L 50,15"
                        stroke="var(--gris-oscuro)"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 0.3, ease: "easeInOut", delay: numberKey === 0 ? 1.2 : 0 },
                          opacity: { duration: 0, delay: numberKey === 0 ? 1.2 : 0 }
                        }}
                      />
                      {/* Vertical main line */}
                      <motion.path
                        d="M 50,15 L 50,105"
                        stroke="var(--gris-oscuro)"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 0.5, ease: "easeInOut", delay: numberKey === 0 ? 1.5 : 0.3 },
                          opacity: { duration: 0, delay: numberKey === 0 ? 1.5 : 0.3 }
                        }}
                      />
                      {/* Horizontal base line */}
                      <motion.path
                        d="M 20,105 L 80,105"
                        stroke="var(--gris-oscuro)"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 0.4, ease: "easeInOut", delay: numberKey === 0 ? 2.0 : 0.8 },
                          opacity: { duration: 0, delay: numberKey === 0 ? 2.0 : 0.8 }
                        }}
                      />
                    </svg>
                  </div>
                  <p className="voting-label">ESCRIBE</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Header - comes after hero on home page */}
      <Header />

      {/* ¿Quién soy? Section */}
      <section className="quien-soy">
        <div className="container">
          <h2>¿Quién soy?</h2>
          <div className="quien-soy-content">
            <img src="/images/inicio/harvey-hero-photo.jpg" alt="Harvey Colchado Portrait" className="portrait" loading="lazy" />
            <div className="quien-soy-text">
              <h3>Si hay crimen y corrupción, ¡la tumbamos!</h3>
              <p>Harvey Colchado nació el 11 de abril de 1974 en Lima y desde joven mostró una vocación de servicio público. En 1993 ingresó a la Escuela de Oficiales de la Policía Nacional del Perú, graduándose en el tercer puesto de su promoción. Su carrera policial comenzó en 1997 en la Dirección Contra el Terrorismo (DIRCOTE). y a lo largo de los años ha sido asignado a misiones especializadas en investigación criminal, combatiendo el terrorismo, narcotráfico y crimen organizado en todo el país. Paralelamente, cursó estudios de Derecho y recibió capacitación de la DEA en Estados Unidos, participando como exponente en conferencias internacionales sobre investigación criminal.</p>
              <p>En 2016, fue seleccionado como oficial fundador de la División de Investigación de Alta Complejidad (DIVIAC), liderando operaciones clave como la desarticulación de organizaciones criminales como los Cuellos Blancos del Puerto, el caso Odebrecht, y casos de corrupción de alto nivel que involucraron a políticos y funcionarios de todos los sectores. En 2025, tras la desactivación de la DIVIAC, fue pasado al retiro después de 28 años de servicio. Hoy, a los 51 años, incursiona en la política para continuar su lucha contra el crimen y la corrupción desde una nueva trinchera.</p>
              <Link to="/conocimiento/biografia" className="biografia-button">Lee mi biografía</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Casos emblemáticos Section */}
      <section className="casos-emblematicos">
        <div className="container">
          <h2>Casos emblemáticos</h2>
          <p className="subtitle">Mi experiencia en la lucha contra las economías ilegales y el crimen organizado me permitió desarticular organizaciones no solo integradas por delincuentes comunes, si no también lideradas por funcionarios públicos de alto rango y políticos de derecha, centro e izquierda.</p>
        </div>

        <div className="casos-wrapper">
          <CasoCard
            titulo="Los Waykis en la Sombra"
            imagen="/images/inicio/caso-emblematico-1.png"
            descripcion="El caso Los Waykis en la Sombra investiga a una presunta red organizada de corrupción liderada por Nicanor Boluarte, hermano de la presidenta Dina Boluarte. Se señala que manipuló designaciones políticas y exigió pagos para evitar ser cesados en el Estado. Según la fiscalía, la red también habría vendido más de noventa títulos universitarios del país en 75 millones para el Perú."
            enlace="https://www.infobae.com/peru/2024/11/18/nicanor-boluarte-y-los-waykis-en-la-sombra-quienes-integran-la-presunta-organizacion-criminal-que-dirige-el-hermano-de-dina-boluarte/"
            enlaceTexto="lea la noticia completa aqui"
          />

          <CasoCard
            titulo="La Fiscal y su Cúpula de Poder"
            imagen="/images/inicio/caso-emblematico-2.png"
            descripcion="El caso La Fiscal y su Cúpula de Poder investiga a la presunta red criminal de corrupción liderada por la fiscal de la Nación, Patricia Benavides. Se señala que habría buscado favorecer a congresistas de diversas bancadas a cambio de votos para archivar denuncias constitucionales en su contra. Las investigaciones fueron lideradas por el Equipo Especial de Fiscales contra la Corrupción del Poder, con la destitución de la fiscal de la corte, respecto a los Jueces y la inhabilitación de la señora de la Nación acusada Fiscalía con cargos de su actual situación Jaime Villanueva."
            enlace="https://larepublica.pe/politica/2023/11/27/como-operaba-la-organizacion-criminal-la-fiscal-y-su-cupula-de-poder-que-lideraria-patricia-benavides-2319192"
            enlaceTexto="lea la noticia completa aqui"
          />

          <CasoCard
            titulo="Casos de corrupción de Pedro Castillo"
            imagen="/images/inicio/caso-emblematico-3.png"
            descripcion="Son investigaciones por corrupción contra el gobierno de Pedro Castillo (2021-2022), comprenden un conjunto de más de 80 acusaciones fiscales que lo señalan como presunto líder de una organización criminal enquistada en el Estado. Luego del Equipo Especial de Fiscales contra la Corrupción en el Poder (Eficcop) los casos involucran delitos cometidos de obras públicas, tráfico de influencias con congresistas de Acción Popular, entre los cuales se encuentran irregularidades entre Fuerza Armadas y la Policía, y el operativo de rescate que considera como el denominado 'gabinete en la sombra'."
            enlace="https://www.infobae.com/america/peru/2022/12/16/pedro-castillo-las-ocho-investigaciones-en-su-contra-que-le-valieron-a-la-fiscalia-para-lograr-su-prision-preventiva/"
            enlaceTexto="lea la noticia completa aqui"
          />

          <CasoCard
            titulo="Caso Cócteles y Keiko Fujimori"
            imagen="/images/inicio/caso-emblematico-4.png"
            descripcion="Son investigaciones penales que se abrieron contra la lideresa del partido Fuerza Popular, Keiko Fujimori, por la presunta comisión de delitos de lavado de activos, obstrucción a la justicia y organización criminal. El caso se centra en los aportes recibidos durante sus campañas presidenciales de 2011 y 2016."
            enlace="https://elcomercio.pe/politica/fuerza-popular-nuevo-chat-revela-coordinaciones-contra-jefe-de-diviac-harvey-colchado-keiko-fujimori-luz-salgado-ursula-letona-noticia/"
            enlaceTexto="lea la noticia completa aqui"
          />
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="social-feed">
        <div className="container" id="juicer-container"></div>
      </section>
    </>
  );
}

export default HomePage;
