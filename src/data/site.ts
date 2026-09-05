// ═══════════════════════════════════════════════════════════════
// VISUARTE.ES — CONTENIDO ÚNICO (beta)
// Todo el texto del sitio vive aquí. Nada de copy suelto en JSX.
// ═══════════════════════════════════════════════════════════════

export type Capa = 'cliente' | 'producto' | 'servicio';

export const capaTitulo: Record<Capa, string> = {
  cliente: 'Trabajo de cliente',
  producto: 'Producto del estudio',
  servicio: 'Servicio del estudio',
};

export const capaChip: Record<Capa, string> = {
  cliente: 'CLIENTE',
  producto: 'ESTUDIO',
  servicio: 'ESTUDIO',
};

export interface Proyecto {
  id: string;
  numero: string; // "01"
  nombre: string;
  categoria: string; // sello / capa: qué es
  img?: string | null; // obra real (public/obras); sin imagen = tarjeta tipográfica
  capa: Capa;
  ambito: string;
  servicio: string;
  resumen: string;
  detalle: string[];
  enlace?: { texto: string; url: string };
}

export const proyectos: Proyecto[] = [
  {
    id: 'imprenta-rotulacion',
    img: '/obras/imprenta_placa.jpg',
    numero: '01',
    nombre: 'Imprenta y rotulación',
    categoria: 'Del canon al soporte',
    capa: 'servicio',
    ambito: 'Físico · entorno',
    servicio: 'Gran formato, vinilo, rotulación de fachadas y acabados',
    resumen:
      'De la pieza diseñada al objeto real: rotulación, vinilos, impresión de gran formato y acabados. El taller imprime lo que el estudio diseña.',
    detalle: [
      'Impresión de gran formato y rotulación de fachadas, vehículos y escaparates.',
      'Laminados, vinilos de corte y acabados de calidad de imprenta.',
      'La Roland SP540V del taller es el brazo físico del estudio: lo que se diseña, se imprime aquí.',
    ],
  },
  {
    id: 'bolco-vision',
    img: null,
    numero: '02',
    nombre: 'BOLCO Vision',
    categoria: 'Identidad sellada',
    capa: 'cliente',
    ambito: 'Identidad · digital',
    servicio: 'Identidad corporativa + generación de imagen con IA local',
    resumen:
      'Identidad con contraste deliberado: bolco en trazo manual, VISION en sans recta. Detrás, infraestructura propia de generación de imagen y vídeo en local.',
    detalle: [
      'Logotipo y sistema de identidad validados con test real de lectura.',
      'Pipeline de generación de imagen y vídeo en local (ComfyUI), sin depender de la nube.',
      'Identidad pensada para crecer: del sello a la pieza audiovisual.',
    ],
  },
  {
    id: 'qrcard-online',
    img: '/obras/qrcard.jpg',
    numero: '03',
    nombre: 'QR Card Online',
    categoria: 'Producto propio',
    capa: 'producto',
    ambito: 'Físico · digital',
    servicio: 'Tarjetas de visita NFC inteligentes',
    resumen:
      'La tarjeta es el vehículo: lo que vale es el NFC programado y el perfil digital que hay detrás. Configurador web, impresión física y programación de cada tarjeta.',
    detalle: [
      'Configurador web con pago integrado (Next.js, ES/EN).',
      'Impresión física por una cara + diseño por la otra; etiqueta NFC programada.',
      'Dos caminos: la tarjeta de empresa y el regalo con ticket emocional.',
    ],
    enlace: { texto: 'qrcardonline.vercel.app', url: 'https://qrcardonline.vercel.app' },
  },
  {
    id: 'camiart',
    img: '/obras/camiart.jpg',
    numero: '04',
    nombre: 'Camiart',
    categoria: 'Marca del estudio',
    capa: 'producto',
    ambito: 'Textil · físico',
    servicio: 'Camisetas y estampación',
    resumen:
      'La marca de camisetas del estudio: colección propia a una tinta y canal de estampación para encargos. Todo pedido de camisetas pasa por aquí.',
    detalle: [
      'Estampación a una tinta, del logo del estudio y sus mundos.',
      'Doble cara: colección propia de la casa y la Academia + encargos de estampación.',
      'Serigrafía de calidad pensada para durar muchos lavados.',
    ],
    enlace: { texto: 'camiart.com', url: 'https://camiart.com' },
  },
  {
    id: 'academia-ia-mapicp',
    img: '/obras/academia.jpg',
    numero: '05',
    nombre: 'Academia IA MAPICP',
    categoria: 'Producto propio',
    capa: 'producto',
    ambito: 'Formación · digital',
    servicio: 'Academia de IA aplicada',
    resumen:
      'Aprender a trabajar con IA, no a hablar de IA. De la teoría universal al creativo de imagen y vídeo, con método propio y clases en vivo.',
    detalle: [
      'Dos canales: teoría universal y taller creativo de imagen y vídeo.',
      'Clases en vivo, grupos pequeños, sin humo.',
      'Método MAPI: la semilla, entender, decidir, hacer, revisar.',
    ],
    enlace: { texto: 'mapicp.com/academia', url: 'https://mapicp.com/academia' },
  },
];

// ── Servicios que el estudio ofrece de verdad ──────────────────
export const servicios = [
  {
    numero: 'A',
    nombre: 'Identidad y diseño gráfico',
    texto:
      'Logotipos, sistemas de identidad y piezas gráficas con método: canon, retícula y revisión real antes de entregar.',
  },
  {
    numero: 'B',
    nombre: 'Imprenta y rotulación',
    texto:
      'Gran formato, vinilo, rotulación de fachadas y acabados. Del archivo al objeto impreso en el taller propio.',
  },
  {
    numero: 'C',
    nombre: 'Producción audiovisual',
    texto:
      'Rodaje, vídeo y efectos. Coordinación de producción y trabajo de iluminación en set.',
  },
  {
    numero: 'D',
    nombre: 'Digital y producto',
    texto:
      'Webs y productos digitales con sistema: tarjetas NFC, herramientas propias y software a medida.',
  },
  {
    numero: 'E',
    nombre: 'Academia y formación',
    texto:
      'Formación de IA aplicada al trabajo creativo y a la empresa. Grupos pequeños, método propio.',
  },
];

// ── Contacto (CONFIRMAR con Diego antes de publicar beta) ──────
export const contacto = {
  marca: 'VISUARTE',
  eslogan: 'Diseño, imprenta y producción.',
  // TODO Diego: confirmar datos reales (tel / email / base / redes)
  telefono: '',
  email: '',
  base: '',
  instagram: '@visuarte_printshop',
  instagramUrl: 'https://www.instagram.com/visuarte_printshop/',
};

export const nav = [
  { nombre: 'Trabajo', path: '/trabajo' },
  { nombre: 'Estudio', path: '/estudio' },
  { nombre: 'Contacto', path: '/contacto' },
];
