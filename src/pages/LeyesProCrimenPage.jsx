import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
            <strong>¿Qué hace esta ley?</strong> Exige que toda declaración de aspirantes a colaborador eficaz sea grabada
            en video obligatoriamente y establece plazos estrictos de 8 meses (máximo 16 meses) para completar el proceso
            de corroboración.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> La grabación audiovisual obligatoria desincentiva la cooperación de
            quienes poseen información crucial sobre redes criminales o corrupción, por temor real a exposición, filtración,
            identificación y venganza criminal. Este requisito formal, que pudo parecer garantista, se ha convertido en un
            instrumento de intimidación psicológica que inhibe la delación voluntaria. Potenciales colaboradores de bandas
            dedicadas a extorsión, sicariato o corrupción prefieren guardar silencio antes que ser grabados.
          </p>
          <p>
            <strong>Impacto:</strong> Sin el marco normativo previo, casos como el "camarada Artemio", Los Babys de Oquendo,
            Los Cuellos Blancos del Puerto y más de 250 organizaciones criminales no habrían podido ser desarticuladas.
            Esta ley debilita los cimientos de la persecución penal moderna generando miedo, inhibición y silencio.
          </p>
        </>
      )
    },
    {
      number: 2,
      title: "Ley 32138 - Definición Imposible de Organización Criminal",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Eleva el umbral para calificar una organización criminal exigiendo:
            "compleja estructura desarrollada y mayor capacidad operativa", roles permanentes correlacionados, pena mínima
            de 5 años (antes 4), y fin de obtener beneficio económico.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> La mayoría de organizaciones criminales peruanas operan con modelos
            informales, de mando flexible y rápida rotación de miembros. Esta ley exige probar estructuras casi empresariales,
            haciendo prácticamente inaplicable la norma frente a las redes criminales que dominan territorios, extorsionan
            comerciantes o articulan sicariato. Contradice abiertamente la Convención de Palermo que solo exige "grupo
            estructurado de tres o más personas que actúe concertadamente" sin demandar complejidad ni estructura desarrollada.
          </p>
          <p>
            <strong>Impacto:</strong> Organizaciones criminales de extorsión en Lima y Trujillo, redes de tráfico ilegal
            de madera en la selva, y grupos de corrupción quedan fuera de esta definición. Se ha sustituido un concepto
            operativo por uno inalcanzable, divorciado de la realidad criminal del país. Las fiscalías deben ahora acreditar
            requisitos que ni siquiera el derecho internacional demanda, dejando en impunidad a los verdaderos generadores
            de violencia criminal.
          </p>
        </>
      )
    },
    {
      number: 3,
      title: "Ley 32108 - Allanamientos sin Sorpresa: Avisar al Delincuente",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Exige la presencia obligatoria del investigado y su abogado defensor durante
            los allanamientos. Si no tiene abogado, se debe proporcionar uno de oficio antes de ingresar al inmueble.
            Además, requiere "suficientes elementos probatorios" previos al allanamiento.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> El allanamiento se sustenta en los principios de oportunidad y sorpresa
            operativa, elementos esenciales para garantizar la eficacia del registro y la incautación de pruebas. Exigir la
            presencia del abogado convierte una diligencia que debía ser reservada y táctica en una actuación anticipada que
            otorga ventaja al investigado. La Policía y la Fiscalía pierden la iniciativa operativa, pues deben coordinar la
            asistencia de un abogado antes de ingresar, dilatando tiempos y exponiendo la diligencia a filtraciones o advertencias.
          </p>
          <p>
            <strong>Impacto:</strong> En contextos donde las organizaciones criminales controlan territorios y mantienen redes
            de informantes, cada minuto de retraso puede significar la pérdida de evidencia o la fuga de implicados. No puede
            imponerse una lógica burocrática garantista a una medida eminentemente táctica. En un país asediado por el crimen,
            la sorpresa y la oportunidad son una forma de defensa del Estado.
          </p>
        </>
      )
    },
    {
      number: 4,
      title: "Ley 32130 - Solo 4 Meses para Escuchar a los Criminales",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Limita la interceptación de comunicaciones (escuchas telefónicas) a un máximo
            de 60 días, prorrogable solo una vez por igual plazo. Es decir, máximo 120 días (4 meses) en total. La prórroga solo
            puede sustentarse en "nuevos y suficientes elementos probatorios".
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> Las organizaciones criminales de alto nivel, grupos de extorsión y tramas
            de corrupción estructural requieren investigaciones prolongadas, sostenidas y con seguimiento técnico continuo.
            Imponer un límite de cuatro meses es absurdo desde el punto de vista operativo, pues el propio ciclo de adaptación
            delictiva de estas redes supera con creces ese plazo. ¿Cómo puede pretenderse neutralizar estructuras que se
            infiltran en el Estado o dominan territorios, si se prohíbe escuchar sus comunicaciones después de apenas 120 días?
          </p>
          <p>
            <strong>Impacto:</strong> Si un extorsionador anuncia por teléfono que va a asesinar a su víctima o un funcionario
            corrupto conversa sobre cómo recibir sobornos, después de cuatro meses el Estado ya no puede escuchar nada más,
            ni actuar preventivamente. Las investigaciones de crimen organizado y corrupción requieren seguimiento técnico
            prolongado—muchas veces hasta por 36 meses. Esta reforma convierte una herramienta eficaz en una formalidad
            estéril, quitándole al Estado la capacidad de oír, anticipar y neutralizar el crimen antes de que mate, extorsione
            o robe nuevamente.
          </p>
        </>
      )
    },
    {
      number: 5,
      title: "Ley 32326 - Esperar Sentencia para Recuperar lo Robado",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Condiciona el proceso de extinción de dominio a la existencia de una sentencia
            firme y consentida, salvo para un conjunto muy restringido de delitos (narcotráfico, terrorismo, secuestro, extorsión,
            trata de personas, contrabando, minería ilegal, estafa y delitos informáticos). Excluye expresamente delitos de
            corrupción y lavado de activos.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> El proceso de extinción de dominio es un procedimiento jurisdiccional
            de carácter patrimonial, autónomo e independiente del proceso penal, que permite al Estado recuperar bienes,
            dinero o activos de origen ilícito, aun cuando no exista condena penal. Su eficacia radicaba en esa autonomía:
            el Estado podía actuar con rapidez y oportunidad para despojar a los delincuentes de los beneficios económicos
            del delito. Con esta modificación, ya no se podrá iniciar la extinción de dominio en casos de corrupción, lavado
            de activos, enriquecimiento ilícito o colusión sin una condena previa.
          </p>
          <p>
            <strong>Impacto:</strong> Organizaciones criminales, redes de corrupción y lavadores de activos ganan tiempo para
            ocultar, transferir o consolidar su patrimonio ilícito durante procesos penales prolongados que en el Perú pueden
            tardar más de una década. El Estado ya no podrá iniciar la recuperación de bienes hasta que exista una sentencia
            condenatoria, lo que en la práctica significa que no se puede hacer nada durante todo el proceso penal. Es una ley
            hecha a la medida de la impunidad.
          </p>
        </>
      )
    },
    {
      number: 6,
      title: "Ley 31989 - Explosivos Libres: De la Mina a tu Puerta",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Deroga la disposición que permitía a la Policía Nacional aplicar medidas
            inmediatas contra mineros ilegales con inscripción suspendida en el REINFO sorprendidos en posesión de explosivos
            sin autorización. Eliminaba la exclusión automática del REINFO y permitía actuar preventivamente.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> Antes, la Policía contaba con un mecanismo claro para actuar de manera
            inmediata ante el hallazgo de explosivos en zonas mineras informales, evitando burocracia judicial. La simple
            constatación de posesión ilegal de explosivos bastaba para excluir automáticamente del REINFO. Con esta derogación,
            se ha despojado a la PNP de una herramienta legal que articulaba control administrativo y reacción operativa,
            abriendo un vacío que hoy aprovechan mineros ilegales y redes criminales dedicadas al tráfico de explosivos.
          </p>
          <p>
            <strong>Impacto:</strong> En un momento en que el país enfrenta una ola de extorsiones y atentados con dinamita,
            muchos de estos materiales—extraídos, desviados o comercializados ilícitamente—vienen apareciendo en las puertas
            de pequeños comercios, viviendas y establecimientos, no solo como amenaza extorsiva, sino incluso explotando
            deliberadamente, causando terror entre la población. Otorgar mayor permisividad a la posesión y circulación de
            estos materiales equivale a debilitar la seguridad pública y exponer a los ciudadanos al miedo y la violencia cotidiana.
          </p>
        </>
      )
    },
    {
      number: 7,
      title: "Ley 32054 - Partidos Políticos: Intocables e Inmortales",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Excluye expresamente a los partidos políticos de las sanciones penales y
            administrativas que sí se aplican a cualquier otra persona jurídica cuando es utilizada para cometer delitos.
            Prohíbe específicamente la disolución, suspensión de actividades y ciertas sanciones pecuniarias derivadas de
            delitos como lavado de activos, financiamiento ilícito o corrupción.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> Si una empresa o fundación sirve como vehículo para lavar dinero, financiar
            actividades ilícitas o encubrir corrupción, puede ser sancionada con disolución o suspensión; pero si lo hace un
            partido político, queda fuera del alcance de la justicia penal. Este cambio vulnera el principio de igualdad ante
            la ley y rompe el equilibrio institucional del Estado, otorgando a las organizaciones políticas un estatus de
            impunidad que las coloca por encima de la Constitución. Es un acto legislativo de autoblindaje: el Congreso legisló
            para proteger a sus propios patrocinadores y estructuras partidarias.
          </p>
          <p>
            <strong>Impacto:</strong> Con esta ley, el Congreso ha creado organizaciones perpetuas e intocables, blindadas
            frente a la acción del Ministerio Público y del Poder Judicial. Un partido político puede ser instrumento para
            lavar dinero, recibir fondos ilícitos o encubrir sobornos, pero seguirá existiendo y participando en elecciones,
            bajo la excusa de que solo se sanciona a los individuos. Pervierte la democracia contaminando la política de dinero
            mal habido y corrupción.
          </p>
        </>
      )
    },
    {
      number: 8,
      title: "Ley 31751 - \"Ley Soto\": El Reloj Corre para la Impunidad",
      content: (
        <>
          <p>
            <strong>¿Qué hace esta ley?</strong> Modifica el artículo 84 del Código Penal estableciendo que la suspensión
            del plazo de prescripción no puede ser mayor a un año. Anteriormente no tenía límite. Además, la Ley 32104
            obliga a los jueces a aplicar esta norma, en detrimento del control difuso constitucional.
          </p>
          <p>
            <strong>¿Por qué es pro-crimen?</strong> Favorece especialmente la impunidad de altos funcionarios con antejuicio
            (prerrogativa que tienen congresistas, ministros y otros altos cargos), porque el proceso penal no puede avanzar
            hasta que el Congreso apruebe la denuncia constitucional. Antes, la prescripción se suspendía indefinidamente
            durante este trámite político. Ahora, la prescripción solo se suspende un año, permitiendo que congresistas
            entrampan deliberadamente sus denuncias constitucionales para que sus delitos prescriban automáticamente.
          </p>
          <p>
            <strong>Impacto:</strong> Casos emblemáticos como Alejandro Soto Reyes y Waldemar Cerrón Rojas lograron archivar
            sus casos gracias a esta ley. Reduce drásticamente los márgenes temporales para investigar casos complejos de
            corrupción. Pese a que la Corte Suprema ha señalado la inconstitucionalidad de esta ley en dos resoluciones,
            la Ley 32104 obliga a los jueces a aplicarla, generando casos de impunidad que vulneran el Estado de Derecho.
            Es prescripción express para corruptos con poder político.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="conocimiento-page">
      <Helmet>
        <title>Leyes Pro Crimen - Harvey Colchado | Análisis de Leyes que Favorecen la Impunidad</title>
        <meta name="description" content="Análisis detallado de las leyes que favorecen el crimen organizado y la impunidad en el Perú. Harvey Colchado expone cómo el Congreso ha debilitado la lucha contra la delincuencia." />
        <meta name="keywords" content="leyes pro crimen, impunidad Perú, crimen organizado, análisis legal, reforma congreso, Harvey Colchado" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://harveycolchado.com.pe/conocimiento/leyes-pro-crimen" />
        <meta property="og:title" content="Leyes Pro Crimen - Harvey Colchado" />
        <meta property="og:description" content="Análisis de las leyes que favorecen la impunidad y el crimen organizado en el Perú." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://harveycolchado.com.pe/conocimiento/leyes-pro-crimen" />
        <meta property="twitter:title" content="Leyes Pro Crimen - Harvey Colchado" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://harveycolchado.com.pe/conocimiento/leyes-pro-crimen" />
      </Helmet>

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
              En los últimos años, el país ha sido testigo de un preocupante proceso de <strong>desmantelamiento progresivo
              de las herramientas legales más efectivas contra el crimen organizado, la corrupción y la violencia criminal.</strong>
               Desde el Congreso de la República se ha impulsado y aprobado un conjunto de normas que, en lugar de fortalecer
              la persecución penal, la debilitan deliberadamente, restringiendo las facultades del Ministerio Público, la Policía
              Nacional del Perú y el Poder Judicial.
            </p>
            <p>
              Estas disposiciones, conocidas hoy como <strong>"leyes pro-crimen"</strong>, han alterado pilares esenciales del
              sistema de justicia penal y reducido la capacidad operativa del Estado para enfrentar las nuevas formas de criminalidad
              violenta y organizada que se expanden en el país. <strong>No puede haber—ni debe permitirse—el más mínimo ápice de
              flexibilidad o permisividad frente al crimen organizado.</strong> La respuesta del Estado debe ser firme, técnica
              y legalmente sólida. Cualquier retroceso normativo que limite la acción de la justicia equivale a fortalecer a los
              delincuentes y desarmar al Estado.
            </p>
          </div>
        </div>
      </section>

      {/* Leyes Colapsables */}
      <section className="apoyo-section apoyo-amarillo">
        <div className="container">
          <div className="blog-post-content">
            <h3>Las 8 Leyes Pro Crimen</h3>
            <p>
              Haz clic en cada ley para ver qué hace, por qué favorece al crimen organizado y a la corrupción,
              y cuál es su impacto en la seguridad del país.
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
      <section className="apoyo-section apoyo-azul" style={{ marginBottom: '40px' }}>
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
            <h3>Conclusión: Un Ataque Sistemático al Estado de Derecho</h3>
            <p>
              Las denominadas "leyes pro-crimen" han generado un <strong>daño estructural al sistema penal peruano</strong>,
              debilitando la acción del Ministerio Público, la Policía Nacional y el Poder Judicial en un momento en que el
              país enfrenta su mayor crisis de seguridad en décadas. Cada una de estas normas ha introducido obstáculos
              procesales, exigencias innecesarias y privilegios indebidos que favorecen a los delincuentes y desprotegen a
              la ciudadanía.
            </p>
            <p>
              El resultado es un Estado que <strong>investiga menos, captura menos y sanciona menos</strong>, mientras el
              crimen avanza con mayor coordinación, poder económico y capacidad de intimidación. No se trata de un debate
              jurídico abstracto, sino de una urgencia nacional: estas leyes están impactando directamente en la capacidad
              del Estado para salvar vidas, recuperar el control territorial y devolver la confianza en la justicia.
            </p>
            <p>
              <strong>Es tiempo de actuar con firmeza.</strong> Las derogatorias deben ser parte de un paquete legislativo
              de "Restauración de la Legalidad", que abrogue todas las leyes mencionadas y fortalezca las herramientas
              anticrímenes en concordancia con estándares internacionales. La ciudadanía necesita ver un Estado decidido,
              coherente y valiente frente al crimen organizado, no uno atado por normas complacientes.
            </p>
            <p>
              La historia ha demostrado que <strong>cuando la ley se pone al servicio de la impunidad, el Estado pierde
              su razón de ser.</strong> Es tiempo de corregir el rumbo y restituir la autoridad del derecho, la fuerza
              de la justicia y el respeto al orden público en defensa de la Nación.
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
