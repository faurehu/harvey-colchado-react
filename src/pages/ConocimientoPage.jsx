import React from 'react';
import Mascot from '../components/shared/Mascot';

function ConocimientoPage() {
  return (
    <>
      {/* Sección Principal de Conocimiento */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <h2>Conocimiento</h2>
          <div className="apoyo-content">
            <p>
              Esta sección está dedicada a compartir información, recursos y conocimientos
              que consideramos importantes para el desarrollo de nuestra comunidad. Aquí
              encontrarás contenido educativo, análisis y materiales que te ayudarán a
              entender mejor los temas que nos importan.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Recursos */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <h2>Recursos Disponibles</h2>
          <div className="apoyo-content">
            <p>
              Próximamente estaremos compartiendo artículos, documentos y materiales
              educativos que te permitirán profundizar en los temas que nos ocupan.
              Mantente atento a las actualizaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Mascot Component */}
      <Mascot />
    </>
  );
}

export default ConocimientoPage;
