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
          <img
            className="caso-card-imagen"
            src={imagen}
            alt={titulo}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
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
