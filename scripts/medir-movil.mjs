/**
 * MEDIR LA PÁGINA EN UN ANCHO DE MÓVIL DE VERDAD (27 oct 2026).
 *
 * Chrome headless con `--screenshot --window-size=390` NO cambia el viewport de layout
 * como un móvil: sirve para mirar, no para medir. Esto habla por CDP, fija el ancho con
 * `Emulation.setDeviceMetricsOverride` y devuelve los números que importan:
 *   · innerWidth / scrollWidth  -> ¿hay desbordamiento horizontal?
 *   · font-size del menú        -> ¿se lee? (auditoría de Manuel: 9,6 px)
 *   · alto de cada enlace       -> ¿llega a 44 px de área táctil?
 *   · padding-block de .section -> ¿siguen pegadas las secciones?
 *
 * Uso: node scripts/medir-movil.mjs http://localhost:4321/ 390
 */
const url = process.argv[2] || 'http://localhost:4321/';
const ancho = Number(process.argv[3] || 390);

const lista = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const pestana = lista.find((t) => t.type === 'page');
if (!pestana) throw new Error('sin pestaña en el Chrome de depuración');

const ws = new WebSocket(pestana.webSocketDebuggerUrl);
let id = 0;
const pendientes = new Map();

ws.addEventListener('message', (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pendientes.has(m.id)) {
    pendientes.get(m.id)(m);
    pendientes.delete(m.id);
  }
});

const enviar = (method, params = {}) =>
  new Promise((resolve) => {
    const mio = ++id;
    pendientes.set(mio, resolve);
    ws.send(JSON.stringify({ id: mio, method, params }));
  });

await new Promise((r) => ws.addEventListener('open', r));

await enviar('Emulation.setDeviceMetricsOverride', {
  width: ancho,
  height: 844,
  deviceScaleFactor: 2,
  mobile: true,
});
await enviar('Page.enable');
await enviar('Page.navigate', { url });
await new Promise((r) => setTimeout(r, 2500));

const expresion = `(() => {
  const nav = [...document.querySelectorAll('.main-nav a')];
  const estiloNav = nav[0] ? getComputedStyle(nav[0]) : null;
  const secciones = [...document.querySelectorAll('.wrap.section, .wrap.section-tight')].slice(0, 4)
    .map((s) => getComputedStyle(s).paddingTop + ' / ' + getComputedStyle(s).paddingBottom);
  const altos = nav.map((a) => Math.round(a.getBoundingClientRect().height));
  return JSON.stringify({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    desborda: document.documentElement.scrollWidth > window.innerWidth,
    menuFuente: estiloNav ? estiloNav.fontSize : null,
    menuAltos: altos,
    menuLineas: new Set(nav.map((a) => Math.round(a.getBoundingClientRect().top))).size,
    seccionesPadding: secciones,
    h1: document.querySelector('h1') ? document.querySelector('h1').getBoundingClientRect().width : null,
    // Quién se sale: los elementos cuya caja derecha pasa del viewport (el culpable, con nombre)
    culpables: [...document.querySelectorAll('body *')]
      .filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1)
      .slice(0, 6)
      .map((e) => e.tagName.toLowerCase() + '.' + (e.className || '').toString().split(' ')[0]
        + ' → ' + Math.round(e.getBoundingClientRect().right) + 'px'),
  });
})()`;

const r = await enviar('Runtime.evaluate', { expression: expresion, returnByValue: true });
const medidas = JSON.parse(r.result.result.value);
console.log(JSON.stringify({ url, ancho, ...medidas }, null, 1));

// Captura opcional: aquí SÍ es el viewport real, no la ventana del navegador.
const salida = process.argv[4];
if (salida) {
  const alto = await enviar('Runtime.evaluate', {
    expression: 'document.documentElement.scrollHeight',
    returnByValue: true,
  });
  const captura = await enviar('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: ancho, height: Math.min(alto.result.result.value, 4000), scale: 1 },
  });
  const { writeFile } = await import('node:fs/promises');
  await writeFile(salida, Buffer.from(captura.result.data, 'base64'));
  console.log('captura:', salida);
}
ws.close();
