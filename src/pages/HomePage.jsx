import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import CasoCard from '../components/shared/CasoCard';

function HomePage() {
  const [showX, setShowX] = useState(false);
  const [showDesktopX, setShowDesktopX] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero hero-prueba">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-logo hero-logo-mobile" onClick={() => setShowX(true)} style={{ cursor: 'pointer' }}>
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-logo hero-logo-desktop">
                <img src="/images/inicio/logo-campanha.svg" alt="Logo Campaña Harvey Colchado" className="logo-campanha" />
              </div>
              <p>Con tu voto tumbamos la corrupción!</p>
              <div className="cta-container">
                <Link to="/propuestas" className="cta-button">EL MÉTODO COLCHADO</Link>
              </div>
            </motion.div>
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/inicio/hero-main.png" alt="Harvey Colchado" className="hero-image" />

              {/* Voting Instructions - Desktop Only */}
              <motion.div
                className="voting-instructions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="voting-box" onClick={() => setShowDesktopX(true)} style={{ cursor: 'pointer' }}>
                  <div className="voting-square">
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
                <div className="voting-box" onClick={() => setShowNumber(true)} style={{ cursor: 'pointer' }}>
                  <div className="voting-square voting-number">
                    {showNumber && (
                      <svg className="voting-number-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
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
                            pathLength: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0 }
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
                            pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
                            opacity: { duration: 0, delay: 0.3 }
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
                            pathLength: { duration: 0.4, ease: "easeInOut", delay: 0.8 },
                            opacity: { duration: 0, delay: 0.8 }
                          }}
                        />
                      </svg>
                    )}
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
            <img src="/images/inicio/harvey-portrait.jpg" alt="Harvey Colchado Portrait" className="portrait" />
            <div className="quien-soy-text">
              <h3>Si hay crimen y corrupción, ¡la tumbamos!</h3>
              <p>Harvey Colchado nació el 11 de abril de 1974 en Lima. Su madre, una mujer arequipeña, trabajaba en una fábrica y fue dirigente sindical; su padre, un hombre ancashino, se desempeñó como efectivo de la Guardia Republicana del Perú. En el distrito de Comas, donde ha vivido la mayor parte de su vida, creció junto a tres de sus cinco hermanos. Fue un estudiante destacado en diversas instituciones educativas, y sus asignaturas preferidas fueron siempre historia nacional e historia universal. Fuera del ámbito académico, practicó boxeo como aficionado y compitió en ligas de fútbol distritales de Comas, Los Olivos, Chorrillos y Chaclacayo.</p>
              <p>En el año 1993, Harvey Colchado ingresó a la Escuela de Oficiales de la Policía Nacional del Perú, donde destacó académicamente y mostró una marcada preferencia por los cursos de investigación criminal. Participó activamente en actividades de fútbol y boxeo. Egresó en el tercer puesto entre los 194 cadetes de su promoción.</p>
              <p>En el año 1997, mientras la residencia del embajador de Japón permanecía tomada por miembros de la organización terrorista MRTA, Harvey Colchado se graduó como oficial y fue asignado a la Dirección Contra el Terrorismo (DIRCOTE) donde su primera tarea consistió en realizar escuchas a los micrófonos que habían sido infiltrados en la residencia ocupada. Así se inició su intensa carrera policial.</p>
              <p>A lo largo de los años, Harvey Colchado ha sido asignado a diversas misiones especializadas. Además de la DIRCOTE, integró también la DIVINESP en la Dirección Antidrogas (DIRANDRO) y la Dirección de Investigación Criminal (DIRINCRI). También formó parte de la Dirección de Policía del Ministerio Público. En el marco de estas funciones, realizó investigaciones en todos los departamentos del Perú menos Pasco.</p>
              <p>De manera paralela a su labor policial, cursó estudios de Derecho en horario nocturno en la Universidad Nacional Federico Villarreal. Asimismo, fue seleccionado para viajar a Washington D.C. y recibir capacitación de la Drug Enforcement Administration (DEA) de los Estados Unidos en materias vinculadas a la investigación criminal. En otras oportunidades, asistió a seminarios en la International Law Enforcement Academy (ILEA) en Nuevo México y El Salvador. Como exponente, participó en conferencias en materia de investigación criminal en diversos países como Brasil, Colombia, Ecuador, Bolivia, España, Angola, Austria, etc.</p>
              <p>Estas experiencias en la primera etapa de su carrera policial, centradas en la investigación de casos de terrorismo, narcotráfico y sicariato en diversas regiones del Perú, le dieron la base necesaria para asumir su primer gran objetivo. En 2006 se le asignó la misión de desmantelar la actividad narcoterrorista en el Alto Huallaga. Tras siete años de trabajo sostenido, Harvey Colchado se enfrentó a las facciones remanentes del grupo terrorista maoísta Sendero Luminoso, logrando finalmente la captura de su dirigente Florindo Eleuterio Flores, conocido como camarada Artemio.</p>
              <p>El amplio reconocimiento a la labor de Harvey Colchado motivó su selección, en 2016, como oficial fundador de la División de Investigación de Alta Complejidad (DIVIAC), creada con la misión de combatir la criminalidad organizada en sus diversas modalidades: corrupción de funcionarios, lavado de activos, tráfico de terrenos, sicariato, trata de personas, robo agravado, extorsión, minería y tala ilegal.</p>
              <p>Desde esa posición, participó en operaciones clave para la desarticulación de organizaciones criminales como los Cuellos Blancos del Puerto, el caso Odebrecht, los Piratas del Norte, el clan Orellana y los Malditos de Santa Rosa, entre otros. Asimismo, colaboró en investigaciones que involucraron al partido Fuerza Popular y a su lideresa Keiko Fujimori, al político José Luna Galvez, así como a la exalcaldesa Susana Villarán, los expresidentes Alan García, Pedro Pablo Kuczynski, Pedro Castillo, y Dina Boluarte y a la exfiscal de la Nación Patricia Benavides.</p>
              <p>En 2024, la DIVIAC fue desactivada por el Ministerio del Interior durante la gestión de Juan José Santiváñez, bajo el gobierno de Dina Boluarte. El coronel Harvey Colchado fue reasignado al Observatorio de la Policía y en ocasión a labores de patrullaje. Poco tiempo después, fue pasado al retiro por disposición del mismo ministerio, poniendo fin a una trayectoria de 28 años de servicio en la Policía Nacional del Perú.</p>
              <p>Hoy, a los 51 años, el pase anticipado al retiro llevó a Harvey Colchado a incursionar en la política como una vía para continuar su lucha contra el crimen y la corrupción. Ha dejado la práctica del boxeo, pero sigue aprovechando cada oportunidad para jugar fútbol.</p>
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
