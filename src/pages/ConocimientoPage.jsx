import React from 'react';
import { Link } from 'react-router-dom';

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
