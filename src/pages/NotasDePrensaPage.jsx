import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllNotas } from '../data/notasDePrensa';

function NotasDePrensaPage() {
  const notas = getAllNotas();

  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>Notas de Prensa - Harvey Colchado | Comunicados Oficiales</title>
        <meta name="description" content="Notas de prensa y comunicados oficiales de Harvey Colchado. Información verificada directamente de la fuente." />
        <meta name="keywords" content="notas de prensa Harvey Colchado, comunicados oficiales, declaraciones, medios de comunicación" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/notas-de-prensa" />
        <meta property="og:title" content="Notas de Prensa - Harvey Colchado" />
        <meta property="og:description" content="Notas de prensa y comunicados oficiales de Harvey Colchado." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/notas-de-prensa" />
        <meta property="twitter:title" content="Notas de Prensa - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/notas-de-prensa" />
      </Helmet>

      {/* Hero Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <h2>Notas de Prensa</h2>
          <div className="apoyo-content">
            <p>
              Comunicados oficiales y notas de prensa para medios de comunicación.
            </p>
          </div>
        </div>
      </section>

      {/* Press Notes List */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-posts-grid">
            {notas.map((nota) => (
              <article key={nota.id} className="blog-post-card">
                <h3><Link to={`/notas-de-prensa/${nota.slug}`}>{nota.title}</Link></h3>
                <p className="blog-post-description">{nota.subtitle}</p>
                <div className="blog-post-meta">
                  <Link to={`/notas-de-prensa/${nota.slug}`} className="blog-post-link">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotasDePrensaPage;
