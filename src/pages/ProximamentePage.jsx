import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ProximamentePage.css';

function ProximamentePage() {
  return (
    <>
      <Helmet>
        <title>Harvey Colchado | Nueva web en preparación</title>
        <meta name="description" content="Estamos trabajando en una nueva versión del sitio web de Harvey Colchado, diputado por Lima." />
      </Helmet>

      <main className="proximamente">
        <div className="proximamente-letrero">
          <p className="proximamente-cargo">Diputado por Lima · Segundo Vicepresidente de la Cámara de Diputados</p>
          <h1 className="proximamente-nombre">
            <span>Harvey</span>
            <span className="proximamente-rojo">Colchado</span>
          </h1>
          <span className="proximamente-regla" aria-hidden="true"></span>
          <p className="proximamente-titular">Pronto, una nueva web</p>
          <p className="proximamente-texto">Estamos trabajando en una nueva versión de este sitio.</p>
        </div>
      </main>
    </>
  );
}

export default ProximamentePage;
