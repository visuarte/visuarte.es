import { Link } from 'react-router-dom';

/**
 * NO ENCONTRADO — antes de esta página, una URL inexistente devolvía la portada vacía
 * (HTTP 200 y pantalla en blanco). Repaso del 24 oct 2026: soft-404 para Google y
 * callejón sin salida para quien teclea mal un enlace.
 *
 * Nota honesta: el status sigue siendo 200 porque el sitio es una SPA que se sirve con
 * rewrite en Vercel; devolver un 404 real requiere una función de borde (deuda declarada).
 */
export default function NoEncontrado() {
  return (
    <section className="wrap hero">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Error 404</p>
          <h1 className="display hero-title">
            Esta página no existe <em>(o ya no).</em>
          </h1>
          <p className="lede hero-lede">
            El enlace que has seguido no lleva a ninguna parte. Puede que se haya movido, que
            se llamara de otra forma o que nunca existiera.
          </p>
          <div className="hero-meta">
            <Link to="/" className="btn">
              Volver al inicio
            </Link>
            <Link to="/trabajo" className="btn btn-ghost">
              Ver el trabajo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
