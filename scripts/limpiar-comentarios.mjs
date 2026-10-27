/**
 * LIMPIAR COMENTARIOS DEL BUILD (27 oct 2026, auditoría de Manuel).
 *
 * Los comentarios `<!-- … -->` de los .astro se emiten al HTML y cualquiera los lee con
 * «ver código fuente»: notas de taller, decisiones y hasta el nombre de un documento
 * interno. En el código se quedan (ahí sirven); en el navegador, no.
 *
 * Se ejecuta al final de `npm run build`, solo sobre los .html de `dist/`. Respeta los
 * comentarios condicionales (`<!--[if …]>`), que sí deben viajar.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const RE_COMENTARIO = /<!--(?!\[if)[\s\S]*?-->/g;

async function htmls(dir) {
  const salida = [];
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) salida.push(...(await htmls(ruta)));
    else if (entrada.name.endsWith('.html')) salida.push(ruta);
  }
  return salida;
}

const ficheros = await htmls('dist');
let quitados = 0;
for (const fichero of ficheros) {
  const original = await readFile(fichero, 'utf8');
  const limpio = original.replace(RE_COMENTARIO, '');
  if (limpio !== original) {
    await writeFile(fichero, limpio, 'utf8');
    quitados += (original.match(RE_COMENTARIO) || []).length;
  }
}
console.log(`[limpiar-comentarios] ${ficheros.length} HTML · ${quitados} comentarios fuera del build`);
