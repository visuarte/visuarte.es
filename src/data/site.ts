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
    categoria: 'Del diseño al soporte',
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
  {
    id: 'sabores-rizzo',
    img: '/obras/rizzo.jpg',
    numero: '06',
    nombre: 'Sabores Rizzo',
    categoria: 'Identidad y rótulo',
    capa: 'cliente',
    ambito: 'Identidad · físico',
    servicio: 'Identidad y rótulo de fachada',
    resumen:
      'Identidad para Sabores Rizzo: un rótulo con alma de mercado — iconos, banda y marco propios. Diseñada para lucir en fachada y en papel.',
    detalle: [
      'Diseño de logotipo y sistema de iconos de la casa (trigo, bandera, especias).',
      'Composición preparada para rotulación de fachada y soportes impresos.',
      'En fase de medidas y presupuesto cuando el cliente lo retome.',
    ],
  },
];
// ── Servicios que el estudio ofrece de verdad ──────────────────
export const servicios = [
  {
    numero: 'A',
    nombre: 'Identidad y diseño gráfico',
    texto:
      'Logotipos, sistemas de identidad y piezas gráficas con sistema propio: color, retícula y revisión real antes de entregar.',
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
];

// ── Contacto (confirmado: tel/email salen del CV público de gaffer) ──
export const contacto = {
  marca: 'VISUARTE',
  eslogan: 'Diseño, imprenta y producción.',
  // TODO Diego: confirmar (datos tomados del CV público de gaffer, 2026)
  telefono: '616 996 306',
  email: 'visuarte.creativos@gmail.com',
  base: '',
  instagram: '@visuarte_printshop',
  instagramUrl: 'https://www.instagram.com/visuarte_printshop/',
};

// ── Audiovisual: trayectoria real de Diego (CV gaffer, portfolio/cv) ──
export const cine = {
  nombre: 'Diego Gómez García',
  rol: 'Gaffer · Iluminación para producto, moda y narrativa',
  imdb: 'https://www.imdb.com/name/nm13809776/',
  perfil:
    'Gaffer con 3 años de experiencia en spots publicitarios y 5 en audiovisual (spots, cine y videoclips). Especializado en iluminación para producto, moda y narrativa visual. Trabajo habitual con LED, fresnel, DMX y control inalámbrico. Acostumbrado a rodajes de alto ritmo publicitario con equipos reducidos y deadlines ajustados.',
  marcas: [
    'OPEL',
    'ELPOZO',
    "JACK DANIEL'S",
    'TENA',
    'PC COMPONENTES',
    'CARLOS ALCARAZ',
    'HELP FLASH',
    'MR MONTALBÁN',
  ],
  spots: [
    { marca: 'OPEL', anio: '2026', rol: 'Gaffer', url: 'https://www.youtube.com/shorts/l5VvmxEHTjE' },
    { marca: 'HELP FLASH', anio: '2026', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=NEFUlfmMiM0' },
    { marca: 'ELPOZO — Selección Española', anio: '2026', rol: '2ª Unidad', url: 'https://www.youtube.com/watch?v=NzsnG_pinXI' },
    { marca: 'ELPOZO x Viva Suecia', anio: '2026', rol: 'Cámara + Ayte. Iluminación', url: 'https://www.youtube.com/watch?v=r4V2MTyIfj8' },
    { marca: 'PC Componentes — 20 aniversario', anio: '2025', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=ZSfy8xhuWaA' },
    { marca: 'Carlos Alcaraz — Turismo Murcia', anio: '2025', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=-0rwMZ5uEPk' },
    { marca: "Jack Daniel's — Proximity", anio: '2024', rol: 'Best Boy', url: 'https://www.youtube.com/watch?v=xgkFQKmcPVc' },
    { marca: 'Mr Montalbán', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=CLHNhlggnzI' },
    { marca: 'Tena Discreet', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=TtSYEAkYjVE' },
    { marca: 'Yasss Orenes', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=1bXkHgNySXQ' },
    { marca: 'Limonar de Santomera', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=ylUlwpu53fg' },
    { marca: 'Ravetllat Aromatics', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=Scf5yMDOJYg' },
    { marca: 'Apupabet', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=HeiAX9rph8s' },
  ],
  cineFiccion: [
    { titulo: 'SECUESTRO', anio: '2026', rol: 'Refuerzo de eléctricos', tipo: 'Película · LASTOR MEDIA' },
    { titulo: 'MAKING OF', anio: '2025', rol: 'Gaffer', tipo: 'Serie · Estudio Áurea · 27 jornadas' },
    { titulo: 'FUGA', anio: '2025', rol: 'Gaffer', tipo: 'Película · A Poco a Poco' },
    { titulo: 'BESOS ROBADOS', anio: '2024-25', rol: 'Gaffer', tipo: 'Película · A Poco a Poco + Ordet · 16 jornadas' },
    { titulo: 'COMPAÑERXS', anio: '2025', rol: 'Dirección de fotografía', tipo: 'Corto · Casablanca Films' },
    { titulo: 'SIN HUELLAS', anio: '2023', rol: 'Eléctrico', tipo: 'Serie · Prime Video' },
    { titulo: 'TODOS', anio: '2023', rol: 'Gaffer', tipo: 'Largometraje' },
    { titulo: 'FLECHAZO', anio: '2025', rol: 'Gaffer', tipo: 'Corto · Estudio Áurea' },
    { titulo: 'CONFINAMIENTO (HIPOXIA)', anio: '2025', rol: 'Gaffer', tipo: 'Corto · Estudio Áurea' },
    { titulo: 'LA MALDITA PRIMAVERA', anio: '2022', rol: 'Gaffer', tipo: 'Cortometraje' },
    { titulo: 'FAST YOUTH', anio: '2023', rol: 'Gaffer', tipo: 'Short film · Creamurcia' },
    { titulo: 'COTTON CANDY', anio: '2025', rol: 'Gaffer', tipo: 'Rodaje · 5 días' },
  ],
  videoclips: [
    { titulo: 'Viva Suecia — Mala Prensa', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=SJZe9WkKcVc' },
    { titulo: 'Arde Bogotá — Los Perros', rol: 'Best Boy', url: 'https://www.youtube.com/watch?v=iy-X7U6Znm0' },
  ],
  equipo: [
    'Equipo completo de iluminación: LED, fresnel y DMX',
    'Control DMX inalámbrico para setups rápidos',
    'BlackMagic 6K Pro + Canon R8',
    'Vehículo propio para transporte de equipo',
  ],
  formacion: [
    'Técnico Superior en Realización de Audiovisuales y Espectáculos (2008-2010)',
    'Técnico Superior en Gráfica Publicitaria (2005-2008)',
    'Meritorio de arte en «La Mitad de Óscar» — Manuel Martín Cuenca (2010)',
  ],
};

export const nav = [
  { nombre: 'Trabajo', path: '/trabajo' },
  { nombre: 'Cine', path: '/cine' },
  { nombre: 'Estudio', path: '/estudio' },
  { nombre: 'Contacto', path: '/contacto' },
];
