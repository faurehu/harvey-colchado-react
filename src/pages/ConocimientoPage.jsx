import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ConocimientoPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Las Leyes Pro Crimen',
      description: 'Análisis de las leyes que favorecen la impunidad y el crimen organizado en el Perú.',
      url: '/conocimiento/leyes-pro-crimen'
    },
    {
      id: 2,
      title: 'Biografía',
      description: 'La historia y trayectoria del Coronel Harvey Colchado en su lucha contra la corrupción.',
      url: '/conocimiento/biografia'
    },
    {
      id: 3,
      title: 'Tésis de Maestría en Gobierno y Políticas Públicas',
      description: 'Investigación académica sobre seguridad nacional y lucha contra el crimen organizado.',
      url: '/conocimiento/tesis-maestria'
    }
  ];

  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>Conocimiento - Harvey Colchado | Artículos y Análisis</title>
        <meta name="description" content="Centro de conocimiento sobre temas de seguridad, justicia y políticas públicas. Leyes pro crimen, biografía de Harvey Colchado y tesis de maestría." />
        <meta name="keywords" content="conocimiento Harvey Colchado, leyes pro crimen, análisis político Perú, tesis maestría, seguridad ciudadana" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.com.pe/conocimiento" />
        <meta property="og:title" content="Conocimiento - Harvey Colchado" />
        <meta property="og:description" content="Artículos y análisis sobre seguridad, justicia y políticas públicas en el Perú." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/conocimiento" />
        <meta property="twitter:title" content="Conocimiento - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/conocimiento" />
      </Helmet>

      {/* Hero Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <h2>Conocimiento</h2>
          <div className="apoyo-content">
            <p>
              Artículos, documentos y análisis sobre temas importantes para nuestra nación.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <h3>{post.title}</h3>
                <p className="blog-post-description">{post.description}</p>
                <div className="blog-post-meta">
                  <Link to={post.url} className="blog-post-link">Leer más →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConocimientoPage;
