import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LeyesProCrimenPage() {
  const [selectedMatrix, setSelectedMatrix] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedLaw, setExpandedLaw] = useState(null);

  const votingMatrices = [
    { name: 'Ahora Nación', image: '/images/pro-crimen/Ahora_Nación_matrix.png' },
    { name: 'Alianza Electoral Venceremos', image: '/images/pro-crimen/ALIANZA_ELECTORAL_VENCEREMOS_matrix.png' },
    { name: 'Alianza para el Progreso (APP)', image: '/images/pro-crimen/Alianza_para_el_Progreso_(APP)_matrix.png' },
    { name: 'Avanza País', image: '/images/pro-crimen/Avanza_País_–_Partido_de_Integración_Social_matrix.png' },
    { name: 'Fuerza Popular', image: '/images/pro-crimen/FUERZA_POPULAR_matrix.png' },
    { name: 'Juntos por el Perú', image: '/images/pro-crimen/Juntos_por_el_Perú_matrix.png' },
    { name: 'Partido Democrático Somos Perú', image: '/images/pro-crimen/Partido_Democrático_Somos_Perú_matrix.png' },
    { name: 'Partido País para Todos', image: '/images/pro-crimen/Partido_País_para_Todos_matrix.png' },
    { name: 'Partido Político Cooperación Popular', image: '/images/pro-crimen/Partido_Político_Cooperación_Popular_matrix.png' },
    { name: 'Partido Político Nacional Perú Libre', image: '/images/pro-crimen/Partido_Político_Nacional_Perú_Libre_matrix.png' },
    { name: 'Partido Político Perú Primero', image: '/images/pro-crimen/Partido_Político_Perú_Primero_matrix.png' },
    { name: 'Partido SíCreo', image: '/images/pro-crimen/Partido_SíCreo_matrix.png' },
    { name: 'Podemos Perú', image: '/images/pro-crimen/Podemos_Perú_matrix.png' },
    { name: 'Progresemos', image: '/images/pro-crimen/PROGRESEMOS_matrix.png' },
    { name: 'Renovación Popular', image: '/images/pro-crimen/Renovación_Popular_matrix.png' },
    { name: 'Unidad Nacional', image: '/images/pro-crimen/UNIDAD_NACIONAL_matrix.png' }
  ];

  const goToNext = () => {
    setSelectedMatrix((prev) => (prev + 1) % votingMatrices.length);
  };

  const goToPrevious = () => {
    setSelectedMatrix((prev) => (prev - 1 + votingMatrices.length) % votingMatrices.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % votingMatrices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + votingMatrices.length) % votingMatrices.length);
  };

  const toggleLaw = (lawNumber) => {
    setExpandedLaw(expandedLaw === lawNumber ? null : lawNumber);
  };

  const laws = [
    {
      number: 1,
      title: "Ley 31990 - Debilitamiento de la Colaboración Eficaz",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica el proceso especial por colaboración eficaz introduciendo mayores exigencias
            procedimentales como la grabación audiovisual obligatoria de las declaraciones del aspirante a colaborador, y
            establece plazos de 8 meses (prorrogables por 4 u 8 meses adicionales si es crimen organizado) para la fase de
            corroboración.
          </p>
          <p>
            <strong>Beneficiados:</strong> Principalmente organizaciones criminales, redes de corrupción y altos funcionarios
            que dependen del silencio y la intimidación para sostener su impunidad. Afecta investigaciones relacionadas a
            Odebrecht, Cuellos Blancos del Puerto y Los Intocables de la Corrupción, que involucran a políticos como Fuerza Popular.
          </p>
          <p>
            <strong>Afectados:</strong> El Ministerio Público y el sistema de justicia, al limitar una herramienta eficaz para
            desarticular el crimen organizado. Perjudica a la ciudadanía, debilitando la capacidad del Estado para investigar
            delitos de corrupción, extorsión y sicariato.
          </p>
        </>
      )
    },
    {
      number: 2,
      title: "Ley 32108 - Blindaje a Organizaciones Criminales y Partidos Políticos",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Eleva los estándares para sancionar el delito de organización criminal, exigiendo que
            cometan delitos con penas superiores a 6 años, una "compleja estructura" y "control de la cadena de valor de un mercado
            ilegal". Además, prohíbe el bloqueo de cuentas y bienes de organizaciones políticas en investigaciones penales, y
            establece que los allanamientos requieren la presencia del investigado y su abogado.
          </p>
          <p>
            <strong>Beneficiados:</strong> Organizaciones criminales con estructuras flexibles, redes de corrupción en la
            administración pública, y partidos políticos investigados como Fuerza Popular, que ven prohibido el bloqueo de sus bienes.
          </p>
          <p>
            <strong>Afectados:</strong> El Ministerio Público, la Policía Nacional y el Poder Judicial, al restringirse herramientas
            para investigar el crimen organizado. Las víctimas de extorsión, sicariato y corrupción ven debilitada la capacidad del
            Estado para desarticular estas redes.
          </p>
          <p>
            <strong>Nota:</strong> La Ley 32108 fue modificada por la Ley 32138 respecto al delito de organización criminal y las
            reglas del allanamiento, pero se mantiene la protección a los bienes de partidos políticos.
          </p>
        </>
      )
    },
    {
      number: 3,
      title: "Ley 32138 - Más Obstáculos contra el Crimen Organizado",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica nuevamente el artículo 317 del Código Penal estableciendo que debe concurrir
            una pena mínima de 5 años, "una compleja estructura desarrollada y mayor capacidad operativa" y el fin de obtener
            beneficio económico. Para allanamientos, el fiscal debe convocar a la defensa pública desde el inicio.
          </p>
          <p>
            <strong>Beneficiados:</strong> Organizaciones criminales con estructuras flexibles o informales que quedan fuera del
            tipo penal. Favorece a personas investigadas por organización criminal en partidos como Perú Libre, Podemos Perú,
            APP, Renovación Popular y Acción Popular.
          </p>
          <p>
            <strong>Afectados:</strong> La Policía Nacional y las fiscalías especializadas enfrentan estándares probatorios más altos
            y antitécnicos. Las víctimas de extorsión, sicariato y corrupción ven reducida la capacidad del Estado para desarticular
            redes delictivas.
          </p>
        </>
      )
    },
    {
      number: 4,
      title: "Ley 32130 - Traslado del Poder de Investigación a la Policía",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica ampliamente el Código Procesal Penal desplazando la conducción de la investigación
            preliminar del Ministerio Público hacia la Policía Nacional, reduciendo los plazos de interceptación telefónica a 120 días
            máximo, reiterando la asignación obligatoria de abogado defensor en allanamientos, y equiparando las medidas de
            comparecencia con los plazos de prisión preventiva.
          </p>
          <p>
            <strong>Beneficiados:</strong> La PNP asume el control operativo de las investigaciones penales, lo cual es peligroso
            considerando los graves problemas de corrupción en la institución (hasta 300 policías implicados en extorsión,
            narcotráfico y bandas organizadas). Beneficia también a criminales y políticos al reducir la interceptación telefónica,
            haciendo inviable el seguimiento de tramas complejas de extorsión y corrupción.
          </p>
          <p>
            <strong>Afectados:</strong> La población ve afectado su acceso a la justicia. Queda desprotegida ante el crimen organizado
            y un poder policial que genera desconfianza pero ahora tiene más facultades para encubrir a sus malos elementos.
          </p>
        </>
      )
    },
    {
      number: 5,
      title: "Ley 32326 - Blindaje de Activos Ilícitos",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica el decreto legislativo 1373 sobre extinción de dominio, condicionando su aplicación
            a la existencia de una sentencia penal firme y consentida, con excepciones limitadas a determinados delitos graves.
          </p>
          <p>
            <strong>Beneficiados:</strong> Organizaciones criminales, redes de corrupción y lavadores de activos ganan tiempo para
            ocultar, transferir o consolidar su patrimonio ilícito durante procesos penales prolongados. Afecta casos relacionados
            a Vladimir Cerrón, Rodolfo Orellana, Alejandro Toledo, PPK, Caso "Artemio" y Vizcarra.
          </p>
          <p>
            <strong>Afectados:</strong> El Ministerio Público, el Poder Judicial y el Estado en su capacidad de recuperación de activos,
            porque la norma elimina la autonomía de la extinción de dominio y la supedita a una sentencia penal firme.
          </p>
        </>
      )
    },
    {
      number: 6,
      title: "Ley 31989 - Protección a la Minería Ilegal",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Deroga la disposición que permitía a la Policía Nacional aplicar medidas contra personas
            inscritas en el REINFO con inscripción suspendida sorprendidas en posesión de explosivos sin autorización. Elimina
            la exclusión automática del REINFO y debilita los mecanismos preventivos contra el uso ilegal de explosivos en minería.
          </p>
          <p>
            <strong>Beneficiados:</strong> Operadores de minería ilegal e informal que mantienen su inscripción en el REINFO
            irregularmente. Redes criminales vinculadas a la minería ilegal que usan explosivos, los cuales son desviados para
            atentados y extorsiones en todo el país.
          </p>
          <p>
            <strong>Afectados:</strong> La Policía Nacional pierde herramientas efectivas contra el uso ilegal de explosivos.
            La población sufre porque estos explosivos se comercializan y utilizan para atentados y extorsiones, afectando la
            seguridad ciudadana.
          </p>
        </>
      )
    },
    {
      number: 7,
      title: "Ley 32054 - Inmunidad para Partidos Políticos Criminales",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica el Código Penal y la Ley 30424 para excluir de sanciones (como disolución,
            clausura o suspensión de actividades) a los partidos políticos por delitos cometidos mediante su estructura,
            impidiendo que sean disueltos.
          </p>
          <p>
            <strong>Beneficiados:</strong> La mayoría de partidos políticos en el Congreso. Fuerza Popular invocó esta norma en el
            caso Lava Jato. Otros partidos en investigación incluyen Perú Libre, Podemos Perú y Renovación Popular. Los fiscales
            quedan impedidos de solicitar la disolución de estas organizaciones.
          </p>
          <p>
            <strong>Afectados:</strong> Toda la población peruana, porque pervierte la democracia contaminando la política de dinero
            mal habido y corrupción, apoderándose de partidos que ya no pertenecen al pueblo.
          </p>
        </>
      )
    },
    {
      number: 8,
      title: "Ley 31751 - \"Ley Soto\": Prescripción Express para Corruptos",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica el artículo 84 del Código Penal estableciendo que la suspensión del plazo de
            prescripción no puede ser mayor a un año. Anteriormente no tenía límite. Favorece la impunidad de altos funcionarios
            con antejuicio, porque el proceso no puede avanzar hasta que el Congreso apruebe la denuncia constitucional, pero
            ahora la prescripción solo se suspende un año.
          </p>
          <p>
            <strong>Beneficiados:</strong> Casos emblemáticos son Alejandro Soto Reyes y Waldemar Cerrón Rojas, Joaquín Ramírez,
            quienes lograron archivar sus casos gracias a esta ley. Altos funcionarios como congresistas que entrampan sus denuncias
            constitucionales para que prescriban sus delitos.
          </p>
          <p>
            <strong>Afectados:</strong> El Ministerio Público, el Poder Judicial y las víctimas, porque reduce drásticamente los
            márgenes temporales para investigar casos complejos. Se afecta especialmente la persecución penal de delitos de
            corrupción y criminalidad común.
          </p>
          <p>
            <strong>Nota:</strong> El Congreso aprobó la Ley 32104 para forzar a los jueces a aplicar obligatoriamente la "Ley Soto",
            en detrimento del control difuso que pueden realizar frente a leyes inconstitucionales.
          </p>
        </>
      )
    },
    {
      number: 9,
      title: "Ley 32104 - Obligación de Aplicar la \"Ley Soto\"",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Precisa la aplicación de la Ley 31751 buscando que los operadores del sistema de justicia
            apliquen obligatoriamente la "Ley Soto", en detrimento del control difuso que pueden realizar los jueces frente a
            leyes inconstitucionales.
          </p>
          <p>
            <strong>Beneficiarios y Afectados:</strong> Los mismos que la Ley 31751.
          </p>
          <p>
            <strong>Nota:</strong> Pese a que la Corte Suprema en dos resoluciones ha señalado la inconstitucionalidad de esta ley,
            no es obstáculo para que un juez se aparte de estos pronunciamientos y aplique la ley, generando casos de impunidad.
          </p>
        </>
      )
    },
    {
      number: 10,
      title: "Ley 31973 - Deforestación Legalizada",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Modifica la Ley Forestal y de Fauna Silvestre estableciendo una excepción que permite
            regularizar predios ya deforestados que desarrollan actividades agropecuarias, incluso en zonas clasificadas como bosques.
            Elimina la clasificación de tierras por capacidad de uso mayor y la autorización previa de cambio de uso. Autoriza el
            retiro de hasta 70% de cobertura boscosa sin evaluación técnica ambiental previa, permitiendo deforestar primero y
            regularizar después. Debilita el delito de tala ilegal al suprimir la exigencia de autorización administrativa.
          </p>
          <p>
            <strong>Beneficiados:</strong> Grandes y medianos actores económicos que ya habían deforestado bosques para expandir
            actividades agropecuarias y agroindustriales. Empresas y operadores con investigaciones en curso, ya que se debilita
            el delito de tala ilegal y permite archivo de procesos.
          </p>
          <p>
            <strong>Afectados:</strong> El Estado y su capacidad de gobernanza ambiental (SERFOR, gobiernos regionales, Ministerio
            del Ambiente). Los pueblos indígenas y comunidades amazónicas cuyos territorios quedan más expuestos a expansión
            agropecuaria y tráfico de tierras. El Ministerio Público y fiscalías ambientales ven reducida la eficacia del delito
            de tala ilegal.
          </p>
        </>
      )
    },
    {
      number: 11,
      title: "Ley 32107 - Prescripción de Crímenes de Lesa Humanidad",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Precisa que el Estatuto de Roma es vigente para el Perú desde el 1 de junio de 2002 y la
            Convención sobre Imprescriptibilidad de Crímenes de Guerra y de Lesa Humanidad desde el 9 de noviembre de 2003.
            Establece que los delitos cometidos antes de estas fechas prescriben según los plazos de la ley nacional.
          </p>
          <p>
            <strong>Beneficiados:</strong> Potenciales responsables (miembros de fuerzas armadas y policiales) de graves violaciones
            de derechos humanos durante el conflicto armado interno de las décadas de 1980 y 1990, al bloquear su persecución bajo
            la figura de crimen de lesa humanidad.
          </p>
          <p>
            <strong>Afectados:</strong> Los deudos de las víctimas de delitos de lesa humanidad cometidos por el ejército y la policía
            durante el conflicto armado. Esta ley puede aplicarse a casos como "Accomarca", "El Frontón", "Cayara" y "Los Cabitos".
          </p>
          <p>
            <strong>Nota:</strong> El Tribunal Constitucional declaró infundadas las demandas de inconstitucionalidad contra la
            Ley 32107, pues no se alcanzaron los 5 votos necesarios. Este TC fue elegido por los partidos del pacto en el Congreso.
          </p>
        </>
      )
    },
    {
      number: 12,
      title: "Ley 32419 - Amnistía \"Humanitaria\" para Violadores de Derechos Humanos",
      content: (
        <>
          <p>
            <strong>Contenido:</strong> Contiene dos beneficios proscritos en cualquier Estado de Derecho: 1) Concede amnistía a
            miembros de FFAA, PNP y rondas por su participación en la lucha contra el terrorismo entre 1980-2000; y 2) Concede
            amnistía de carácter humanitario a adultos mayores de 70 años participantes en esa lucha con sentencia firme.
          </p>
          <p>
            <strong>Beneficiados:</strong> Ley formulada por sectores militares y de derecha para beneficiar a militares y policías,
            especialmente de alto rango condenados o en procesos por casos emblemáticos (Cantuta, Barrios Altos, Accomarca, Frontón,
            Cabitos, Cashahui, Putis). Según Amnistía Internacional, impactará al menos 156 casos con sentencia firme. Según Human
            Rights Watch, puede detener más de 600 procesos en curso.
          </p>
          <p>
            <strong>Afectados:</strong> Familias y víctimas de violaciones de DDHH que se quedan sin acceso a la justicia, sin derecho
            a la verdad ni a reparaciones. Es una ley discriminatoria con un mensaje de impunidad que dice a la gente sin poder
            político, especialmente del interior, que la vida de los suyos no vale nada. Casos como Putis, Ayacucho (1984), donde
            123 personas incluyendo niños fueron asesinados, no valen nada para los políticos y militares del Congreso.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="conocimiento-page">
      {/* Header Section */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container blog-post-header">
          <Link to="/conocimiento" className="back-link">← Volver</Link>
          <h2>Leyes Pro Crimen</h2>
        </div>
      </section>

      {/* Introducción */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-post-content">
            <p>
              Entre 2021 y 2025, el Congreso peruano aprobó una serie de leyes que favorecen la delincuencia y la corrupción,
              en contra del clamor ciudadano por seguridad y justicia. Estas normas pro-impunidad han beneficiado a congresistas
              investigados, partidos implicados en financiamiento ilegal, mafias de minería y tala ilegal, redes de corrupción
              y hasta responsables de crímenes atroces.
            </p>
          </div>
        </div>
      </section>

      {/* Leyes Colapsables */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <div className="blog-post-content">
            <h3>Las 12 Leyes Pro Crimen</h3>
            <p>
              Haz clic en cada ley para ver los detalles sobre su contenido, quiénes se benefician y quiénes son los afectados.
            </p>
            <div className="laws-accordion">
              {laws.map((law) => (
                <div key={law.number} className={`law-item ${expandedLaw === law.number ? 'expanded' : ''}`}>
                  <div
                    className="law-header"
                    onClick={() => toggleLaw(law.number)}
                  >
                    <h4>{law.number}. {law.title}</h4>
                    <span className="law-toggle">{expandedLaw === law.number ? '−' : '+'}</span>
                  </div>
                  {expandedLaw === law.number && (
                    <div className="law-content">
                      {law.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Matrices de Votación - Carousel */}
      <section className="apoyo-section apoyo-azul">
        <div className="container">
          <div className="blog-post-content">
            <h3>Matrices de Votación por Partido</h3>
            <p>
              Las siguientes matrices muestran cómo votaron los legisladores actuales que se presentan a la reelección en las
              votaciones más importantes para estos proyectos de ley. Los gráficos están agrupados por el partido político por
              el que se postulan en las elecciones de 2026.
            </p>
          </div>

          <div className="voting-carousel">
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
              &#10094;
            </button>
            <div className="carousel-slide">
              <img
                src={votingMatrices[currentSlide].image}
                alt={`Matriz de votación ${votingMatrices[currentSlide].name}`}
                onClick={() => setSelectedMatrix(currentSlide)}
              />
              <p className="carousel-caption">{votingMatrices[currentSlide].name}</p>
            </div>
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
              &#10095;
            </button>
          </div>

          <div className="carousel-dots">
            {votingMatrices.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <div className="blog-post-content">
            <h3>Conclusión</h3>
            <p>
              Entre 2021 y 2025 el Congreso peruano aprobó una serie de leyes que favorecen la delincuencia y la corrupción,
              en contra del clamor ciudadano por seguridad y justicia. Estas normas pro-impunidad han beneficiado a congresistas
              investigados, partidos implicados en financiamiento ilegal, mafias de minería y tala ilegal, redes de corrupción
              y responsables de crímenes atroces. Derogarlas es urgente para restablecer el Estado de derecho.
            </p>
            <p>
              Es necesario adoptar una narrativa de mano firme contra la impunidad: denunciar que "el Congreso actuó como abogado
              de los delincuentes" y afirmar que se limpiarán estas leyes vergonzosas.
            </p>
            <p>
              Las derogatorias deben ser parte de un paquete legislativo de "Restauración de la Legalidad" para los primeros 100
              días de gobierno, que abrogue todas las leyes mencionadas y fortalezca las herramientas anticrímenes en concordancia
              con estándares internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Modal para matriz ampliada */}
      {selectedMatrix !== null && (
        <div className="gallery-modal" onClick={() => setSelectedMatrix(null)}>
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
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img
              className="gallery-modal-content"
              src={votingMatrices[selectedMatrix].image}
              alt={`Matriz ${votingMatrices[selectedMatrix].name}`}
            />
            <p className="modal-matrix-name">{votingMatrices[selectedMatrix].name}</p>
          </div>
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
    </div>
  );
}

export default LeyesProCrimenPage;
