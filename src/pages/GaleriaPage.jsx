import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import './GaleriaPage.css';

// Static data hoisted to module level to avoid recreation on every render
const GALLERY_IMAGES = [
  '/images/gallery/IMG_2565.jpeg',
  '/images/gallery/IMG_2566.jpeg',
  '/images/gallery/IMG_2567.jpeg',
  '/images/gallery/IMG_2568.jpeg',
  '/images/gallery/IMG_2569.jpeg',
  '/images/gallery/IMG_2582.jpeg',
  '/images/gallery/IMG_2571.jpeg',
  '/images/gallery/IMG_2572.jpeg',
  '/images/gallery/IMG_2573.jpeg'
];

const MIN_SWIPE_DISTANCE = 50;

function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToNext, goToPrevious]);

  return (
    <>
      <Helmet>
        <title>Galería - Harvey Colchado | Imágenes y Apariciones en Medios</title>
        <meta name="description" content="Galería de imágenes de Harvey Colchado. Apariciones en medios de comunicación destacando su trabajo y compromiso con la justicia y la transparencia." />
        <meta name="keywords" content="galería Harvey Colchado, fotos Harvey Colchado, medios de comunicación, apariciones públicas, imágenes campaña 2026" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harveycolchado.pe/galeria" />
        <meta property="og:title" content="Galería - Harvey Colchado" />
        <meta property="og:description" content="Galería de imágenes de Harvey Colchado y sus apariciones en medios de comunicación." />
        <meta property="og:image" content="https://harveycolchado.pe/images/gallery/IMG_2565.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harveycolchado.pe/galeria" />
        <meta property="twitter:title" content="Galería - Harvey Colchado" />
        <meta property="twitter:description" content="Galería de imágenes de Harvey Colchado y sus apariciones en medios." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.pe/galeria" />
      </Helmet>

      {/* Sección Principal de Galería */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <h2>Galería</h2>
          <div className="apoyo-content">
            <p>
              Una muestra aleatoria de apariciones en medios de comunicación que destacan
              el trabajo de Harvey Colchado y su compromiso con la justicia y la transparencia.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Imágenes */}
      <section className="apoyo-section apoyo-azul gallery-section-tight">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={image} alt={`Galería \${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedIndex !== null && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <span className="gallery-modal-close">&times;</span>
          <button
            className="gallery-modal-arrow gallery-modal-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            &#10094;
          </button>
          <img
            className="gallery-modal-content"
            src={GALLERY_IMAGES[selectedIndex]}
            alt="Imagen ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="gallery-modal-arrow gallery-modal-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}

export default GaleriaPage;
