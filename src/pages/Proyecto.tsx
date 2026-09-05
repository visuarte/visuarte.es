import { Link, Navigate, useParams } from 'react-router-dom';
import { proyectos } from '../data/site';

export default function Proyecto() {
  const { id } = useParams();
  const p = proyectos.find((x) => x.id === id);
  if (!p) return <Navigate to="/trabajo" replace />;

  return (
    <section className="wrap">
      <div className="proyecto-hero">
        <Link to="/trabajo" className="link-arrow" style={{ marginBottom: 'var(--space-lg)' }}>
          ← Trabajo
        </Link>
        <p className="eyebrow" style={{ marginTop: 'var(--space-xl)' }}>
          {p.numero} — {p.categoria} · {p.capa}
        </p>
        <h1 className="display proyecto-titulo">{p.nombre}</h1>
        <p className="lede" style={{ marginTop: 'var(--space-md)' }}>
          {p.resumen}
        </p>

        <div className="meta-grid">
          <div className="meta-campo">
            <span className="clave">Servicio</span>
            <div className="valor">{p.servicio}</div>
          </div>
          <div className="meta-campo">
            <span className="clave">Ámbito</span>
            <div className="valor">{p.ambito}</div>
          </div>
          <div className="meta-campo">
            <span className="clave">Marca</span>
            <div className="valor">{p.capa === 'cliente' ? 'Cliente' : 'Del estudio'}</div>
          </div>
        </div>
      </div>

      <ul className="detalle-list">
        {p.detalle.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <div style={{ padding: 'var(--space-xl) 0 var(--space-2xl)' }}>
        {p.enlace ? (
          <a className="btn" href={p.enlace.url} target="_blank" rel="noreferrer">
            {p.enlace.texto} ↗
          </a>
        ) : (
          <Link to="/contacto" className="btn">
            Pedir algo así
          </Link>
        )}
      </div>
    </section>
  );
}
