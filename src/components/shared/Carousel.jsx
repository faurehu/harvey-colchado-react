import React, { useState, useEffect } from 'react';

function Carousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const changeSlide = (direction) => {
    let newIndex = currentSlideIndex + direction;

    if (newIndex >= slides.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    showSlide(newIndex);
  };

  const goToSlide = (index) => {
    showSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <>
      <div className="carousel-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlideIndex ? 'active' : ''}`}
          >
            <img src={slide} alt={`Carrusel ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="metodo-hero-overlay"></div>
      <div className="metodo-hero-content">
        <div className="metodo-hero-text">
          <h1>El Método Colchado</h1>
          <p>
            Este método combina mi experiencia en lucha contra la criminalidad y corrupción
            con el Método de Investigación Prospectiva Compleja para desarticular organizaciones
            criminales. Con esto he desarrollado 4 propuestas clave para terminar con la corrupción
            en el poder.
          </p>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>‹</button>
          <button className="carousel-btn next" onClick={() => changeSlide(1)}>›</button>
        </div>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Carousel;
