# visuarte.es — VISUARTE Studio

Web/portfolio de **VISUARTE Studio** (diseño, imprenta, audiovisual y digital).
Cara pública del estudio. **Astro** (estático, cero JavaScript servido).

> **Este repo es la web. No confundir con `github.com/visuarte/visuarte`**, que es el
> **perfil de GitHub** de la marca (solo README + assets). Corregido el 24 Oct 2026.

## Producción

- URL: <https://visuarte.es> (**apex = dominio primario**; `www` redirige al apex).
- **Rama de producción: `main`.** Verificado por el bundle servido, no por lo que diga un
  documento (24 Oct 2026: build limpio de `main` = JS servido; 25 Oct: los tokens CSS vivos
  `--accent-texto #A8441A / #CD5320` coinciden con `src/styles/design-tokens.css`).
- **Deploy: Vercel, integración nativa de Git.** Push a `main` → Vercel construye y publica solo.
  `vercel.json` fija `outputDirectory: dist` (se despliega **solo el build**, nunca la raíz del repo).
- `dist/` es build local e ignorado.

> ⚠️ El GitHub Action `.github/workflows/deploy.yml` **se retiró el 14 Oct 2026**. Era una
> **segunda** vía de deploy que **nunca funcionó** (faltaba el secret `VERCEL_TOKEN` → fallaba
> en 0 s en *cada* push desde el 24 jun) y era **redundante** con la integración nativa.
> **No volver a montarlo:** Vercel ya despliega solo en cada push a `main`.

## Ramas

- `main` — **producción** (es la única que se publica).
- `www` — no es rama: es un dominio que redirige al apex.

## Estructura

```
src/
  layouts/Layout.astro      cabecera, SEO (canonical · og · JSON-LD), fuentes
  pages/                    9 ficheros → 8 rutas públicas + 404
  components/               Faq · Icono · Lightbox · Muestra
  data/site.ts              CONTENIDO ÚNICO (servicios, proyectos, contacto, trabajo)
  styles/                   design-tokens.css (SSOT del color) + base.css
public/
  fonts/ · hero/ · marcas/ · obras/ · territorios/ · logo/   imágenes y tipografías PROPIAS
  llms.txt · robots.txt · sitemap.xml · og-image.jpg
_legacy/                    el proyecto anterior (Vite + React), archivado — no se construye
diagnostico/                material de análisis (no se publica)
```

## Sistema

- **Tokens**: `src/styles/design-tokens.css` — canon `paletas.json` v0.5.1, rama madre Visuarte
  (familia fuego). Mood híbrido por sección: `brasa` (clara) para texto, `llama` (oscura) para
  portfolio. **Prohibido hex suelto fuera de ese archivo.**
- **Contenido único**: `src/data/site.ts`. No se escribe texto en los `.astro` si vive en `site.ts`.
- **Cero peticiones a terceros**: Poppins se sirve desde `/fonts`, la cabecera se genera en local.
- **Legal** (canon legal web): `src/pages/legal/aviso.astro` + `privacidad.astro`, NIF en el pie.
  Perfil de la web registrado en MAPICP: `data/catalogos/canon-legal-web.json`.
- **Redirects** de la web anterior: en `vercel.json` (10, todos permanentes).

## Desarrollo

```sh
npm install
npm run dev       # local
npm run build     # producción (astro build → dist/)
npm run preview   # sirve el build
```

No hay `npm run lint`: no se ha montado linter en este repo (el anterior lo tenía en `_legacy/`).

## Reglas de este repo

1. **Nunca editar `beta` pensando que es producción.** `beta` es obsoleta y no se publica.
2. **Se mide por contenido, no por código HTTP.** Un 200 no prueba nada: buscar un marcador del
   texto en el HTML servido.
3. **La foto de la obra de un cliente entra cuando el cliente autoriza.** Lo que no está
   autorizado se cuenta en ficha, no se disfraza (`site.ts`, comentario de la sección TRABAJO).
