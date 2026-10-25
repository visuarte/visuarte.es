# Acta de retirada de ramas — 25 Oct 2026

> Retirada **con rastro** (protocolo `docs/protocolos/retirada-con-rastro.md` de MAPICP).
> Decisión declarada en el SSOT desde el 24 Oct 2026 (`PER-0016`): *«retirar beta y legacy-cyber
> CON RASTRO»*. Aquí está el rastro.

## Por qué se retiran

El dueño del repo abría `git branch -a` y veía cuatro ramas sin saber cuál se publica. La ficha del
proyecto llegó a afirmar que producción era `beta` — **era falso**, y costó una rectificación el
24 Oct. Ramas muertas que parecen vivas son un pie de gato de documentación: hacen que la próxima
persona (o el próximo agente) edite donde no se publica.

## Lo que se retira (medido antes de tocar nada)

| Rama | Cabeza | Fecha | Commits que `main` NO tiene | Veredicto |
|---|---|---|---|---|
| `beta` | `14d8c3c` *beta: aviso legal (LSSI art.10) + enlace en footer* | 11 Sep 2026 | **0** | obsoleta — todo su contenido está en `main` |
| `legacy-cyber` | `c7f627f` *Vercel deploy config + GitHub Actions CI/CD* | 24 Jun 2026 | **0** | versión cyber-3D con contenido ficticio, archivada el 5 Sep |
| `astro` | `12006a9` *feat(estudio): hero con la pila de pliegos* | 24 Oct 2026 | **0** | ya integrada en `main`; solo era el carril de trabajo |
| `repaso-404` | `bbe5f18` *fix: 404 real, enlace de QR CARD al dominio propio y etiquetas fuera de beta* | 24 Oct 2026 | **0** | ya integrada en `main`; el frente del 404 está cerrado |

**El dato que manda: las cuatro tienen 0 commits que `main` no tenga.** Borrarlas no elimina ni una
línea de código. Se midió con `git rev-list --count origin/<rama>..origin/main` y al revés.

## Cómo se conserva la vuelta atrás

Cada rama retirada queda **etiquetada** antes de borrarse:

```
archivo/beta-20261025          → 14d8c3c
archivo/legacy-cyber-20261025  → c7f627f
archivo/astro-20261025         → 12006a9
archivo/repaso-404-20261025    → bbe5f18
```

El tag apunta al commit para siempre: la rama desaparece del listado, la historia no.
Vuelta atrás exacta, en un comando:

```sh
git push origin refs/tags/archivo/beta-20261025:refs/heads/beta
```

## Qué NO se toca

- `main` no se toca. Producción intacta.
- El commit de cada rama no se pierde: queda en su tag de archivo y en el historial de `main`
  (0 commits únicos, verificado).

## Estado tras la retirada

`git branch -r` debe devolver **una sola rama publicada: `origin/main`** y los cuatro tags de
archivo. Esa es la prueba de que la retirada se hizo.
