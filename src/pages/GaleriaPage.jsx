import React from 'react';
import Mascot from '../components/shared/Mascot';

function GaleriaPage() {
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
          <h2>Momentos de la Campaña</h2>
          <div className="apoyo-content">
            <p>
              Próximamente estaremos compartiendo fotografías y videos de nuestras
              actividades, eventos y encuentros con la comunidad. Esta galería se
              irá actualizando constantemente con nuevo contenido.
            </p>
          </div>
        </div>
      </section>

      {/* Mascot Component */}
      <Mascot />
    </>
  );
}

export default GaleriaPage;
