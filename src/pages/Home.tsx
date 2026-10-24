import { Link } from 'react-router-dom';
import { IconoTerritorio } from '../components/iconos';
import { territorios, proyectos, contacto, capaTitulo } from '../data/site';
import { IMAGOTIPO_SVG } from '../components/imagotipo_svg';

export default function Home() {
  const destacados = proyectos.filter((p) => p.img).slice(0, 3);
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              Marca · espacio · digital · automatización
            </p>
            {/* Claim sellado + UNA frase que dice qué somos para el cliente (24 oct 2026).
                Diego: «tres eslóganes seguidos no conectan»; «una sola mano» suena a manco;
                «la dirección de arte no fabrica»; y el proceso no es un beneficio.
                Se queda lo que vende: el cargo entero de la comunicación, y tú a lo tuyo. */}
            <h1 className="display hero-title">
              Pensado a lo grande.<br />
              <em>Fabricado de verdad.</em>
            </h1>
            <p className="lede hero-lede">
              {contacto.marca} se hace cargo de tu comunicación de principio a fin:
              estrategia, dirección de arte, diseño y producción. Tú te quitas esa
              carga; nosotros ponemos el criterio y el proceso.
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
            Los cuatro territorios
          </h2>
          <span className="sec-num">01 — MARCA · ESPACIO · DIGITAL · AUTOMATIZACIÓN</span>
        </div>
        <div className="servicios">
          {territorios.map((s) => (
            <article className="servicio" key={s.numero}>
              <IconoTerritorio nombre={s.icono} />
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
