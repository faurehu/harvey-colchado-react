import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getNotaBySlug } from '../data/notasDePrensa';

function NotaDePrensaDetailPage() {
  const { slug } = useParams();
  const nota = getNotaBySlug(slug);

  // Redirect to main page if nota not found
  if (!nota) {
    return <Navigate to="/notas-de-prensa" replace />;
  }

  const formattedDate = new Date(nota.date).toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>{nota.title} - Harvey Colchado</title>
        <meta name="description" content={nota.subtitle} />
        <meta name="keywords" content={`notas de prensa Harvey Colchado, ${nota.title.toLowerCase()}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://harveycolchado.pe/notas-de-prensa/${nota.slug}`} />
        <meta property="og:title" content={nota.title} />
        <meta property="og:description" content={nota.subtitle} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://harveycolchado.pe/notas-de-prensa/${nota.slug}`} />
        <meta property="twitter:title" content={nota.title} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://harveycolchado.pe/notas-de-prensa/${nota.slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/notas-de-prensa" className="back-link">← Volver</Link>
          <h2>Nota de Prensa</h2>
        </div>
      </section>

      {/* Press Note Content */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <article className="press-note">
            <header className="press-note-header">
              <h3>{nota.title}</h3>
              <p className="press-note-subtitle"><strong>{nota.subtitle}</strong></p>
              <p className="press-note-date">{nota.location}, {formattedDate}.</p>
            </header>
            <div className="press-note-content">
              {nota.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {nota.cta && (
              <div className="press-note-cta">
                <a href={nota.cta.url} target="_blank" rel="noopener noreferrer">
                  {nota.cta.text} →
                </a>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}

export default NotaDePrensaDetailPage;
