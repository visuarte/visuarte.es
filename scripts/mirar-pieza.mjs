/**
 * MIRAR UNA PIEZA DE LA VITRINA EN MÓVIL (27 oct 2026).
 *
 * Las fotos van con `loading="lazy"`: una captura de página completa las deja vacías
 * porque nunca entran en el viewport. Esto se coloca ENCIMA de la pieza, espera a que
 * la imagen tenga datos y captura solo lo que se ve.
 *
 * Uso: node scripts/mirar-pieza.mjs http://localhost:4321/trabajo 2 /tmp/pieza.png 390
 */
import { writeFile } from 'node:fs/promises';

const url = process.argv[2] || 'http://localhost:4321/trabajo';
const indice = Number(process.argv[3] || 1) - 1;
const salida = process.argv[4] || '/tmp/pieza.png';
const ancho = Number(process.argv[5] || 390);

const lista = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const pestana = lista.find((t) => t.type === 'page');
const ws = new WebSocket(pestana.webSocketDebuggerUrl);
let id = 0;
const pendientes = new Map();
ws.addEventListener('message', (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pendientes.has(m.id)) { pendientes.get(m.id)(m); pendientes.delete(m.id); }
});
const enviar = (method, params = {}) =>
  new Promise((resolve) => { const mio = ++id; pendientes.set(mio, resolve); ws.send(JSON.stringify({ id: mio, method, params })); });

await new Promise((r) => ws.addEventListener('open', r));
await enviar('Emulation.setDeviceMetricsOverride', { width: ancho, height: 900, deviceScaleFactor: 2, mobile: true });
await enviar('Page.enable');
await enviar('Page.navigate', { url });
await new Promise((r) => setTimeout(r, 2000));

const info = await enviar('Runtime.evaluate', {
  expression: `(() => {
    const piezas = [...document.querySelectorAll('.pieza')];
    const p = piezas[${indice}];
    if (!p) return JSON.stringify({ error: 'sin pieza', total: piezas.length });
    p.scrollIntoView({ block: 'center' });
    return JSON.stringify({ total: piezas.length, cliente: p.querySelector('h3')?.textContent,
      img: p.querySelector('img')?.getAttribute('src') });
  })()`,
  returnByValue: true,
});
const datos = JSON.parse(info.result.result.value);
console.log(datos);

await new Promise((r) => setTimeout(r, 1800)); // que cargue la foto
const captura = await enviar('Page.captureScreenshot', { format: 'png' });
await writeFile(salida, Buffer.from(captura.result.data, 'base64'));
console.log('captura:', salida);
ws.close();
