import { proyectos, capaTitulo } from '../data/site';
import { Link } from 'react-router-dom';

export default function Trabajo() {
  return (
    <section className="wrap section-tight">
      <p className="eyebrow">El portfolio</p>
      {/* mood llama: cada pieza luce su marca sobre el vacío */}
      <h1 className="display" style={{ fontSize: 'clamp(2rem,5vw,3.6rem)' }}>
        Trabajo.
      </h1>
      <p className="lede">
        Piezas propias y de clientes. Cada una con su marca; todas con el mismo
        método detrás: la pieza se piensa, se diseña, se imprime y se revisa antes
        de entregarse. El sello {`"`}cliente{`"`} es trabajo para otros; el sello{" "}
        {`"`}estudio{`"`} es producto o servicio de la casa.
      </p>

      <div className="obra-grid" style={{ marginTop: 'var(--space-xl)' }}>
        {proyectos.map((p) => (
          <Link to={`/trabajo/${p.id}`} className="obra" key={p.id}>
            <div className="obra-media">
              {p.img ? (
                <img src={p.img} alt={p.nombre} loading="lazy" />
              ) : (
                <div className="obra-media-vacia" aria-hidden="true">
                  <span>{p.numero}</span>
                </div>
              )}
            </div>
            <div className="obra-cuerpo">
              <div className="obra-meta">
                <span className="mono" style={{ color: 'var(--accent)' }}>
                  {p.numero}
                </span>
                <span
                  className={p.capa === 'cliente' ? 'chip chip-cliente' : 'chip chip-estudio'}
                >
                  {capaTitulo[p.capa]}
                </span>
              </div>
              <h2 className="obra-titulo">{p.nombre}</h2>
              <p className="obra-cat">{p.categoria} — {p.ambito}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
