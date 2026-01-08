import React from 'react';

function NoticiasPage() {
  return (
    <>
      {/* Título de la página */}
      <section className="noticias-header">
        <h1>Nuestro Compromiso</h1>
      </section>

      {/* Contenido de transparencia */}
      <section className="transparencia-content">
        <div className="container">
          <div className="transparencia-text">
            <p>Esta campaña se guía por un compromiso firme con la transparencia y la rendición de cuentas, por lo que ponemos a disposición de la ciudadanía mecanismos para conocer de manera clara y oportuna los ingresos y gastos que la sostienen.</p>

            <p>En esta sección habilitaremos próximamente un formulario para que cualquier persona pueda solicitar esa información, reafirmando que creemos en una democracia que se fortalece cuando la ciudadanía puede vigilar, preguntar y exigir.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoticiasPage;
