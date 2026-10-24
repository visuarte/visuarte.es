/**
 * ICONOS DE TERRITORIO — dibujados en casa, inline, sin librería.
 *
 * Diego, 24 oct 2026: *"al diseño le faltan unos iconos que refuercen pero sin cargar"*.
 * De ahí las tres reglas de este archivo:
 *   1. **Inline SVG** — cero peticiones, cero fuente de iconos, cero dependencia.
 *   2. **Trazo, no relleno** — heredan `currentColor`: el acento lo pone el CSS, no el archivo.
 *   3. **Una sola retícula** (24×24, trazo 1.5, esquinas redondeadas) para que los cuatro
 *      pesen lo mismo visualmente.
 *
 * Peso: los cuatro juntos son ~1 KB de markup (se comprime con el resto del bundle).
 * Nada de `react-icons` ni de iconos como imagen: eso sí carga.
 */

import type { ReactElement } from 'react';

export type Nombre = 'marca' | 'espacio' | 'digital' | 'automatizacion';

const PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

/** Marca — la faceta: el diamante tallado (la identidad se piensa y se corta). */
function Marca() {
  return (
    <svg {...PROPS}>
      <path d="M12 2.5 21.5 9 12 21.5 2.5 9Z" />
      <path d="M2.5 9h19M12 2.5 8.5 9l3.5 12.5L15.5 9Z" />
    </svg>
  );
}

/** Espacio — la fachada: banda, rótulo y puerta (el local por dentro y por fuera). */
function Espacio() {
  return (
    <svg {...PROPS}>
      <rect x="2.5" y="5" width="19" height="15" rx="1.5" />
      <path d="M2.5 9.5h19" />
      <path d="M5.5 7.2h4" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  );
}

/** Digital — la pantalla: marco, barra y código. */
function Digital() {
  return (
    <svg {...PROPS}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M2.5 8h19" />
      <path d="M5.3 6h.01M7.6 6h.01" />
      <path d="m9.5 12-2 2.2 2 2.2M14.5 12l2 2.2-2 2.2" />
    </svg>
  );
}

/** Automatización — el engranaje: proceso que se repite solo (el criterio no). */
function Automatizacion() {
  return (
    <svg {...PROPS}>
      <circle cx="12" cy="12" r="3.6" />
      <path d="M17.4 12h1.6M15.8 15.8l1.15 1.15M12 17.4v1.6M8.2 15.8 7.05 16.95M6.6 12H5M8.2 8.2 7.05 7.05M12 6.6V5M15.8 8.2l1.15-1.15" />
    </svg>
  );
}

const MAPA: Record<Nombre, () => ReactElement> = {
  marca: Marca,
  espacio: Espacio,
  digital: Digital,
  automatizacion: Automatizacion,
};

export function IconoTerritorio({ nombre, size = 30 }: { nombre: Nombre; size?: number }) {
  const Icono = MAPA[nombre];
  if (!Icono) return null;
  return (
    <span className="servicio-icono" style={{ width: size, height: size }}>
      <Icono />
    </span>
  );
}
