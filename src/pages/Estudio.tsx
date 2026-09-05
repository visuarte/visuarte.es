import { Link } from 'react-router-dom';
import { servicios } from '../data/site';

const metodo = [
  {
    nombre: 'El encargo',
    texto:
      'Todo trabajo empieza por entender de verdad: qué necesita el cliente, quién lo va a ver, en qué soporte va a vivir.',
  },
  {
    nombre: 'El sistema',
    texto:
      'Color y retícula propios, decididos y comprobados. La pieza no se improvisa: se apoya en un sistema y cada soporte lo respeta.',
  },
  {
    nombre: 'Ver antes de entregar',
    texto:
      'La pieza se previsualiza sobre el mundo real antes de imprimirse o desplegarse. Nunca se imprime a ciegas la primera vez.',
  },
  {
    nombre: 'La revisión real',
    texto:
      'Antes de cerrar, la pieza pasa por ojos de verdad: se lee, se ve, se critica. Lo que no se entiende, se corrige antes de salir.',
  },
];

export default function Estudio() {
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">El estudio</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.2rem,5.5vw,4.2rem)' }}>
          De la idea al objeto.
        </h1>
        {/* TODO Diego: revisar copy biográfico */}
        <p className="lede" style={{ marginTop: 'var(--space-lg)' }}>
          VISUARTE es un estudio de diseño, imprenta y producción que trabaja de
          punta a punta: la identidad se piensa aquí, se diseña aquí y se imprime
          en el taller propio. Sin terceros en medio del mensaje.
        </p>
      </section>

      <hr className="rule" />

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            El método
          </h2>
          <span className="sec-num">02 — CÓMO SE HACE</span>
        </div>
        <div className="pasos-metodo">
          {metodo.map((m, i) => (
            <div className="paso" key={m.nombre}>
              <span className="paso-num">0{i + 1}</span>
              <h3>{m.nombre}</h3>
              <p>{m.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section-tight">
        <div className="sec-head">
          <h2 className="display" style={{ fontSize: '1.8rem' }}>
            Capacidades
          </h2>
          <span className="sec-num">03 — SERVICIOS</span>
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
          <h2 className="display" style={{ fontSize: '1.5rem' }}>
            Detrás: Diego, gaffer
          </h2>
          <span className="sec-num">04 — AUDIOVISUAL</span>
        </div>
        <p className="prose" style={{ maxWidth: 'none' }}>
          Detrás del estudio está un gaffer con rodajes de spots, cine y
          videoclips a sus espaldas: iluminación para OPEL, ELPOZO, Jack Daniel's,
          TENA, PC Componentes o Carlos Alcaraz, y películas y series en Prime
          Video. El audiovisual no se terceriza: se hace aquí.
        </p>
        <div className="tabla-cv" style={{ marginTop: 'var(--space-lg)' }}>
          <Link className="fila" to="/cine">
            <span className="f-marca">Ver la trayectoria completa de cine ↗</span>
            <span className="f-rol">spots · cine · videoclips</span>
            <span className="f-anio">/cine</span>
          </Link>
        </div>
      </section>
    </>
  );
}
