import React from 'react';
import { Helmet } from 'react-helmet-async';

function VerdadOMitoPage() {
  return (
    <>
      <Helmet>
        <title>Verdad o Mito - Harvey Colchado | Tumbando Mitos</title>
        <meta name="description" content="Desmintiendo mitos y desinformación sobre Harvey Colchado. Aclaraciones basadas en hechos sobre su trayectoria profesional y acusaciones políticas." />
        <meta name="keywords" content="mitos Harvey Colchado, verdad o mito, desinformación política, fact checking Perú, aclaraciones Harvey Colchado" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/verdad-o-mito" />
        <meta property="og:title" content="Verdad o Mito - Harvey Colchado | Tumbando Mitos" />
        <meta property="og:description" content="Desmintiendo mitos y desinformación sobre Harvey Colchado con hechos verificables." />
        <meta property="og:image" content="https://harveycolchado.com.pe/images/verdadomito/portada-mitos.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/verdad-o-mito" />
        <meta property="twitter:title" content="Verdad o Mito - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/verdad-o-mito" />
      </Helmet>

      {/* Hero Section con Imagen */}
      <section className="mitos-hero">
        <img className="hero-image" src="/images/verdadomito/portada-mitos.png" alt="Tumbando Mitos" loading="lazy" />
        <div className="mitos-hero-content">
          <h1>Tumbando Mitos</h1>
          <p>Recopilamos los mitos más usuales que se han comentado desde frentes políticos que buscan confusión del electorado. ¡Te ayudamos a clarificarlos!</p>
        </div>
      </section>

      {/* Mito 1 Section */}
      <section className="mito-section mito-amarillo">
        <div className="container">
          <h2>Mito 1</h2>
          <div className="mito-content">
            <h3>Harvey Colchado es el "policía político" de Gustavo Gorriti.</h3>
            <h4 className="mito-veredicto falso">FALSO</h4>
            <p>Esta narrativa ha sido impulsada principalmente por personas y sectores políticos que han sido o son investigados por corrupción, y amplificada por medios con una línea editorial afín a esos intereses. Colchado actuó como funcionario policial dentro del marco legal y bajo conducción fiscal, en particular cuando la DIVIAC —unidad que dirigió— investigó el caso Cuellos Blancos, una red de corrupción enquistada en el sistema de justicia que manipulaba nombramientos, sentencias y favores. La acusación más directa contra Colchado proviene de un expolicía que trabajó en la DIVIAC y que posteriormente fue investigado por su propia unidad por presunta filtración de información y colusión con investigados vinculados al caso Cuellos Blancos.</p>
            <p>A la fecha, no existe ninguna carpeta fiscal, acusación formal ni resolución judicial que acredite que Harvey Colchado haya actuado como operador político, haya coordinado ilegalmente con periodistas o haya direccionado investigaciones fuera de la ley. No es casual que este tipo de señalamientos no existieran cuando investigaba narcotráfico, sicariato o terrorismo, sino que aparecieran recién cuando su trabajo comenzó a afectar directamente redes de corrupción vinculadas al poder político y judicial, contexto en el cual el periodismo de investigación cumple una función democrática esencial al revelar independientemente información de interés público que sale a la luz porque previamente se cometieron actos ilícitos.</p>

            <div className="mito-images">
              <img src="/images/verdadomito/mito1.png" alt="Mito 1 - Harvey Colchado" className="mito-image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerdadOMitoPage;
