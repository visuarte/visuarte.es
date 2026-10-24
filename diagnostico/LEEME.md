# Diagnóstico de móvil

Instrumento para **medir** el móvil sin adivinar (24 oct 2026). Mete la web en un iframe de
390 px y lista los elementos que desbordan, además de `viewport` / `scrollWidth` / `clientWidth`.

## Uso

```bash
npm run build
cp diagnostico/movil.html dist/
npm run preview                     # en otra terminal
# a 390 px reales:
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --virtual-time-budget=8000 --dump-dom "http://localhost:4173/movil.html?ruta=/" | \
  sed -n '/id="out"/,/<\/pre>/p' | sed 's/<[^>]*>//g'
rm dist/movil.html                  # no se queda en el build
```

**Por qué existe:** las capturas de Chrome con `--window-size=390,844` **mienten** — capturan
390 px de un layout más ancho y parece que todo está cortado. El iframe sí impone un viewport real
de 390 y las media queries responden a él. *La captura no es una medida.*
