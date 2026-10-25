// SITEMAP GENERADO (25 oct 2026) — antes era un XML a mano en public/sitemap.xml y ya
// falló una vez: listaba rutas del sitio React anterior (/cine, /trabajo/<id>, ...) que
// devolvían 404. Prometer en el sitemap lo que no hay es entregar 404 a Google.
// Ahora se genera en el build: las rutas fijas + los casos de estudio PUBLICADOS.
// Un caso sin prueba no está en casosPublicados, así que no puede colarse aquí.
import type { APIRoute } from 'astro';
import { casosPublicados } from '../data/casos';

const sitio = 'https://visuarte.es';

// Las rutas que siempre existen. Si se añade una página, se añade aquí (o no aparece).
const rutas: { path: string; priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/estudio', priority: '0.9' },
  { path: '/rotulacion', priority: '0.9' },
  { path: '/audiovisual', priority: '0.9' },
  { path: '/trabajo', priority: '0.8' },
  { path: '/contacto', priority: '0.8' },
  { path: '/legal/aviso', priority: '0.3' },
  { path: '/legal/privacidad', priority: '0.3' },
];

export const GET: APIRoute = () => {
  // La barra final NO es decoración: es la forma que declara el canonical del Layout
  // (medido el 25 oct 2026: /trabajo → canonical /trabajo/). El sitio sirve las dos
  // formas con 200 (comprobado en producción), así que esto no evita una redirección:
  // lo que evita es que el sitemap y el canonical digan cosas distintas de la misma URL.
  const conBarra = (ruta: string) => (ruta.endsWith('/') ? ruta : `${ruta}/`);
  const casos = casosPublicados.map(
    (c) => `  <url><loc>${sitio}${conBarra(`/trabajo/${c.slug}`)}</loc><priority>0.7</priority></url>`
  );
  const fijas = rutas.map(
    (r) => `  <url><loc>${sitio}${conBarra(r.path)}</loc><priority>${r.priority}</priority></url>`
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generado en el build (src/pages/sitemap.xml.ts). No editar a mano: si una ruta
     no existe, no debe estar aquí. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...fijas, ...casos].join('\n')}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
