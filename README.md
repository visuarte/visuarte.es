# visuarte.es — VISUARTE Studio

Web/portfolio de **VISUARTE Studio** (diseño, imprenta, audiovisual y digital).
Cara pública del estudio. React + TypeScript + Vite.

## Ramas

- `beta` — **rediseño en curso (canon Tierras-Mapi)**. Mood híbrido: secciones
  de texto en La Brasa (clara) y portfolio en La Llama (oscura). Contenido real.
- `legacy-cyber` — versión anterior (estética cyber-3D con contenido ficticio),
  archivada el 5 Sep 2026. No se publica.

## Sistema

- Tokens: `src/styles/design-tokens.css` — canon `paletas.json` v0.5.0
  (Tierras-Mapi, sellado). Prohibido hex suelto en componentes.
- Contenido único: `src/data/site.ts` (proyectos, servicios, contacto).
- Capas visuales: `studio-brand` (piel del sitio) y `client-brand` (marca de
  cada proyecto mostrada dentro del sistema del estudio).

## Desarrollo

```sh
npm install
npm run dev     # local
npm run build   # producción (tsc + vite)
npm run lint
```

## Deploy

Vercel (workflow `.github/workflows/deploy.yml`, rama `main`, secrets
`VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID`).
