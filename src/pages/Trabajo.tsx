import { proyectos } from '../data/site';
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
        de entregarse.
      </p>

      <div className="trabajo-lista" style={{ marginTop: 'var(--space-xl)' }}>
        {proyectos.map((p) => (
          <Link to={`/trabajo/${p.id}`} className="trabajo-item" key={p.id}>
            <span className="num">{p.numero}</span>
            <h2 className="titulo">{p.nombre}</h2>
            <span className="cat">
              {p.categoria}
              <br />
              {p.capa}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
