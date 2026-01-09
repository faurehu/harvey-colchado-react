import React, { useState, useEffect } from 'react';
import './GaleriaPage.css';

function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    '/images/gallery/IMG_2565.jpeg',
    '/images/gallery/IMG_2566.jpeg',
    '/images/gallery/IMG_2567.jpeg',
    '/images/gallery/IMG_2568.jpeg',
    '/images/gallery/IMG_2569.jpeg',
    '/images/gallery/IMG_2570.jpeg',
    '/images/gallery/IMG_2571.jpeg',
    '/images/gallery/IMG_2572.jpeg',
    '/images/gallery/IMG_2573.jpeg'
  ];

  const minSwipeDistance = 50;

  const goToNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

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
  }, [selectedIndex]);

  return (
    <>
      {/* Sección Principal de Galería */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <h2>Galería</h2>
          <div className="apoyo-content">
            <p>
              Bienvenido a nuestra galería de imágenes. Aquí compartimos momentos importantes,
              eventos de campaña, actividades comunitarias y todo lo que refleja nuestro
              trabajo y compromiso con la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Imágenes */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <h2>Menciones en medios</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={image} alt={`Galería ${index + 1}`} />
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
            src={images[selectedIndex]}
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
