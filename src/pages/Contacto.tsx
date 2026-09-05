import { contacto } from '../data/site';

function href(value: string, tipo: 'tel' | 'mailto'): string | null {
  if (!value) return null;
  return tipo === 'tel' ? `tel:${value.replace(/\s/g, '')}` : `mailto:${value}`;
}

export default function Contacto() {
  return (
    <section className="wrap hero">
      <p className="eyebrow">Contacto</p>
      <h1 className="display" style={{ fontSize: 'clamp(2.2rem,5.5vw,4.2rem)' }}>
        Cuéntanos la semilla.
      </h1>
      <p className="lede" style={{ marginTop: 'var(--space-lg)' }}>
        Un rótulo, una identidad, una pieza impresa, un proyecto digital o un
        encargo audiovisual. Si todavía no sabes qué necesitas, también sirve:
        se empieza hablando.
      </p>

      <div className="contacto-grid">
        {contacto.telefono && (
          <div className="contacto-card">
            <span className="clave">Teléfono</span>
            <a
              className="valor"
              href={href(contacto.telefono, 'tel') ?? '#'}
              rel="noreferrer"
            >
              {contacto.telefono}
            </a>
          </div>
        )}
        {contacto.email && (
          <div className="contacto-card">
            <span className="clave">Email</span>
            <a
              className="valor"
              href={href(contacto.email, 'mailto') ?? '#'}
              rel="noreferrer"
            >
              {contacto.email}
            </a>
          </div>
        )}
        {contacto.base && (
          <div className="contacto-card">
            <span className="clave">Base</span>
            <span className="valor">{contacto.base}</span>
          </div>
        )}
        <div className="contacto-card">
          <span className="clave">Instagram</span>
          <a className="valor" href={contacto.instagramUrl} target="_blank" rel="noreferrer">
            {contacto.instagram} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
