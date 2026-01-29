import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MonitoreoDepincriPage() {
  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>Gestión del monitoreo y evaluación del desempeño de Depincri en Lima - Harvey Colchado</title>
        <meta name="description" content="Estudio sobre la gestión del monitoreo y evaluación del desempeño en los Departamentos de Investigación Criminal (Depincri) de Lima Metropolitana." />
        <meta name="keywords" content="Depincri, monitoreo, evaluación desempeño, investigación criminal, Lima, Harvey Colchado, policía nacional" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://harveycolchado.pe/conocimiento/monitoreo-depincri" />
        <meta property="og:title" content="Gestión del monitoreo y evaluación del desempeño de Depincri en Lima - Harvey Colchado" />
        <meta property="og:description" content="Estudio sobre la gestión del monitoreo y evaluación del desempeño en los Depincri de Lima Metropolitana." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.pe/conocimiento/monitoreo-depincri" />
        <meta property="twitter:title" content="Gestión del monitoreo y evaluación del desempeño de Depincri en Lima - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.pe/conocimiento/monitoreo-depincri" />
      </Helmet>

      {/* Header Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/conocimiento" className="back-link">← Volver</Link>
          <h2><span style={{ display: 'block', maxWidth: '700px', margin: '0 auto' }}>Gestión del monitoreo y evaluación del desempeño de Depincri en Lima</span></h2>
        </div>
      </section>

      {/* Description Section */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-post-content">
            <p>
              La modernización de la gestión pública en el Perú ha incorporado, en las últimas décadas, mecanismos de seguimiento y evaluación orientados a fortalecer la rendición de cuentas, la transparencia y la eficacia institucional. En este marco, la Policía Nacional del Perú enfrenta el reto de adaptar dichos instrumentos a la gestión operativa y estratégica de sus unidades especializadas. El presente estudio examina la gestión del monitoreo y evaluación del desempeño en los Departamentos de Investigación Criminal (Depincri) de Lima Metropolitana, con el propósito de identificar los factores que condicionan su desarrollo, consistencia técnica y efectividad institucional. Se adoptó un enfoque mixto que combinó entrevistas semiestructuradas con análisis documental y estadístico descriptivo de fuentes policiales e institucionales. Los hallazgos revelan una heterogeneidad significativa en los indicadores de desempeño, deficiencias en los protocolos de depuración y resguardo de datos, así como brechas estructurales derivadas de la ausencia de directivas específicas, la limitada capacitación técnica en gestión de información y la falta de interoperabilidad entre sistemas informáticos. El estudio concluye que la consolidación de un diseño metodológico de monitoreo y evaluación contextualizado, técnicamente integrado y adaptado a las particularidades del trabajo investigativo, resulta esencial para optimizar la gestión del desempeño policial y fortalecer la institucionalidad en el ámbito de la seguridad pública.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <div className="pdf-viewer-container">
            <iframe
              src="/Cuaderno de trabajo 74 V1.pdf"
              title="Gestión del monitoreo y evaluación del desempeño de Depincri en Lima"
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

export default MonitoreoDepincriPage;
