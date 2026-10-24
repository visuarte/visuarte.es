// CONTENIDO ÚNICO DE LA WEB — versión Astro (2.0, 24 oct 2026)
// Copy: el nuestro (claim firmado). Estructura y propuesta de valor: el plan de Iván.
// Aquí no hay React: estos datos los consumen las páginas en el build (HTML estático).

// Nav de 5 (24 oct 2026, Diego): Estudio primero —es la casa— y después las tres
// puertas de trabajo. Sin iconos: la nav es mono en versalitas y un icono por enlace
// la convierte en un menú de app. Se decide con el ojo, no por costumbre.
export const nav = [
  { nombre: 'Estudio', path: '/estudio' },
  { nombre: 'Rotulación', path: '/rotulacion' },
  { nombre: 'Audiovisual', path: '/audiovisual' },
  { nombre: 'Trabajo', path: '/trabajo' },
  { nombre: 'Contacto', path: '/contacto' },
];

export const contacto = {
  marca: 'VISUARTE',
  claim: 'Pensado a lo grande.',
  claimEm: 'Fabricado de verdad.',
  // Lede afinado por Diego (24 oct 2026): la IA se dice EXPLÍCITA, y se nombra el
  // arco completo (identidad → local → web → software → producción → gestión agéntica).
  lede:
    'VISUARTE asume tu comunicación de principio a fin: de la identidad al local, de la web al software, y de la producción a la gestión agéntica de procesos con IA. El criterio y el proceso son nuestros.',
  // Claim de cierre (24 oct 2026): la promesa en una línea, al final del recorrido.
  cierre: 'Visuarte se encarga. Tú, de tu negocio.',
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
  /** Muestra de material (192x73): color y vida en la tarjeta, no decoración. */
  muestra: string;
}[] = [
  {
    numero: '01',
    nombre: 'Marca',
    icono: 'marca',
    texto:
      'Identidad, naming y dirección de arte. La marca se piensa y se diseña aquí: logotipo, sistema, tono, fotografía y vídeo.',
    muestra: '/territorios/marca.webp',
    href: '/estudio',
  },
  {
    numero: '02',
    nombre: 'Espacio',
    icono: 'espacio',
    texto:
      'Rotulación, imprenta e imagen del local, por dentro y por fuera. Fachadas, vinilo, gran formato y acabados, con taller propio.',
    muestra: '/territorios/espacio.webp',
    href: '/rotulacion',
  },
  {
    numero: '03',
    nombre: 'Digital',
    icono: 'digital',
    texto:
      'Web full stack, software a medida, e-commerce y producto propio. Lo que se ve en pantalla, construido y mantenido aquí.',
    muestra: '/territorios/digital.webp',
    href: '/estudio',
  },
  {
    numero: '04',
    nombre: 'Automatización',
    icono: 'automatizacion',
    texto:
      'Gestión de procesos con IA: se automatiza el trabajo repetitivo del negocio, nunca el criterio ni la producción.',
    muestra: '/territorios/automatizacion.webp',
    href: '/estudio',
  },
];

// Prueba de oficio para la tira de confianza (producciones y marcas reales del CV)
// TIRA DE CONFIANZA — tres grupos honestos (24 oct 2026, correcciones de Diego):
//   · marcas y CLIENTES (incluye Región de Murcia Turismo, que NO es Carlos Alcaraz)
//   · PRODUCTORAS con las que trabaja (se les da promo: son su casa)
//   (los VIDEOCLIPS no van aquí: viven en /audiovisual, con el vídeo a un clic)
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
      { nombre: 'ElPozo', logo: '/marcas/elpozo-mono.png', escala: 1.0, tipo: 'marca' },
      { nombre: 'Opel', logo: '/marcas/opel.png', escala: 1.2, tipo: 'marca' },
      { nombre: "Jack Daniel's", logo: '/marcas/jack-daniels.png', escala: 1.3, tipo: 'marca' },
      { nombre: 'TENA', logo: '/marcas/tena.png', escala: 1.0, tipo: 'marca' },
      { nombre: 'PC Componentes', logo: '/marcas/pccomponentes.png', escala: 0.9, tipo: 'marca' },
      { nombre: 'Región de Murcia Turismo', logo: '/marcas/murcia-turismo.png', escala: 1.25, tipo: 'cliente' },
    ],
  },
  {
    etiqueta: 'Productoras y agencias',
    // Verificadas en el correo (remitente + facturas) y cruzadas con el CV.
    items: [
      { nombre: 'Twin Freaks Studio', tipo: 'productora' },
      { nombre: 'Grupo IDEX', logo: '/marcas/idex.png', escala: 0.95, tipo: 'productora' },
      { nombre: 'Baikal Visual', logo: '/marcas/baikal.png', escala: 0.88, tipo: 'productora' },
      { nombre: 'KAME Studio', tipo: 'productora' },
      { nombre: 'Portavoz', logo: '/marcas/portavoz.png', escala: 0.9, tipo: 'productora' },
      { nombre: 'Proximity', tipo: 'productora' },
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

// Orden de embudo (24 oct 2026), no por orden de llegada:
// cobertura → presupuesto → materiales → tiempos.
export const faq = [
  {
    p: '¿Trabajáis fuera de la Vega Baja?',
    r: 'Sí. Sede en Ciudad Quesada (Rojales) y cobertura habitual en Alicante, Vega Baja y Murcia. Para más distancia se valora el desplazamiento en el presupuesto, nunca después.',
  },
  {
    p: '¿Cómo se pide presupuesto?',
    r: 'Con el formulario de la portada —te abre el correo con los datos puestos— o por WhatsApp. Se pide lo mínimo (qué es, dónde va y para cuándo) y se responde con una estimación; si hace falta inspección, se dice antes de dar precio firme.',
  },
  {
    p: '¿Qué materiales usáis?',
    r: 'Vinilo polimérico o fundido según el soporte, laminado mate o brillo, composite y metacrilato para placas. Siempre se dice qué material va en cada pieza y por qué.',
  },
  {
    p: '¿Cuánto se tarda en rotular una fachada o un vehículo?',
    r: 'Una fachada suele estar entre 3 y 5 días laborables desde la aprobación del diseño; un vehículo, entre 1 y 2 días de taller. Plazos orientativos: se confirman tras ver el soporte y las medidas.',
  },
];

// RESEÑAS REALES (24 oct 2026) — copiadas de Google tal cual, sin retocar ni recortar
// el sentido. No se inventa ninguna: un testimonio falso es la mentira más cara del
// marketing, y además se cae en cuanto alguien mira el perfil.
// En el perfil hay 5★ y una de 1★ (dirección/teléfono). No se esconde: se enlaza al
// perfil para que se lean todas. Fotografía del perfil: 24 oct 2026.
export const resenas = [
  {
    nombre: 'Nebux',
    estrellas: 5,
    cuando: 'hace 8 meses',
    texto:
      'Brutal! Me hizo lo que le pedí súper rápido, encima el chico se nota que entiende muchísimo y me aconsejó perfectamente. Buen resultado y buena calidad!',
  },
  {
    nombre: 'Andrea Martínez Dueñas',
    estrellas: 5,
    cuando: 'hace un año',
    texto:
      'Un acierto ponerme en las manos de Diego para el diseño e impresión de invitaciones. Un profesional con mucho talento, trato con el cliente y muy buenos medios en su local.',
  },
];

// El enlace al perfil vive en la firma de cada reseña, no en una nota al pie:
// una frase explicando que no se filtra llama la atención sobre lo que no hace falta.
export const resenasUrl =
  'https://www.google.com/maps/search/?api=1&query=Visuarte+Studio+Ciudad+Quesada';

// ── AUDIOVISUAL (R2) — trayectoria real, no catálogo inventado ──
// Fuente: CV de Diego (gaffer) + los enlaces verificados uno a uno contra YouTube el 24 oct 2026
// (oEmbed 200/200; los títulos que se muestran son los del vídeo real).
// Lo que se dice aquí es el ROL en el rodaje, no la propiedad del spot: el spot es de su marca
// y su productora. La web no se cuelga obra ajena.
export const audiovisual = {
  nombre: 'Diego Gómez García',
  rol: 'Iluminación, cámara y coordinación en set',
  imdb: 'https://www.imdb.com/es-es/name/nm13809776/',
  perfil:
    'Gaffer con tres años en spots publicitarios y cinco en audiovisual (spots, cine y videoclips). ' +
    'Iluminación para producto, moda y narrativa: LED, fresnel y DMX con control inalámbrico, ' +
    'en rodajes de alto ritmo, equipos cortos y plazos ajustados.',
  spots: [
    { marca: 'OPEL', pieza: 'Te falta taller', anio: '2026', rol: 'Gaffer', url: 'https://www.youtube.com/shorts/l5VvmxEHTjE' },
    { marca: 'HELP FLASH', pieza: 'La baliza V16', anio: '2026', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=NEFUlfmMiM0' },
    { marca: 'ELPOZO · Selección Española', pieza: 'Saborea la gloria', anio: '2026', rol: '2ª unidad', url: 'https://www.youtube.com/watch?v=NzsnG_pinXI' },
    { marca: 'ELPOZO x Viva Suecia', pieza: 'Cámara oculta', anio: '2026', rol: 'Cámara + ayte. iluminación', url: 'https://www.youtube.com/watch?v=r4V2MTyIfj8' },
    { marca: 'PC Componentes', pieza: 'La calentada del otoño', anio: '2025', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=ZSfy8xhuWaA' },
    { marca: 'Turismo de la Región de Murcia', pieza: 'Carlos Alcaraz', anio: '2025', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=-0rwMZ5uEPk' },
    { marca: "Jack Daniel's · Proximity", pieza: 'Rompe con lo de siempre', anio: '2024', rol: 'Best boy', url: 'https://www.youtube.com/watch?v=xgkFQKmcPVc' },
    { marca: 'Montalbán y Rodríguez', pieza: 'Asiento y cubo Taray', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=CLHNhlggnzI' },
    { marca: 'Tena Discreet', pieza: 'Campaña 2023', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=TtSYEAkYjVE' },
    { marca: 'Yaass Casino', pieza: 'Si te gusta, te gusta', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=1bXkHgNySXQ' },
    { marca: 'Limonar de Santomera', pieza: 'Clarica · sostenibilidad', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=ylUlwpu53fg' },
    { marca: 'Ravetllat Aromatics', pieza: 'Fragrances since 1939', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=Scf5yMDOJYg' },
    { marca: 'Apupabet', pieza: 'Aúpate a ganar', anio: '2023', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=HeiAX9rph8s' },
  ],
  videoclips: [
    { titulo: 'Viva Suecia — Mala Prensa', rol: 'Gaffer', url: 'https://www.youtube.com/watch?v=SJZe9WkKcVc' },
    { titulo: 'Arde Bogotá — Los Perros', rol: 'Best boy', url: 'https://www.youtube.com/watch?v=iy-X7U6Znm0' },
  ],
  ficcion: [
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
  equipo: [
    'Equipo completo de iluminación: LED, fresnel y DMX',
    'Control DMX inalámbrico para montajes rápidos',
    'Blackmagic 6K Pro + Canon R8',
    'Vehículo propio para el transporte de equipo',
  ],
  formacion: [
    'Técnico Superior en Realización de Audiovisuales y Espectáculos (2008-2010)',
    'Técnico Superior en Gráfica Publicitaria (2005-2008)',
    'Meritorio de arte en «La mitad de Óscar» — Manuel Martín Cuenca (2010)',
  ],
};

// ── TRABAJO (R6) — la vitrina: siete piezas, con imagen solo donde la hay ──
// Regla: la foto de la obra de un cliente entra cuando el cliente autoriza; lo que
// no está autorizado se cuenta en ficha, no se disfraza. Las imágenes que sí van son
// trabajo propio (producto, marca, esta web) o material ya publicado por el estudio.
export const trabajo = {
  intro:
    'Piezas que van de una fachada a una tarjeta que se lleva en el bolsillo. Lo que tiene foto, la muestra; lo que no, se cuenta con lo que se sabe: qué se hizo, con qué y en cuánto tiempo.',
  piezas: [
    {
      numero: '01',
      cliente: 'Sabores Rizzo',
      tipo: 'Identidad · logotipo y sistema',
      anio: '2026',
      que: 'Insignia redonda: la tricolor italiana en pinceladas, el gorro de chef con tres estrellas y el nombre en dos voces —«Sabores» en cursiva y «RIZZO» en seco sobre tabla—, con albahaca, espiga y cubiertos en dorado. Alrededor, «Pizzas · Burger · Tradición».',
      img: '/obras/rizzo-marca.webp',
      alt: 'Logotipo de Sabores Rizzo: insignia redonda con la tricolor italiana, gorro de chef con tres estrellas y el nombre sobre una tabla, rodeado de albahaca y espigas',
      proceso:
        'El sistema sale de la deconstrucción: la tricolor en pinceladas, el gorro con tres estrellas, la albahaca, la espiga de trigo y los cubiertos. De ahí salieron cuatro propuestas —verdes y a color— hasta la insignia que se aprobó el 6 de julio de 2026. El nombre va en dos voces: «Sabores» en cursiva y «RIZZO» en seco sobre tabla, y la cierra «Pizzas · Burger · Tradición», que es lo que el cliente quería decir sin escribirlo.',
      soportes: [
        {
          src: '/obras/rizzo/aplicacion.webp',
          alt: 'Fachada con la insignia en el escaparate y el rótulo redondo sobre la puerta, junto a la carta iluminada',
          pie: 'Fachada y carta',
        },
      ],
    },
    {
      numero: '02',
      cliente: 'Sabores Rizzo',
      tipo: 'Rótulo de fachada y panel de menú',
      anio: '2026',
      que: 'Cuatro paños en metacrilato y PVC sobre chapa nueva, con adhesivo: la chapa no se taladra por gusto. Panel de menú montado aparte, en húmedo, para poder moverlo antes de que agarrara.',
      nota: 'Foto de la fachada: pendiente de autorización',
    },
    {
      numero: '03',
      cliente: 'Salón N23',
      tipo: 'Cartel de precios y cuadrículas de rifa',
      anio: '2026',
      que: 'Revisión de seis precios sobre el original del cliente, verificada píxel a píxel: solo cambian los números, nada se desplaza. PVC de 3 mm con vinilo laminado mate y dos rifas numeradas, 200 y 100.',
      nota: 'Foto de la pieza: pendiente de autorización',
    },
    {
      numero: '04',
      cliente: 'VISUARTE',
      tipo: 'Esta web · diseño y código',
      anio: '2026',
      que: 'Sitio estático en Astro: cero JavaScript servido, tipografías propias servidas desde casa y cabecera generada en local. La web que estás leyendo.',
      img: '/obras/visuarte-web.webp',
      alt: 'Cabecera de visuarte.es con el titular y la imagen de filamentos',
    },
    {
      numero: '05',
      cliente: 'QR Card Online',
      tipo: 'Producto propio · tarjeta NFC y perfil digital',
      anio: '2026',
      que: 'Configurador web con pago, impresión de la tarjeta por una cara y diseño por la otra, y programación del chip NFC de cada unidad.',
      img: '/obras/qrcard-bambu.webp',
      alt: 'Tarjeta NFC de QR Card sobre soporte de bambú',
    },
    {
      numero: '06',
      cliente: 'Camiart',
      tipo: 'Textil y estampación',
      anio: '2025',
      que: 'Marca de camisetas del estudio: colección propia a una tinta y canal de estampación para encargos. Todo pedido de textil pasa por aquí.',
      img: '/obras/camiart.jpg',
      alt: 'Camiseta Camiart con el logotipo de la brújula estampado en el pecho',
    },
    {
      numero: '07',
      cliente: 'Audiovisual',
      tipo: 'Spots, videoclips y ficción',
      anio: '2019-2026',
      que: 'Veintisiete producciones con esta mano dentro, del spot de marca al videoclip. Los créditos y los vídeos están uno a uno en Audiovisual.',
      enlace: '/audiovisual',
      enlaceTexto: 'Ver los créditos y los vídeos',
    },
    {
      numero: '08',
      cliente: 'Puntada a Puntada',
      tipo: 'Rótulo luminoso · en curso',
      anio: '2026',
      que: 'Sustitución de la banderola existente por un rótulo retroiluminado. En curso: la instalación eléctrica la firma un electricista autorizado y la altura pide medios, así que el precio no se cierra hasta ver el soporte.',
      nota: 'En curso',
    },
    {
      numero: '09',
      cliente: 'Pedro Olmedo',
      tipo: 'Identidad · logotipo y manual de marca',
      anio: '2024',
      que: 'Monograma PO: la P y la O se tocan y se leen como un solo trazo. El nombre va debajo, en versalitas inclinadas, sobre un granate de peso. Con su manual de marca, donde el logo convive con la foto en blanco y negro.',
      img: '/obras/olmedo-marca.webp',
      alt: 'Monograma PO de Pedro Olmedo en blanco sobre fondo granate, con el nombre debajo',
    },
  ],
};

// ── ESTUDIO (R5) — la casa: los cuatro territorios, el método y lo que hay dentro ──
// Nada de equipo inventado: se nombra el taller propio y las herramientas que existen.
export const estudio = {
  territorios: [
    {
      numero: '01',
      nombre: 'Marca',
      texto:
        'Identidad, naming y dirección de arte. El logotipo, el sistema, el tono, la fotografía y el vídeo. Una marca se piensa antes de dibujarse.',
      piezas: ['Logotipo y sistema de identidad', 'Naming y tono de voz', 'Dirección de arte', 'Manual de uso'],
      href: '/audiovisual',
      enlace: 'Ver la parte audiovisual',
    },
    {
      numero: '02',
      nombre: 'Espacio',
      texto:
        'Rotulación, imprenta e imagen del local, por dentro y por fuera. Fachadas, vinilo, gran formato y acabados, con taller propio.',
      piezas: ['Fachadas y rótulos', 'Vehículos y flotas', 'Gran formato', 'Textil y merchandising'],
      href: '/rotulacion',
      enlace: 'Ver rotulación',
    },
    {
      numero: '03',
      nombre: 'Digital',
      texto:
        'Web y software a medida: se construye y se mantiene aquí. Nada de plantillas que nadie sabe tocar después.',
      piezas: ['Web y portfolio', 'E-commerce y configuradores', 'Software a medida', 'Producto propio (QR Card)'],
      href: '/contacto',
      enlace: 'Contar el proyecto',
    },
    {
      numero: '04',
      nombre: 'Automatización',
      texto:
        'Gestión de procesos con IA: se automatiza el trabajo repetitivo del negocio, nunca el criterio ni la producción. La máquina hace lo pesado; la decisión sigue siendo humana.',
      piezas: ['Agentes que organizan y avisan', 'Generación de imagen y vídeo en local', 'Datos y documentos ordenados', 'Procesos que no se olvidan'],
      href: '/contacto',
      enlace: 'Ver qué se puede automatizar',
    },
  ],
  metodo: [
    { titulo: 'Se escucha', texto: 'Qué hay, qué se quiere y qué no. Sin reuniones de relleno.' },
    { titulo: 'Se encuadra', texto: 'Alcance cerrado por escrito: qué entra, qué no y qué cuesta.' },
    { titulo: 'Se aprueba', texto: 'Nada se produce sin aprobación. Lo que cambia después, se re-cotiza.' },
    { titulo: 'Se fabrica', texto: 'En taller propio, con revisión a ras de luz antes de sacarlo.' },
    { titulo: 'Se entrega y sigue', texto: 'Parte con foto el mismo día y la web sigue viva después.' },
  ],
  taller: [
    { que: 'Taller de rotulación', detalle: 'Impresión de gran formato, laminado, corte y montaje. Aquí se mide, se imprime y se monta.' },
    { que: 'Luz y rodaje', detalle: 'Equipo de iluminación LED, fresnel y control DMX, con cámara propia y vehículo para transporte.' },
    { que: 'Herramientas propias', detalle: 'Generación de imagen y vídeo en local (BOLCO VISION) y un sistema propio de gestión de procesos con IA (MAPICP).' },
    { que: 'Producto propio', detalle: 'QR Card Online: tarjetas NFC con perfil digital. Se diseña, se imprime y se programa aquí.' },
  ],
};
// Nada de aquí es inventado: son las piezas, los materiales y el método con los que se ha
// trabajado (Rizzo, Salón N23, Anissa). Lo que no está comprobado no se escribe.
// ── ROTULACIÓN (R3) — lo que el taller hace de verdad, sin catálogo de relleno ──
// Nada de aquí es inventado: son las piezas, los materiales y el método con los que se ha
// trabajado (Rizzo, Salón N23, Anissa). Lo que no está comprobado no se escribe.
export const rotulacion = {
  piezas: [
    {
      numero: '01',
      nombre: 'Fachadas y locales',
      texto:
        'Rotulación exterior e interior: metacrilato, composite, PVC y vinilo de corte o impreso. La fachada se mira antes de tocarla.',
    },
    {
      numero: '02',
      nombre: 'Rótulos y placas',
      texto:
        'Placas de señalización, directorios y rótulos con cuerpo. Corte, montaje y acabado en el taller.',
    },
    {
      numero: '03',
      nombre: 'Vehículos y flotas',
      texto:
        'Vinilado de coches, furgones y flotas completas. Vinilo fundido en lo que da curva, polimérico donde no hace falta.',
    },
    {
      numero: '04',
      nombre: 'Gran formato',
      texto:
        'Lonas, vallas, cartelería y fondos de escaparate o evento. Se dice el material y la resistencia que aguanta cada uno.',
    },
    {
      numero: '05',
      nombre: 'Textil y merchandising',
      texto:
        'Camisetas, polos y ropa de trabajo en DTF o vinilo textil. Una tinta para el logo, cuatricromía cuando la pieza lo pide.',
    },
    {
      numero: '06',
      nombre: 'Rótulos luminosos',
      texto:
        'Con electricista autorizado: la parte eléctrica la firma quien puede firmarla. Nosotros ponemos la cara y el montaje.',
    },
  ],
  materiales: [
    { material: 'Vinilo polimérico', uso: 'Superficies planas: el caballo de batalla' },
    { material: 'Vinilo fundido (cast)', uso: 'Curvas, remaches y carrocería' },
    { material: 'Laminado mate o brillo', uso: 'Protege la tinta y quita o pone reflejo' },
    { material: 'Metacrilato', uso: 'Placas y rótulos con cuerpo' },
    { material: 'Composite de aluminio', uso: 'Fachada rígida y ligera' },
    { material: 'PVC espumado', uso: 'Cartelería rígida y económica' },
    { material: 'Lona y malla', uso: 'Exterior y viento' },
    { material: 'DTF y vinilo textil', uso: 'Ropa y merchandising' },
  ],
  metodo: [
    {
      titulo: 'Ver y medir',
      texto: 'Se mide en el sitio. Sobre plano se decide; en la pared se comprueba.',
    },
    {
      titulo: 'Decidir el material',
      texto: 'Qué vinilo, sobre qué soporte y por qué. Se dice en el presupuesto, no después.',
    },
    {
      titulo: 'Aprobar la pieza',
      texto: 'El diseño se aprueba antes de imprimir. Lo que cambia después se re-cotiza.',
    },
    {
      titulo: 'Producir en taller',
      texto: 'Impresión, laminado y corte propios. Se revisa a ras de luz antes de que salga.',
    },
    {
      titulo: 'Montar y cerrar el parte',
      texto: 'Se monta con el cliente delante cuando se puede, y se cierra con foto el mismo día.',
    },
  ],
  paraPrecio: [
    'Qué es la pieza y para qué se usa',
    'Dónde va: pared, chapa, cristal, carrocería o lona',
    'Medidas, o una visita para tomarlas',
    'Una foto del soporte tal y como está hoy',
    'Para cuándo lo necesitas',
  ],
  noSeHace: [
    'Precio firme sin haber visto el soporte',
    'Taladrar a ciegas en una chapa nueva',
    'Montar sobre un soporte degradado y callarlo',
    'Firmar la parte eléctrica sin electricista autorizado',
    'Cambiar el alcance sin re-cotizar',
  ],
  faq: [
     // Mismo embudo: cobertura → calidad y proceso → tiempos. El presupuesto ya
     // tiene sección entera justo encima (04 · qué hace falta para dar precio).
     {
       p: '¿Trabajáis fuera de la Vega Baja?',
       r: 'Sí. Taller en Ciudad Quesada (Rojales) y cobertura habitual en Alicante, Vega Baja y Murcia. Si hay más distancia, el desplazamiento se valora en el presupuesto y se dice antes, nunca después.',
     },
     {
       p: '¿Se puede rotular sobre lo que ya hay puesto?',
       r: 'Depende del estado del soporte y de cómo salga lo viejo. Se valora en la visita, porque un desmontaje mal hecho se lleva el material por delante. Muchas veces sale mejor una placa nueva que aprovechar la que hay: se dice cuál de las dos opciones conviene y por qué.',
     },
     {
       p: '¿Quién monta y con qué?',
       r: 'Montamos nosotros. Si la altura pide cesta o grúa, o hace falta permiso de ocupación de vía pública, se dice antes de empezar porque cambia el plazo y el precio. La instalación eléctrica de un rótulo luminoso la firma un electricista autorizado: nosotros no la firmamos.',
     },
     {
       p: '¿Cuánto se tarda?',
       r: 'Una fachada suele estar entre 3 y 5 días laborables desde que se aprueba el diseño; un vehículo, entre 1 y 2 días de taller. Son plazos orientativos: se confirman cuando se ven las medidas y el soporte.',
     },
   ],
};
