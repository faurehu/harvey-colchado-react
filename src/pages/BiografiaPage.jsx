import React from 'react';
import { Link } from 'react-router-dom';

function BiografiaPage() {
  return (
    <div className="conocimiento-page biografia-page">
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
            <h3>Conoce a Harvey Colchado</h3>
            <p className="intro-text">
              Si hay crimen y corrupción, ¡la tumbamos! Harvey Colchado es un coronel de la Policía Nacional del Perú
              que ha dedicado su vida a la lucha contra el crimen organizado y la corrupción. Su trayectoria de 28 años
              de servicio lo ha llevado a desarticular a las organizaciones criminales más poderosas del país.
            </p>
          </div>

          {/* Early Life Section */}
          <div className="biografia-section">
            <h3>Los Primeros Años</h3>
            <div className="biografia-section-content">
              <img src="/images/biografia/bio3.png" alt="Harvey Colchado en sus primeros años" className="biografia-image" />
              <p>
                Harvey Colchado nació el 11 de abril de 1974 en Lima. Su madre, una mujer arequipeña, trabajaba en una
                fábrica y fue dirigente sindical; su padre, un hombre ancashino, se desempeñó como efectivo de la Guardia
                Republicana del Perú. En el distrito de Comas, donde ha vivido la mayor parte de su vida, creció junto a
                tres de sus cinco hermanos. Fue un estudiante destacado en diversas instituciones educativas, y sus
                asignaturas preferidas fueron siempre historia del Perú e historia universal. Fuera del ámbito académico,
                practicó boxeo como aficionado y compitió en ligas de fútbol distritales de Comas, Los Olivos, Chorrillos
                y Chaclacayo.
              </p>
            </div>
          </div>

          {/* Police Academy Section */}
          <div className="biografia-section">
            <h3>Formación Policial</h3>
            <div className="biografia-section-content image-right">
              <img src="/images/biografia/bio4.png" alt="Harvey Colchado en la academia" className="biografia-image" />
              <p>
                En el año 1993, Harvey Colchado ingresó a la Escuela de Oficiales de la Policía Nacional del Perú, donde
                destacó académicamente y mostró una marcada preferencia por los cursos de investigación criminal. Participó
                activamente en actividades de fútbol, atletismo y boxeo. Egresó en el tercer puesto entre los 194 cadetes de su
                promoción.
              </p>
            </div>
          </div>

          {/* DIRCOTE */}
          <div className="biografia-section">
            <h3>Inicio de Carrera Policial</h3>
            <p>
              En el año 1997, mientras la residencia del embajador de Japón permanecía tomada por miembros de la
              organización terrorista MRTA, Harvey Colchado se graduó como oficial y fue asignado a la Dirección
              Contra el Terrorismo (DIRCOTE) donde su primera tarea consistió en realizar análisis de las escuchas a los micrófonos
              que habían sido infiltrados en la residencia ocupada. Así se inició su intensa carrera policial.
            </p>
            <p>
              A lo largo de los años, Harvey Colchado ha sido asignado a diversas misiones especializadas. Además
              de la DIRCOTE, integró también la DIVINESP en la Dirección Antidrogas (DIRANDRO) y la Dirección de
              Investigación Criminal (DIRINCRI). También formó parte de la Dirección de Policía del Ministerio
              Público. En el marco de estas funciones, realizó investigaciones en todos los departamentos del Perú
              menos Pasco.
            </p>
          </div>

          {/* International Training */}
          <div className="biografia-section">
            <h3>Capacitación Internacional</h3>
            <div className="biografia-section-content">
              <img src="/images/biografia/bio1.png" alt="Harvey Colchado capacitación internacional" className="biografia-image" />
              <p>
                De manera paralela a su labor policial, cursó estudios de Derecho en horario nocturno en la Universidad
                Nacional Federico Villarreal. Asimismo, fue seleccionado para viajar a Washington D.C. y recibir
                capacitación de la Drug Enforcement Administration (DEA) de los Estados Unidos en materias vinculadas a
                la investigación criminal. En otras oportunidades, asistió a seminarios en la International Law Enforcement
                Academy (ILEA) en Nuevo México y El Salvador. Como exponente, participó en conferencias en materia de
                investigación criminal en diversos países como Brasil, Colombia, Ecuador, Bolivia, España, Angola, Austria,
                etc.
              </p>
            </div>
          </div>

          {/* Camarada Artemio */}
          <div className="biografia-section">
            <h3>La Captura de Camarada Artemio</h3>
            <div className="biografia-section-content image-right">
              <img src="/images/biografia/bio7.jpg" alt="Operativo contra el terrorismo" className="biografia-image" />
              <p>
                Estas experiencias en la primera etapa de su carrera policial, centradas en la investigación de casos de
                terrorismo, narcotráfico y sicariato en diversas regiones del Perú, le dieron la base necesaria para asumir
                su primer gran objetivo. En 2006 se le asignó la misión de desmantelar la actividad narcoterrorista en el
                Alto Huallaga. Tras siete años de trabajo sostenido, Harvey Colchado se enfrentó a las facciones remanentes
                del grupo terrorista maoísta Sendero Luminoso, logrando finalmente la captura de su dirigente Florindo
                Eleuterio Flores alias camarada Artemio.
              </p>
            </div>
          </div>

          {/* DIVIAC */}
          <div className="biografia-section">
            <h3>Fundación de la DIVIAC</h3>
            <div className="biografia-section-content">
              <img src="/images/biografia/bio8.jpg" alt="Harvey Colchado en la DIVIAC" className="biografia-image" />
              <div>
                <p>
                  El amplio reconocimiento a la labor de Harvey Colchado motivó su selección, en 2016, como oficial fundador
                  de la División de Investigación de Alta Complejidad (DIVIAC), creada con la misión de combatir la
                  criminalidad organizada en sus diversas modalidades: corrupción de funcionarios, lavado de activos, tráfico
                  de terrenos, sicariato, trata de personas, robo agravado, extorsión, minería y tala ilegal.
                </p>
                <p>
                  Desde esa posición, participó en operaciones clave para la desarticulación de organizaciones criminales como
                  los Cuellos Blancos del Puerto, el caso Odebrecht, los Piratas del Norte, el clan Orellana y los Malditos
                  de Santa Rosa, entre otros. Asimismo, colaboró en investigaciones que involucraron al partido Fuerza Popular
                  y a su lideresa Keiko Fujimori, al político José Luna Galvez, así como a la exalcaldesa Susana Villarán, los
                  expresidentes Alan García, Pedro Pablo Kuczynski, Pedro Castillo, y Dina Boluarte y a la exfiscal de la
                  Nación Patricia Benavides.
                </p>
              </div>
            </div>
          </div>

          {/* Current Chapter */}
          <div className="biografia-section">
            <h3>Un Nuevo Capítulo</h3>
            <p>
              En 2024, la DIVIAC fue desactivada por el Ministerio del Interior durante la gestión de Juan José
              Santiváñez, bajo el gobierno de Dina Boluarte. El coronel Harvey Colchado fue reasignado al Observatorio
              de la Policía y en ocasión a labores de patrullaje. Poco tiempo después, fue pasado al retiro por
              disposición del mismo ministerio, poniendo fin a una trayectoria de 28 años de servicio en la Policía
              Nacional del Perú.
            </p>
            <p>
              Hoy, a los 51 años, el pase anticipado al retiro llevó a Harvey Colchado a incursionar en la política como
              una vía para continuar su lucha contra el crimen y la corrupción. Ha dejado la práctica del boxeo, pero
              sigue aprovechando cada oportunidad para jugar fútbol.
            </p>
          </div>

          {/* Big Photo Section - at the bottom */}
          <div className="biografia-hero-section">
            <div className="biografia-hero-content">
              <div className="biografia-hero-text">
                <h3>Un Servidor Público Ejemplar</h3>
                <p>
                  La trayectoria del Coronel Harvey Colchado representa el ejemplo de lo que debe ser un servidor público:
                  honesto, valiente, comprometido con la justicia y dispuesto a enfrentar cualquier adversidad en defensa
                  de los intereses del pueblo peruano.
                </p>
                <p>
                  Su dedicación inquebrantable a la lucha contra el crimen organizado y la corrupción, sin importar el
                  poder o la influencia de los implicados, lo ha convertido en un símbolo de integridad y valentía para
                  millones de peruanos que anhelan un país más justo y transparente.
                </p>
              </div>
              <div className="biografia-hero-image">
                <img src="/images/inicio/harvey-portrait-transparente.png" alt="Harvey Colchado" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BiografiaPage;
