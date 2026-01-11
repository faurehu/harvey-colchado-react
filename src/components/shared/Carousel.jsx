import React, { useState, useEffect, useCallback } from 'react';

function Carousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const changeSlide = useCallback((direction) => {
    setCurrentSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;

      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }

      return newIndex;
    });
  }, [slides.length]);

  const goToSlide = (index) => {
    showSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [changeSlide]);

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
          <h1>Nuestro compromiso</h1>
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
