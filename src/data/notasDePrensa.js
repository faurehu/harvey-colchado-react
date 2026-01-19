/**
 * Notas de Prensa Data
 *
 * Each press note follows this structure:
 * - id: unique identifier
 * - slug: URL-friendly identifier for routing
 * - title: main headline
 * - subtitle: secondary headline/summary
 * - date: publication date (YYYY-MM-DD format)
 * - location: city of publication
 * - content: array of paragraphs
 * - cta: call to action (optional)
 *   - text: button/link text
 *   - url: link destination
 *   - type: 'video' | 'link' | 'document'
 */

const notasDePrensa = [
  {
    id: 1,
    slug: 'no-doble-ingreso',
    title: 'Colchado y Bica no cobrarán doble ingreso si son electos al Congreso',
    subtitle: 'Los coroneles PNP en retiro también adelantan que presentarán un proyecto de ley para eliminar este beneficio en el próximo Parlamento.',
    date: '2025-06-19',
    location: 'Lima',
    content: [
      'El coronel (r) PNP Harvey Colchado y el coronel (r) PNP Walter Lozano (Bica), anunciaron que, de ser electos, suspenderán el cobro de pensión policial para evitar la duplicidad con el sueldo congresal.',
      'A través de un video difundido en redes sociales, los candidatos al Congreso por el partido Ahora Nación precisaron que, si bien como policías en retiro podrían acogerse a la norma vigente que permite el doble ingreso con recursos públicos, han decidido no hacerlo por una razón de coherencia y responsabilidad frente a la ciudadanía.',
      'Asimismo, informaron que impulsarán un proyecto de ley para suspender la percepción simultánea de sueldo parlamentario y pensión estatal en el caso de policías y militares en situación de retiro que accedan a cargos de elección popular.',
      'Colchado y Lozano aclararon que su propuesta no elimina derechos adquiridos, sino que plantea la suspensión del cobro de la pensión mientras se ejerce el cargo parlamentario, como una medida de equidad, austeridad y respeto por los recursos del Estado.',
      '"Recibir cerca de 20 mil soles mensuales como congresista y, además, una pensión del Estado, no es coherente con la realidad de millones de peruanos", señaló Colchado. En tanto, Lozano remarcó que "servir al país no puede convertirse en un mecanismo para acumular privilegios desde un Congreso profundamente cuestionado".',
      'La iniciativa forma parte de los compromisos asumidos por ambos candidatos para reducir privilegios en el Parlamento y recuperar la confianza ciudadana en la representación política.'
    ],
    cta: {
      text: 'Ver video completo',
      url: 'https://www.tiktok.com/@harveycolchadoficial/video/7595043072212225301',
      type: 'video'
    }
  }
];

export default notasDePrensa;

// Helper to get a press note by slug
export const getNotaBySlug = (slug) => {
  return notasDePrensa.find(nota => nota.slug === slug);
};

// Helper to get all press notes for listing
export const getAllNotas = () => {
  return notasDePrensa;
};
