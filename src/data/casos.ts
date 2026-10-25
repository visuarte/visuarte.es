// CASOS DE ESTUDIO — el formato largo de la vitrina (25 oct 2026).
// Fuente de la selección: proyectos/carrera/SELECCION_NEXT.md — un caso por categoría
// de servicio, con la prueba real. Aquí solo entran los que YA tienen prueba: mientras
// no haya foto de la obra terminada, el caso no se genera (publicado: false) y la web
// no lo enlaza. Un caso sin prueba no es un caso: es una promesa.
//
// REGLAS DE ESTE ARCHIVO
//   1. Nada de precios: la versión pública no lleva importes (regla de la casa).
//   2. Nada que no esté en el disco: medidas, materiales y fechas salen de la ficha del
//      trabajo (data/tareas/*.json) y del albarán. Si un dato no está, no se escribe.
//   3. Sin adjetivos sobre el propio trabajo: frases cortas y hechos.

export interface CasoDato {
  campo: string;
  valor: string;
}

export interface CasoPaso {
  titulo: string;
  texto: string;
}

export interface CasoPieza {
  pieza: string;
  medida: string;
  material: string;
  produccion: string;
}

export interface CasoImagen {
  src: string;
  alt: string;
  /** Tamaño real del archivo: reserva el hueco y evita el salto de maquetación. */
  ancho: number;
  alto: number;
  /** Pie de foto. Se dice siempre si la imagen es una simulación. */
  pie: string;
}

export interface Caso {
  /** Ruta: /trabajo/<slug> */
  slug: string;
  /** false = el caso no se genera ni se enlaza. Se abre cuando existe la foto real. */
  publicado: boolean;
  /**
   * LA PUERTA DE VERDAD (25 oct 2026): la foto de la obra terminada en su sitio.
   * Sin esto, el caso NO se genera aunque `publicado` esté a true — así no se puede
   * publicar un caso con una simulación por descuido. Las imágenes de `imagenes`
   * pueden ser bocetos o simulaciones; esta no.
   */
  prueba?: CasoImagen;
  /** Categoría de servicio (las cinco de SELECCION_NEXT). */
  categoria: string;
  cliente: string;
  /** H1 del caso. */
  titular: string;
  /** Una línea con el golpe: qué se hizo y para quién. */
  golpe: string;
  ficha: CasoDato[];
  reto: CasoPaso[];
  proceso: CasoPaso[];
  resultado: { texto: string[]; piezas: CasoPieza[] };
  demuestra: string[];
  imagenes: CasoImagen[];
}

export const casos: Caso[] = [
  {
    slug: 'sabores-rizzo',
    // ⏳ Se abre el LUNES 26 oct: falta la foto de la obra terminada (se hace en la
    // misma visita del parche). El permiso de Jose y Sammy ya está concedido.
    publicado: false,
    categoria: 'Rótulos & fachadas',
    cliente: 'Sabores Rizzo',
    titular: 'De la insignia a la fachada.',
    golpe:
      'Un bar de barrio con carta italiana y holandesa: la marca, la fachada y el panel de ' +
      'menú salieron del mismo taller.',
    ficha: [
      { campo: 'Cliente', valor: 'Sabores Rizzo (Sammy y José)' },
      { campo: 'Sector', valor: 'Hostelería · pizzería y burger de barrio' },
      { campo: 'Sitio', valor: 'Dolores (Vega Baja, Alicante)' },
      { campo: 'Trabajo', valor: 'Julio a octubre de 2026' },
      { campo: 'Alcance', valor: 'Identidad, fachada, rótulo, panel de menú y textil' },
    ],
    reto: [
      {
        titulo: 'Una marca de calle, no una trattoria',
        texto:
          'La carta mezcla pizzas y burgers con frikandel y shoarma: cocina italiana con herencia ' +
          'holandesa, en un local de barrio. La identidad tenía que sonar a tradición sin parecer ' +
          'un restaurante fino ni un fast food.',
      },
      {
        titulo: 'La fachada en esquina',
        texto:
          'Las medidas del primer plano no cuadraban con el local. La fachada real mide 440 × 312 ' +
          'cm; el despiece que se había calculado daba 462,6 cm de ancho, 22,6 cm de más. En ' +
          'rotulación, medir mal es cortar de más y pagar el material.',
      },
    ],
    proceso: [
      {
        titulo: 'La insignia',
        texto:
          'Insignia redonda: la tricolor en pinceladas, el gorro de chef con tres estrellas, ' +
          'albahaca y espiga. El nombre va en dos voces —«Sabores» en cursiva y «RIZZO» en seco ' +
          'sobre tabla— y lo cierra «Pizzas · Burger · Tradición». Hubo cuatro propuestas antes ' +
          'de la que se aprobó.',
      },
      {
        titulo: 'Medir en el sitio',
        texto:
          'Se volvió a medir la fachada en persona antes de cortar. El rótulo se envió a imprimir ' +
          'a 273 × 55 cm, con sangre, sobre la medida real y no sobre el plano.',
      },
      {
        titulo: 'Despiece rentable',
        texto:
          'La chapa se troqueló en piezas para no tirar material: cinco piezas de la placa de ' +
          '150 × 300 cm más los recortes, encajadas sobre el hueco de la esquina.',
      },
      {
        titulo: 'Corte y taller',
        texto:
          'El composite lo cortó Visualgraphic (Israel Galiano). La impresión, el laminado mate y ' +
          'el corte de vinilo se hicieron en taller propio.',
      },
      {
        titulo: 'Montaje sin taladrar',
        texto:
          'La chapa nueva no se agujerea por gusto: se montó con adhesivo de montaje sobre la ' +
          'superficie lijada. El panel de menú —100 × 96 cm— se montó aparte, en húmedo, para ' +
          'poder moverlo antes de que agarrara.',
      },
      {
        titulo: 'Cierre',
        texto:
          'Se entregó el 22 de octubre con el parte de las siete piezas y el dueño delante. Con ' +
          'eso el trabajo se cierra y la factura nace el mismo día.',
      },
    ],
    resultado: {
      texto: [
        'Siete piezas: la fachada completa en composite, el rótulo superior, el logo de la ' +
          'ventana, el panel de menú sobre metacrilato, la placa de cierre con sus recortes, los ' +
          'remates de esquina y el forrado interior de la ventana.',
        'Todo se midió sobre el local. La marca y el objeto no pasaron por tres proveedores ' +
          'distintos: el dibujo, el corte, la impresión y el montaje se coordinaron desde la ' +
          'misma mesa.',
      ],
      piezas: [
        {
          pieza: 'Fachada (paños)',
          medida: '440 × 312 cm',
          material: 'Composite de aluminio, cara mate',
          produccion: 'Troquel y corte CNC',
        },
        {
          pieza: 'Rótulo superior',
          medida: '273 × 55 cm',
          material: 'Vinilo polimérico impreso, laminado mate',
          produccion: 'Taller propio',
        },
        {
          pieza: 'Logo de ventana',
          medida: '136 × 136 cm',
          material: 'Vinilo impreso con corte de contorno',
          produccion: 'Taller propio',
        },
        {
          pieza: 'Panel de menú',
          medida: '100 × 96 cm',
          material: 'Vinilo polimérico laminado mate sobre metacrilato',
          produccion: 'Taller propio',
        },
        {
          pieza: 'Placa de cierre',
          medida: '150 × 300 cm (5 piezas)',
          material: 'Composite de aluminio',
          produccion: 'Corte CNC',
        },
        {
          pieza: 'Remates de esquina',
          medida: '3 uds · perfil L 20 × 20 mm',
          material: 'PVC negro mate',
          produccion: 'Ferretería',
        },
        {
          pieza: 'Forrado de ventana',
          medida: '136 × 136 cm',
          material: 'Vinilo de corte negro mate',
          produccion: 'Taller propio',
        },
      ],
    },
    demuestra: [
      'Que la marca y el objeto salen de la misma mesa: el logotipo, la chapa y el vinilo no pasan por tres proveedores que no se hablan.',
      'Que se mide antes de cortar: la fachada se re-midió en el sitio y el rótulo se envió con la medida real, no con la del plano.',
      'Que se monta sin dañar el soporte: adhesivo sobre chapa lijada, sin taladrar la chapa nueva.',
      'Que el trabajo se cierra con parte: siete piezas contadas una a una el día de la entrega.',
    ],
    imagenes: [
      {
        src: '/obras/rizzo-marca.webp',
        alt: 'Insignia de Sabores Rizzo: tricolor en pinceladas, gorro de chef con tres estrellas y el nombre sobre tabla',
        ancho: 1080,
        alto: 810,
        pie: 'La insignia. Tricolor en pinceladas, gorro con tres estrellas y el nombre en dos voces.',
      },
      {
        src: '/obras/rizzo/aplicacion.webp',
        alt: 'Simulación de la fachada con la insignia en el escaparate y el rótulo sobre la puerta',
        ancho: 700,
        alto: 467,
        pie: 'Simulación de la fachada antes de montar. La foto de la obra terminada entra al cerrar el caso.',
      },
    ],
  },
  {
    slug: 'qr-card',
    // ✅ Listo para publicar: la prueba es una unidad REAL en uso, fotografiada.
    // (Pendiente solo el OK de Diego; mientras tanto la puerta queda como en Rizzo.)
    publicado: false,
    prueba: {
      src: '/obras/qrcard/tarjeta-resena.webp',
      alt: 'Tarjeta NFC negra de Visuarte con el QR de reseñas de Google, teléfono y correo, sostenida en la mano',
      ancho: 1080,
      alto: 1920,
      pie: 'Una unidad real en uso: la tarjeta del estudio, con el QR de reseñas de Google.',
    },
    categoria: 'Digital & producto',
    cliente: 'QR Card Online',
    titular: 'Una tarjeta que se guarda sola.',
    golpe:
      'Producto propio: la web que configura el pedido, la tarjeta que se imprime aquí y el chip que ' +
      'abre el perfil. De la pantalla al bolsillo.',
    ficha: [
      { campo: 'Producto', valor: 'QR Card Online · producto propio' },
      { campo: 'Qué es', valor: 'Tarjeta de visita NFC con perfil digital: un toque y el contacto queda guardado' },
      { campo: 'Web', valor: 'qrcardonline.com (viva)' },
      { campo: 'Trabajo', valor: '2026 · septiembre a octubre' },
      { campo: 'Alcance', valor: 'Web con configurador y pago, diseño de la tarjeta, impresión y programación del chip' },
    ],
    reto: [
      {
        titulo: 'El papel se tira',
        texto:
          'Una tarjeta de visita de papel acaba en la papelera el mismo día. La de NFC se queda guardada ' +
          'en el móvil del que la recibe, sin app y sin escribir nada. El producto tenía que resolver eso ' +
          'en el primer toque: si el que la recibe duda, no la usa.',
      },
      {
        titulo: 'Sin taller no hay producto',
        texto:
          'La tarjeta no es solo la web: hay que imprimirla, y el pedido normal es de una o dos unidades. ' +
          'Los blanks con chip se compran de veinte en veinte y la impresión se cobra por lote, así que la ' +
          'cadena tenía que funcionar a una unidad sin perder dinero ni plazo.',
      },
    ],
    proceso: [
      {
        titulo: 'El catálogo',
        texto:
          'Tres soportes con el mismo chip: bio PVC (la funcional, la que se pide en cantidad), bambú (el ' +
          'tacto cálido, la que se queda en la mesa) y metacrilato negro con corte y grabado láser.',
      },
      {
        titulo: 'El configurador',
        texto:
          'En la web: modelo, color, subir la imagen del frente y verla colocada antes de pedir. Después los ' +
          'datos, la tecnología y el pago. Cuatro pasos y el pedido entra sin una conversación previa.',
      },
      {
        titulo: 'La impresión',
        texto:
          'Dos vías según tirada: taller propio (DTF y waterslide sobre PVC) para la pieza suelta, y taller ' +
          'local con impresión directa sobre PVC para los lotes. Se elige por coste y por plazo, no por ' +
          'costumbre.',
      },
      {
        titulo: 'El chip',
        texto:
          'Cada unidad se programa antes de enviarse: un toque abre el perfil del cliente — contacto, web, ' +
          'redes. No hay app que instalar ni cuenta que crear para quien la recibe.',
      },
      {
        titulo: 'El perfil',
        texto:
          'Cambiar de teléfono, de cargo o de web no obliga a reimprimir: se cambia el perfil y la tarjeta ' +
          'ya dice lo nuevo. Es la parte del producto que sigue viva cuando la tarjeta ya está en el bolsillo.',
      },
    ],
    resultado: {
      texto: [
        'La web está viva en qrcardonline.com, con el configurador abierto al público y el bloque legal ' +
          'completo (aviso, privacidad y desistimiento).',
        'Y la pieza física existe: unidades de prueba impresas por las dos caras, y una en uso con el QR ' +
          'de reseñas del estudio. La cadena entera —blanks, impresión, programación del chip— se montó ' +
          'para poder servir de una en una.',
      ],
      piezas: [
        {
          pieza: 'Soportes',
          medida: 'Tres modelos',
          material: 'Bio PVC · bambú · metacrilato negro',
          produccion: 'Impresión propia y taller local',
        },
        {
          pieza: 'Chip',
          medida: 'NTAG213 / NTAG215',
          material: 'NXP, comprado en blanco',
          produccion: 'Programado unidad a unidad',
        },
        {
          pieza: 'Impresión',
          medida: 'Una o dos caras',
          material: 'DTF y waterslide sobre PVC · directo sobre PVC',
          produccion: 'Taller propio y proveedor local',
        },
        {
          pieza: 'Perfil digital',
          medida: '—',
          material: 'Web con cuenta: contacto, enlaces y redes',
          produccion: 'Editable sin reimprimir',
        },
      ],
    },
    demuestra: [
      'Que se puede vender un producto y no solo un servicio: web con pago, diseño, impresión y chip se sostienen en la misma casa.',
      'Que la tirada de una unidad es viable: la técnica se elige por coste y plazo, no porque el proveedor tenga un mínimo.',
      'Que lo digital y lo físico no son dos trabajos: la tarjeta vale porque el perfil sigue vivo detrás.',
    ],
    imagenes: [
      {
        src: '/obras/qrcard/unidades.webp',
        alt: 'Tres unidades de tarjeta NFC turquesa y azul sobre fondo blanco, una colgada de un llavero',
        ancho: 1000,
        alto: 1334,
        pie: 'Unidades de prueba: PVC impreso por las dos caras (22 sep 2026). El texto es de muestra.',
      },
      {
        src: '/obras/qrcard/produccion.webp',
        alt: 'Las dos tarjetas recién impresas, una azul y una turquesa, sobre la mesa de trabajo',
        ancho: 1000,
        alto: 1334,
        pie: 'Salida de máquina: la cara impresa, antes de programar el chip.',
      },
      {
        src: '/obras/qrcard-bambu.webp',
        alt: 'Simulación del diseño de la tarjeta sobre acabado bambú',
        ancho: 1200,
        alto: 756,
        pie: 'Simulación del acabado en bambú: es el render del catálogo, no una foto.',
      },
    ],
  },
];

/**
 * Los casos que la web puede enseñar: publicados **y** con la foto de la obra real.
 * Una sola de las dos condiciones no basta (por eso son dos campos y no un booleano).
 */
export const casosPublicados = casos.filter((c) => c.publicado && c.prueba);
