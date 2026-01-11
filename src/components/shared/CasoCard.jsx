import React, { useState } from 'react';

function CasoCard({ titulo, imagen, descripcion, enlace, enlaceTexto = 'LINK DE NOTICIA' }) {
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="caso-card-wrapper">
      <div className="caso-card">
        <h3 className="caso-card-titulo">{titulo}</h3>
        <div className="caso-card-imagen-container" onClick={handleImageClick}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={imagen.replace('/images/', '/images/').replace(/\.(png|jpg|jpeg)$/i, '-desktop.webp').replace(/caso-emblematico/, 'optimized/caso-emblematico')}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={imagen.replace('/images/', '/images/').replace(/\.(png|jpg|jpeg)$/i, '-tablet.webp').replace(/caso-emblematico/, 'optimized/caso-emblematico')}
              type="image/webp"
            />
            <source
              srcSet={imagen.replace('/images/', '/images/').replace(/\.(png|jpg|jpeg)$/i, '-mobile.webp').replace(/caso-emblematico/, 'optimized/caso-emblematico')}
              type="image/webp"
            />
            <img
              className="caso-card-imagen"
              src={imagen}
              alt={titulo}
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </picture>
          <span className="click-hint">
            {expanded ? 'Click para ocultar' : 'Click para ver más'}
          </span>
        </div>
        <p className={`caso-card-descripcion ${expanded ? 'expanded' : ''}`}>
          {descripcion}
        </p>
        <a
          className="caso-card-enlace"
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
        >
          {enlaceTexto}
        </a>
      </div>
    </div>
  );
}

export default CasoCard;
