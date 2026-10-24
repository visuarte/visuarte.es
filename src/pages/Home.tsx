import { Link } from 'react-router-dom';
import { servicios, proyectos, contacto, capaTitulo } from '../data/site';
import { IMAGOTIPO_SVG } from '../components/imagotipo_svg';

export default function Home() {
  const destacados = proyectos.filter((p) => p.img).slice(0, 3);
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              Estudio de diseño · imprenta · audiovisual · digital
            </p>
            {/* Claim sellado (POSICIONAMIENTO §9) + frase de promesa firmada 24 oct 2026.
                Decisión: el claim manda el titular; «Desde la sabiduría» firma debajo;
                el método se dice en una línea, sin esconderlo ni venderlo. */}
            <h1 className="display hero-title">
              Pensado a lo grande.<br />
              <em>Fabricado de verdad.</em>
            </h1>
            <p className="firma">Desde la sabiduría</p>
            <p className="lede hero-lede">
              {contacto.marca} trabaja de punta a punta: dirección de arte, diseño y
              producción. De la idea al objeto y a la pantalla, con una sola mano del
              primer boceto al último acabado.
            </p>
            <p className="metodo">
              Dirección de arte que fabrica con IA. Se ve antes de imprimirse y se
              revisa antes de entregarse.
            </p>
            <div className="hero-meta">
              <Link to="/trabajo" className="btn">
                Ver el trabajo
              </Link>
              <Link to="/contacto" className="btn btn-ghost">
                Hablar con el estudio
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div
              className="imagotipo"
              dangerouslySetInnerHTML={{ __html: IMAGOTIPO_SVG }}
            />
          </div>
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
