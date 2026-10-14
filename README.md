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

**Vercel — integración nativa de Git.** Push a `main` → Vercel construye y publica solo.
Producción: <https://visuarte.es> · configuración en `vercel.json` (`outputDirectory: dist`:
se despliega **solo el build**, nunca la raíz del repo).

> ⚠️ El GitHub Action `.github/workflows/deploy.yml` **se retiró el 14 Oct 2026**. Era una
> **segunda** vía de deploy que **nunca funcionó** (faltaba el secret `VERCEL_TOKEN` → fallaba
> en 0 s en *cada* push desde el 24 jun) y era **redundante** con la integración nativa.
> **No volver a montarlo:** Vercel ya despliega solo en cada push a `main`.
