import { Link } from 'react-router-dom';
import { cine } from '../data/site';

export default function Cine() {
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">Audiovisual · dirección de iluminación</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.4rem,6vw,4.6rem)' }}>
          Cine. Luz <em>y rodaje.</em>
        </h1>
        <p className="lede" style={{ marginTop: 'var(--space-lg)' }}>
          {cine.rol}. {cine.perfil}
        </p>
        <div className="hero-meta">
          <a className="btn" href={cine.imdb} target="_blank" rel="noreferrer">
            IMDB ↗
          </a>
          <span className="mono" style={{ color: 'var(--muted)', alignSelf: 'center' }}>
            {cine.nombre}
          </span>
        </div>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Marcas
          </h2>
          <span className="sec-num">01 — SPOTS</span>
        </div>
        <ul className="marcas-fila" aria-label="Marcas con las que ha trabajado">
          {cine.marcas.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Spots publicitarios
          </h2>
          <span className="sec-num">02 — TABLA</span>
        </div>
        <div className="tabla-cv">
          {cine.spots.map((s) => (
            <a className="fila" href={s.url} target="_blank" rel="noreferrer" key={s.marca + s.anio}>
              <span className="f-marca">{s.marca} ↗</span>
              <span className="f-rol">{s.rol}</span>
              <span className="f-anio">{s.anio}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Cine y ficción
          </h2>
          <span className="sec-num">03 — PELÍCULAS Y SERIES</span>
        </div>
        <div className="tabla-cv">
          {cine.cineFiccion.map((p) => (
            <div className="fila fila-plana" key={p.titulo}>
              <span className="f-marca">{p.titulo}</span>
              <span className="f-rol">
                {p.rol} — {p.tipo}
              </span>
              <span className="f-anio">{p.anio}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          <div>
            <div className="sec-head" style={{ border: 0, padding: 0, marginBottom: 'var(--space-md)' }}>
              <h2 className="display" style={{ fontSize: '1.5rem' }}>
                Videoclips
              </h2>
            </div>
            <ul className="lista-simple">
              {cine.videoclips.map((v) => (
                <li key={v.titulo}>
                  <a href={v.url} target="_blank" rel="noreferrer">
                    {v.titulo} ↗
                  </a>
                  <span className="mono">{v.rol}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="sec-head" style={{ border: 0, padding: 0, marginBottom: 'var(--space-md)' }}>
              <h2 className="display" style={{ fontSize: '1.5rem' }}>
                Equipo y set
              </h2>
            </div>
            <ul className="lista-simple">
              {cine.equipo.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.5rem' }}>
            Formación
          </h2>
          <span className="sec-num">04</span>
        </div>
        <ul className="lista-simple">
          {cine.formacion.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <Link className="btn" to="/contacto">
            Pedir presupuesto de rodaje
          </Link>
        </div>
      </section>
    </>
  );
}
