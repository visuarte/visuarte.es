// CONTENIDO ÚNICO DE LA WEB — versión Astro (2.0, 24 oct 2026)
// Copy: el nuestro (claim firmado). Estructura y propuesta de valor: el plan de Iván.
// Aquí no hay React: estos datos los consumen las páginas en el build (HTML estático).

export const nav = [
  { nombre: 'Rotulación', path: '/rotulacion' },
  { nombre: 'Audiovisual', path: '/audiovisual' },
  { nombre: 'Trabajo', path: '/trabajo' },
  { nombre: 'Contacto', path: '/contacto' },
];

export const contacto = {
  marca: 'VISUARTE',
  claim: 'Pensado a lo grande.',
  claimEm: 'Fabricado de verdad.',
  lede:
    'VISUARTE se hace cargo de tu comunicación de principio a fin: estrategia, dirección de arte, diseño y producción. Tú te quitas esa carga; nosotros ponemos el criterio y el proceso.',
  telefono: '616 996 306',
  telefonoIntl: '34616996306',
  email: 'visuarte.creativos@gmail.com',
  sede: 'Ciudad Quesada (Rojales)',
  cobertura: 'Alicante · Vega Baja · Murcia',
  nif: '48550448R',
  titular: 'Diego Gómez García',
};

// Los cuatro territorios (nuestro marco del 24 oct; NO se enumeran diez servicios arriba)
export type TerritorioIcono = 'marca' | 'espacio' | 'digital' | 'automatizacion';

export const territorios: {
  numero: string;
  nombre: string;
  icono: TerritorioIcono;
  texto: string;
  href: string;
}[] = [
  {
    numero: '01',
    nombre: 'Marca',
    icono: 'marca',
    texto:
      'Identidad, naming y dirección de arte. La marca se piensa y se diseña aquí: logotipo, sistema, tono, fotografía y vídeo.',
    href: '/estudio',
  },
  {
    numero: '02',
    nombre: 'Espacio',
    icono: 'espacio',
    texto:
      'Rotulación, imprenta e imagen del local, por dentro y por fuera. Fachadas, vinilo, gran formato y acabados, con taller propio.',
    href: '/rotulacion',
  },
  {
    numero: '03',
    nombre: 'Digital',
    icono: 'digital',
    texto:
      'Web full stack, software a medida, e-commerce y producto propio. Lo que se ve en pantalla, construido y mantenido aquí.',
    href: '/estudio',
  },
  {
    numero: '04',
    nombre: 'Automatización',
    icono: 'automatizacion',
    texto:
      'Gestión de procesos con IA: se automatiza el trabajo repetitivo del negocio, nunca el criterio ni la producción.',
    href: '/estudio',
  },
];

// Prueba de oficio para la tira de confianza (producciones y marcas reales del CV)
// TIRA DE CONFIANZA — tres grupos honestos (24 oct 2026, correcciones de Diego):
//   · marcas y CLIENTES (incluye Región de Murcia Turismo, que NO es Carlos Alcaraz)
//   · PRODUCTORAS con las que trabaja (se les da promo: son su casa)
//   · VIDEOCLIPS: artistas para los que se rodó
// 'escala' corrige el peso óptico (cada marca trae su proporción).
export interface ItemConfianza {
  nombre: string;
  logo?: string;
  escala?: number;
  tipo: 'marca' | 'cliente' | 'productora' | 'videoclip';
}

export const confianzaGrupos: { etiqueta: string; items: ItemConfianza[] }[] = [
  {
    etiqueta: 'Marcas y clientes',
    items: [
      { nombre: 'ElPozo', logo: '/marcas/elpozo-mono.png', escala: 1.05, tipo: 'marca' },
      { nombre: 'Opel', logo: '/marcas/opel.svg', escala: 1.25, tipo: 'marca' },
      { nombre: "Jack Daniel's", logo: '/marcas/jack-daniels.svg', escala: 1.7, tipo: 'marca' },
      { nombre: 'TENA', logo: '/marcas/tena.svg', escala: 1.15, tipo: 'marca' },
      { nombre: 'PC Componentes', logo: '/marcas/pccomponentes.png', escala: 1.05, tipo: 'marca' },
      { nombre: 'Región de Murcia Turismo', logo: '/marcas/murcia-turismo.png', escala: 1.2, tipo: 'cliente' },
    ],
  },
  {
    etiqueta: 'Con productoras',
    // Verificadas en el correo (remitente + facturas) y cruzadas con el CV.
    items: [
      { nombre: 'Twin Freaks Studio', logo: '/marcas/twin-freaks.png', escala: 1.6, tipo: 'productora' },
      { nombre: 'Grupo IDEX', logo: '/marcas/idex.svg', escala: 1.1, tipo: 'productora' },
      { nombre: 'Baikal Visual', logo: '/marcas/baikal.svg', escala: 1.15, tipo: 'productora' },
      { nombre: 'KAME Studio', tipo: 'productora' },
      { nombre: 'Portavoz', tipo: 'productora' },
    ],
  },
  {
    etiqueta: 'Videoclips',
    items: [
      { nombre: 'Viva Suecia', tipo: 'videoclip' },
      { nombre: 'Arde Bogotá', tipo: 'videoclip' },
    ],
  },
];

export const serviciosPresupuesto = [
  'Rotulación de fachada o local',
  'Vinilado de vehículo o flota',
  'Identidad / diseño gráfico',
  'Producción audiovisual o fotografía',
  'Textil y merchandising',
  'Web / producto digital',
  'Otra cosa (lo cuento abajo)',
];

export const faq = [
  {
    p: '¿Cuánto se tarda en rotular una fachada o un vehículo?',
    r: 'Una fachada suele estar entre 3 y 5 días laborables desde la aprobación del diseño; un vehículo, entre 1 y 2 días de taller. Plazos orientativos: se confirman tras ver el soporte y las medidas.',
  },
  {
    p: '¿Qué materiales usáis?',
    r: 'Vinilo polimérico o fundido según el soporte, laminado mate o brillo, composite y metacrilato para placas. Siempre se dice qué material va en cada pieza y por qué.',
  },
  {
    p: '¿Trabajáis fuera de la Vega Baja?',
    r: 'Sí. Sede en Ciudad Quesada (Rojales) y cobertura habitual en Alicante, Vega Baja y Murcia. Para más distancia se valora el desplazamiento en el presupuesto, nunca después.',
  },
  {
    p: '¿Cómo se pide presupuesto?',
    r: 'Con el formulario de esta página o por WhatsApp. Se pide lo mínimo (qué es, dónde va y para cuándo) y se responde con una estimación; si hace falta inspección, se dice antes de dar precio firme.',
  },
];

// RESEÑAS: pendiente de opiniones reales. NO se inventan testimonios (ver TODO en el bloque).
export const resenasPendientes = true;
