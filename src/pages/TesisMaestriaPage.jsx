import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function TesisMaestriaPage() {
  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>Tesis de Maestría - Harvey Colchado | Magíster en Gobierno y Políticas Públicas PUCP</title>
        <meta name="description" content="Tesis de maestría de Harvey Colchado en Gobierno y Políticas Públicas de la Pontificia Universidad Católica del Perú. Investigación académica sobre seguridad nacional y crimen organizado." />
        <meta name="keywords" content="tesis Harvey Colchado, maestría PUCP, gobierno y políticas públicas, investigación académica, seguridad nacional" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://harveycolchado.pe/conocimiento/tesis-maestria" />
        <meta property="og:title" content="Tesis de Maestría - Harvey Colchado" />
        <meta property="og:description" content="Tesis de maestría en Gobierno y Políticas Públicas de la PUCP sobre seguridad nacional." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.pe/conocimiento/tesis-maestria" />
        <meta property="twitter:title" content="Tesis de Maestría - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.pe/conocimiento/tesis-maestria" />
      </Helmet>

      {/* Header Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/conocimiento" className="back-link">← Volver</Link>
          <h2>Tésis de Maestría</h2>
        </div>
      </section>

      {/* Description Section */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-post-content">
            <p>
              Esta tesis de maestría fue desarrollada como parte del programa de <strong>MAGÍSTER EN GOBIERNO Y POLÍTICAS PÚBLICAS</strong> en la <strong>Pontificia Universidad Católica del Perú</strong>.
            </p>
            <p>
              El trabajo de investigación representa una síntesis única entre la experiencia práctica en el campo de la seguridad nacional y el análisis académico riguroso de los desafíos que enfrenta el Perú en materia de crimen organizado y corrupción. Ahí se detalla como nace y se aplica el Método de Investigación Prospectiva Compleja para combatir el crimen organizado y la corrupción en el poder.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <div className="pdf-viewer-container">
            <iframe
              src="/tesis.pdf"
              title="Tesis de Maestría"
              width="100%"
              height="800px"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TesisMaestriaPage;
