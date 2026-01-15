import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../components/shared/Carousel';

function TransparenciaPage() {
  const slides = [
    '/images/propuestas/carrusell/carrusel_8.png',
    '/images/propuestas/carrusell/carrusel_9.png',
    '/images/propuestas/carrusell/carrusel_10.png'
  ];

  return (
    <>
      <Helmet>
        <title>Transparencia - Harvey Colchado 2026 | Financiamiento de Campaña</title>
        <meta name="description" content="Transparencia en el financiamiento de la campaña Harvey Colchado 2026. Información sobre ingresos y gastos de campaña con rendición de cuentas a la ciudadanía." />
        <meta name="keywords" content="transparencia Harvey Colchado, financiamiento campaña, rendición de cuentas, gastos campaña 2026, ingresos campaña" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/transparencia" />
        <meta property="og:title" content="Transparencia - Harvey Colchado 2026" />
        <meta property="og:description" content="Transparencia en el financiamiento de la campaña con rendición de cuentas a la ciudadanía." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/transparencia" />
        <meta property="twitter:title" content="Transparencia - Harvey Colchado 2026" />
        <meta property="twitter:description" content="Información transparente sobre el financiamiento de la campaña." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/transparencia" />
      </Helmet>

      {/* Carousel Section */}
      <section className="metodo-hero metodo-hero-transparencia">
        <Carousel slides={slides} />
      </section>

      {/* Título de la página */}
      <section className="noticias-header">
        <h1>¿Cómo financiamos nuestra campaña?</h1>
      </section>

      {/* Contenido de transparencia */}
      <section className="transparencia-content">
        <div className="container">
          <div className="transparencia-text">
            <p>Esta campaña se guía por un compromiso firme con la transparencia y la rendición de cuentas, por lo que ponemos a disposición de la ciudadanía mecanismos para conocer de manera clara y oportuna los ingresos y gastos que la sostienen.</p>

            <p>En esta sección habilitaremos próximamente un formulario para que cualquier persona pueda solicitar esa información, reafirmando que creemos en una democracia que se fortalece cuando la ciudadanía puede vigilar, preguntar y exigir.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TransparenciaPage;
