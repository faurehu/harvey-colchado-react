import React from 'react';
import { Link } from 'react-router-dom';

function TesisMaestriaPage() {
  return (
    <div className="conocimiento-page">
      {/* Header Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/conocimiento" className="back-link">← Volver</Link>
          <h2>Tésis de Maestría</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-post-content">
            <h3>Investigación académica y experiencia profesional</h3>
            <p>
              El trabajo de investigación del Coronel Harvey Colchado para su maestría representa una
              síntesis única entre la experiencia práctica en el campo de la seguridad nacional y el
              análisis académico riguroso de los desafíos que enfrenta el Perú en materia de crimen
              organizado y corrupción.
            </p>

            <h3>Enfoque metodológico</h3>
            <p>
              La tesis desarrolla un análisis profundo de los mecanismos mediante los cuales el crimen
              organizado penetra las instituciones del Estado, utilizando tanto marcos teóricos
              internacionales como estudios de casos específicos del contexto peruano. El trabajo destaca
              por su aproximación multidisciplinaria, integrando perspectivas jurídicas, criminológicas
              y de ciencia política.
            </p>

            <h3>Hallazgos principales</h3>
            <p>
              Entre los principales hallazgos de la investigación se encuentra el análisis de las redes
              de corrupción que vinculan al crimen organizado con sectores políticos y empresariales.
              La tesis documenta cómo estas redes operan, sus mecanismos de protección y las debilidades
              institucionales que explotan para mantener su impunidad.
            </p>

            <h3>Propuestas de reforma</h3>
            <p>
              El trabajo no se limita al diagnóstico, sino que propone reformas concretas tanto en el
              marco legal como en las estructuras institucionales encargadas de combatir el crimen
              organizado. Estas propuestas están fundamentadas en mejores prácticas internacionales
              adaptadas a la realidad peruana.
            </p>

            <h3>Contribución al conocimiento</h3>
            <p>
              La tesis del Coronel Colchado constituye un aporte valioso al conocimiento sobre seguridad
              nacional y lucha contra la corrupción en el Perú. Combina la perspectiva única de quien ha
              estado en primera línea de esta batalla con el rigor académico necesario para comprender
              y proponer soluciones a estos desafíos sistémicos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TesisMaestriaPage;
