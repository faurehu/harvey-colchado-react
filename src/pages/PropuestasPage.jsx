import React, { useState } from 'react';
import Carousel from '../components/shared/Carousel';

function PropuestasPage() {
  const [expandedPropuesta, setExpandedPropuesta] = useState(null);

  const slides = [
    '/images/propuestas/carrusell/carrusel_1.png',
    '/images/propuestas/carrusell/carrusel_2.png',
    '/images/propuestas/carrusell/carrusel_3.png'
  ];

  const propuestas = [
    {
      id: 1,
      icon: '/images/propuestas/icons/liderazgo.svg',
      titulo: 'LIDERAZGO TÉCNICO CONTRA LA CRIMINALIDAD',
      detalles: [
        {
          subtitulo: 'Creación del Consejo Nacional de Seguridad Ciudadana y Lucha contra la Criminalidad (CONASECRI)',
          contenido: 'Frente a la descoordinación, superposición de funciones y ausencia de liderazgo en materia de lucha contra la criminalidad y la prevención del delito se plantea la creación del Consejo Nacional de Seguridad Ciudadana y Lucha contra la Criminalidad (CONASECRI) (fusión de CONASEC y CONAPOC), presidido por la Presidencia de la República. El CONASECRI estará integrado por las instituciones responsables de la prevención del delito, investigación criminal, inteligencia y sistema de justicia. Se constituye como un espacio de coordinación y consenso de medidas para la lucha contra la criminalidad e inseguridad ciudadana, desde el ámbito competencial de cada entidad. Tiene también la capacidad de emitir opinión vinculante sobre la materia que le compete.'
        },
        {
          subtitulo: 'Fortalecimiento de Observatorios para una mejor toma de decisiones',
          contenido: 'Frente a la débil gestión del conocimiento, se busca potenciar los Observatorios de la Policía Nacional del Perú, MINJUS, Ministerio Público y el Poder Judicial. Ello con el fin de mejorar la generación y uso de información en la toma de decisiones sobre criminalidad y prevención del delito.'
        },
        {
          subtitulo: 'Interoperabilidad y trazabilidad entre entidades de sistema de justicia',
          contenido: 'Ante la falta de comunicación (interoperabilidad) entre los sistemas informáticos de las entidades persecutoras del delito y tratamiento del delincuente (PNP, Ministerio Público, Poder Judicial e INPE), se propone la implementación de un sistema informático interinstitucional que permita mejorar la coordinación y trazabilidad de las investigaciones. De este modo, los funcionarios del sistema de justicia podrán identificar rápidamente el estado situacional de sus casos en cada una de las instituciones, facilitando así la coordinación, seguimiento y evaluación del trabajo interinstitucional.'
        }
      ]
    },
    {
      id: 2,
      icon: '/images/propuestas/icons/policia.svg',
      titulo: 'REFORMA DE LA POLICÍA NACIONAL',
      detalles: [
        {
          subtitulo: 'Transparencia y meritocracia en los procesos de admisión a las Escuelas de Oficiales y Suboficiales de la PNP',
          contenido: 'Respecto a la inadecuada gestión de los procesos de formación y desarrollo profesional del personal policial se plantea que las Escuelas de Oficiales y Suboficiales de la PNP se conviertan en entidades supervisables por la Superintendencia Nacional de Educación Universitaria (SUNEDU) (educación superior) y del MINEDU (Ministerio de Educación) (educación técnica), para fortalecer la transparencia y meritocracia en los procesos de admisión. Asimismo, se propone que el proceso de admisión a escuelas policiales sea diseñado y conducido por una de las 5 mejores universidades públicas del país, garantizando criterios objetivos en la evaluación de los postulantes, así como la idoneidad académica del proceso de selección.'
        },
        {
          subtitulo: 'Meritocracia en los ascensos policiales',
          contenido: 'Frente a la deficiente gestión de los procesos de ascenso, se busca incorporar mecanismos de transparencia, meritocracia y observación externa, a fin de garantizar procesos justos y basados en el desempeño. Se aumentará el valor del porcentaje actual del factor disciplinario para el proceso de ascenso policial, alcanzando el 30%, con el fin de premiar la integridad sin desvalorizar la capacidad profesional. Se incluirá como observador del proceso de ascenso policial a un representante de Servir, entidad especializada en materia de recursos humanos.'
        },
        {
          subtitulo: 'Profesionalización de puestos en la PNP',
          contenido: 'En relación con la deficiente gestión de asignación y profesionalización de puestos en la PNP, se plantea aprobar el Manual de Clasificación de Cargos (que incluya como requisitos de los perfiles la aplicación de la prueba del polígrafo, referencias de DIRIN, evaluación de hoja de vida y entrevista personal). De este modo, se busca garantizar una adecuada correspondencia entre competencias, especialidades funcionales ("orden y seguridad" e "investigación criminal") y necesidades institucionales.'
        },
        {
          subtitulo: 'Régimen disciplinario eficaz contra la corrupción',
          contenido: 'Frente a un régimen disciplinario policial débil para sancionar a los malos elementos, se propone implementar mecanismos eficaces y oportunos para sancionar las faltas disciplinarias y los actos de corrupción, a fin de garantizar la probidad y credibilidad institucional. En casos de corrupción, se plantea que no prescriban y que se aplique de manera automática un proceso sumario, es decir, dentro de 40 días se obtendrá un veredicto al respecto; agilizando y dando prioridad resolutiva a estos casos. Del mismo modo, se fortalecerá la División de Inteligencia de Inspectoría General PNP e incluir un concurso público para la selección de los miembros del Tribunal de Disciplina Policial (que involucre la prueba del polígrafo).'
        },
        {
          subtitulo: 'Incentivos económicos de acuerdo al desempeño policial',
          contenido: 'Ante la carencia de mecanismos de incentivo y reconocimiento al desempeño policial destacado, se busca implementar incentivos económicos diferenciados por desempeño según el nivel de complejidad de la investigación que resuelvan, para fortalecer la meritocracia en materia de investigación criminal de la PNP. Para el personal de la especialidad de orden y seguridad, se propone fortalecer la aplicación del Plan Celador (pago por día franco), incrementando de 16 a 20 soles por la hora trabajada.'
        },
        {
          subtitulo: 'Fortalecimiento de la capacidad policial operativa',
          contenido: 'Frente a la brecha en infraestructura y capacidad operativa de la PNP, se busca optimizar la gestión y ejecución de la inversión pública en infraestructura policial, priorizando el desarrollo de infraestructura moderna y especializada para la investigación criminal (Complejos Desconcentrados Especializados en Investigación Criminal (CODEIC) de la DIRNIC), prevención y criminalística de la PNP y el Ministerio Público. Asimismo, se propone adquirir equipamiento básico y vehículos conforme a las necesidades institucionales; y potenciar la capacidad tecnológica para la prevención del delito, investigación criminal y criminalística.'
        },
        {
          subtitulo: 'Bienestar policial',
          contenido: 'Los servicios de bienestar policial presentan deficiencias significativas que afectan directamente la calidad de vida y la seguridad social del personal. Por ello, se propone revalorizar la carrera policial mediante la restauración del 100% de pensión al cumplir los 30 años de servicio, ya que bajo la norma vigente se ha reducido al 55%, afectando al personal de las promociones desde el 2012. Asimismo, se plantea aperturar un proceso de asimilación de personal de salud que permita cubrir la brecha de personal por retiros por límite de edad. A ello se suma la necesidad de destinar más recursos para la adquisición de bienes y servicios orientados a mejorar el servicio de salud policial. Finalmente, se busca que el/la presidente del directorio de las entidades de bienestar policial se escoja vía concurso público, asegurando mayor especialización y transparencia en esos cargos.'
        }
      ]
    },
    {
      id: 3,
      icon: '/images/propuestas/icons/crimen.svg',
      titulo: 'LUCHA CONTRA EL CRIMEN Y LA CORRUPCIÓN',
      detalles: [
        {
          subtitulo: 'Lucha contra la extorsión',
          contenido: 'Se plantea incorporar el delito de producción, posesión y difusión de mensajes extorsivos en el Código Penal, para así investigar sin necesidad de la denuncia del agraviado. Emitir una ley que disponga que los bancos, empresas de telefonía y empresas de aplicaciones de redes sociales y mensajería designen un equipo de enlace que brinde rápidamente información a las entidades del sistema justicia, en casos de extorsión. Fortalecimiento de la articulación entre la Policía Nacional del Perú y la Unidad de Inteligencia Financiera (UIF), para seguimiento de flujo de dinero proveniente de extorsiones. Elaboración de directiva para estandarización de flujo de distribución de denuncias por extorsión a nivel nacional.'
        },
        {
          subtitulo: 'Lucha contra la minería ilegal',
          contenido: 'Implementación del Reglamento de Inscripciones de Bienes vinculados a la Pequeña Minería y Minería Artesanal en el Registro de Bienes Muebles de la SUNARP. Fiscalización de plantas de beneficio a cargo del MINEM, OEFA, MTPE, SUNAFIL y OSINERGMIN. Creación de un laboratorio estatal administrado por INGEMMET (para determinar la composición del oro). Fortalecer la DIRMEAMB con la creación de unidades de maniobra especializadas a nivel nacional y del Departamento de Investigación de Desvío de Insumos Químicos para la Minería Ilegal. Implementando la interoperabilidad entre el Registro de Comercializadores y Procesadores de Oro con el REINFO y otros registros de producción de oro, a cargo del MINEM, para una mejor trazabilidad y triangulación de la producción y comercialización del oro explotado por pequeños mineros y mineros artesanales. Creación de Banco de ADN de mineral aurífero, a cargo del Laboratorio Criminalístico para Delitos Ambientales de la DIRMEAMB.'
        },
        {
          subtitulo: 'Lucha contra el crimen organizado',
          contenido: 'Derogación de leyes pro crimen y modificación de aquellas normas que obstaculicen la persecución de organizaciones criminales. Fortalecimiento de la rigurosidad de las normas para el acceso a armas y explosivos. Articulación de la DIVIAC PNP con la SUNAT y Contraloría. Creación de la UECIP, adscrita a la DIRNIC (colaboradores eficaces). Formalizar la aplicación del método de inteligencia operativa y el método de investigación prospectiva compleja para desarticular organizaciones criminales. Asegurando previamente el fortalecimiento integral de la PNP mediante mejoras en tecnología, equipamiento, infraestructura y recursos de inteligencia.'
        },
        {
          subtitulo: 'Lucha contra la corrupción en el poder',
          contenido: 'Convertir a la DIVIAC en Dirección Especializada de Investigaciones de Alta Complejidad, orientada a combatir economías ilegales y la corrupción en el poder. Mejora del sistema de recompensas mediante la reclasificación del tipo de recompensa según victimario y la aceleración del pago. Fortalecer la División de Investigación de Delitos de Corrupción vinculados al Crimen Organizado de la DIRCOCOR, asegurando que cuente con los recursos y la autonomía necesarios para cumplir su labor.'
        }
      ]
    },
    {
      id: 4,
      icon: '/images/propuestas/icons/inteligencia.svg',
      titulo: 'GESTIÓN ESTRATÉGICA PARA LA INTELIGENCIA',
      detalles: [
        {
          subtitulo: 'Gestión estratégica de recursos de inteligencia',
          contenido: 'La investigación criminal enfrenta una deficiente distribución de los recursos de inteligencia, un débil monitoreo en su uso, y un bajo nivel de oportunidad de la información según la jurisdicción territorial. Establecer un monto mínimo de recursos de inteligencia para las unidades especializadas de la DIRNIC, considerando la oferta del mercado respecto a los principales gastos, tales como alquiler de carros y alquiler de casas. Asimismo, se considerará un estimado para el pago de informantes. Redistribuir recursos de inteligencia para las Divisiones de Investigación Criminal (Divincri) de regiones.'
        },
        {
          subtitulo: 'Fortalecimiento de la estructura de inteligencia policial',
          contenido: 'Asignar a los jefes de división como jefes de inteligencia en sus respectivas unidades. Desarrollar una plataforma de auditoría que permita la trazabilidad de las acciones de inteligencia (nota de agente y notas de información) para supervisar el uso de los recursos de inteligencia policial. Eliminación de unidades y/o áreas que generan duplicidad en el sistema de inteligencia.'
        },
        {
          subtitulo: 'Inteligencia operativa a nivel territorial',
          contenido: 'Incorporar un agente de inteligencia en las comisarías con mayor incidencia delictiva para recopilar información diaria y directa de la ciudadanía.'
        }
      ]
    },
    {
      id: 5,
      icon: '/images/propuestas/icons/penitenciario.svg',
      titulo: 'REFORMA DEL SISTEMA PENITENCIARIO',
      detalles: [
        {
          subtitulo: 'Inteligencia penitenciaria',
          contenido: 'Las deficientes medidas de inteligencia penitenciaria facilitan la reproducción y coordinación del crimen desde las cárceles. Para enfrentar esta situación, se propone el fortalecimiento del Departamento de Inteligencia Penitenciaria de la DIRNOS y el mejoramiento integral del sistema de bloqueadores de celulares, con el fin de neutralizar la comunicación ilícita y reducir la capacidad operativa de las organizaciones criminales dentro de los penales.'
        },
        {
          subtitulo: 'Gestión penitenciaria',
          contenido: 'Eligiendo al presidente del INPE mediante concurso público meritocrático. Fortaleciendo la gestión de la inversión pública del INPE. Implementando un proceso de profesionalización del personal penitenciario, con formación especializada en seguridad, manejo de crisis, inteligencia penitenciaria y estándares éticos (prueba del polígrafo). Retiro progresivo de los penales de las principales ciudades del país.'
        },
        {
          subtitulo: 'Modernización del sistema penitenciario',
          contenido: 'Retiro progresivo de los penales de las principales ciudades del país, buscando una mejor ubicación estratégica que facilite el control y reduzca la influencia de las organizaciones criminales en el entorno urbano, mejorando así las condiciones de seguridad tanto dentro como fuera de los centros penitenciarios.'
        }
      ]
    }
  ];

  const toggleDetalle = (index) => {
    setExpandedPropuesta(expandedPropuesta === index ? null : index);
  };

  return (
    <>
      {/* Hero Section - El Método Colchado */}
      <section className="metodo-hero">
        <Carousel slides={slides} />
      </section>

      {/* Propuestas Grid */}
      <section className="propuestas-section">
        <div className="propuestas-header">
          <h2>Propuestas</h2>
        </div>

        <div className="propuestas-grid">
          {propuestas.map((propuesta, index) => (
            <React.Fragment key={propuesta.id}>
              <div className="propuesta-card">
                <div className="propuesta-card-content">
                  <div className="propuesta-icon">
                    <img src={propuesta.icon} alt={propuesta.titulo} />
                  </div>
                  <div className="propuesta-text">
                    <h3>{propuesta.titulo}</h3>
                  </div>
                </div>
                <a
                  href="#"
                  className={`propuesta-link ${expandedPropuesta === index ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDetalle(index);
                  }}
                >
                  +
                </a>
              </div>
              <div
                id={`detalle-${propuesta.id}`}
                className={`propuesta-detalle-expandible ${expandedPropuesta === index ? 'active' : ''}`}
              >
                {propuesta.detalles.map((detalle, detalleIndex) => (
                  <div key={detalleIndex}>
                    <h4>+ {detalle.subtitulo}</h4>
                    <p>{detalle.contenido}</p>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default PropuestasPage;
