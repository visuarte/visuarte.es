import { Link } from 'react-router-dom';
import { servicios, proyectos, contacto, capaTitulo } from '../data/site';

export default function Home() {
  const destacados = proyectos.filter((p) => p.img).slice(0, 3);
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">
          Estudio de diseño · imprenta · audiovisual · digital
        </p>
        {/* TODO Diego: claim definitivo — desvinculado del vocabulario Academia */}
        <h1 className="display hero-title">
          La idea, el trazo y <em>la pieza impresa.</em>
        </h1>
        <p className="lede hero-lede">
          {contacto.marca} es un estudio donde la identidad se piensa, se diseña,
          se imprime y se cuelga. Del papel al foco, del vinilo a la pantalla —
          piezas que se ven antes de imprimirse y se revisan antes de entregarse.
        </p>
        <div className="hero-meta">
          <Link to="/trabajo" className="btn">
            Ver el trabajo
          </Link>
          <Link to="/contacto" className="btn btn-ghost">
            Hablar con el estudio
          </Link>
        </div>
      </section>

      <hr className="rule" />

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Lo que hace el estudio
          </h2>
          <span className="sec-num">01 — CAPACIDADES</span>
        </div>
        <div className="servicios">
          {servicios.map((s) => (
            <article className="servicio" key={s.numero}>
              <span className="servicio-num">{s.numero}</span>
              <h3>{s.nombre}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Trabajo reciente
          </h2>
          <Link to="/trabajo" className="link-arrow">
            Ver todo →
          </Link>
        </div>
        <div className="destacados">
          {destacados.map((p) => (
            <Link to={`/trabajo/${p.id}`} className="destacado" key={p.id}>
              <div className="obra-media obra-media--sm">
                {p.img ? <img src={p.img} alt={p.nombre} loading="lazy" /> : null}
              </div>
              <div className="destacado-meta">
                <span className="mono" style={{ color: 'var(--accent)' }}>
                  {p.numero} · {p.categoria}
                </span>
              </div>
              <h3 className="titulo">{p.nombre}</h3>
              <span className={p.capa === 'cliente' ? 'chip chip-cliente' : 'chip chip-estudio'}>
                {capaTitulo[p.capa]}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
