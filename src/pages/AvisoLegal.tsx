const RESPONSABLE = {
  marca: 'VISUARTE STUDIO',
  titular: 'Diego Gómez García',
  nif: '48550448R',
  email: 'visuarte.creativos@gmail.com',
  telefono: '616 996 306',
};

const AVISO = [
  {
    h: '1. Titular del sitio',
    p: 'En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), se informa de que este sitio web es titularidad de VISUARTE STUDIO — Diego Gómez García, con NIF 48550448R, con domicilio profesional en Alicante (España).',
  },
  {
    h: '2. Actividad',
    p: 'VISUARTE STUDIO es un estudio creativo dedicado al diseño gráfico, la imprenta y rotulación, la producción audiovisual y el producto digital. Este sitio tiene carácter meramente informativo/comercial: muestra el trabajo y los servicios del estudio y ofrece vías de contacto directo.',
  },
  {
    h: '3. Contacto',
    p: `Para cualquier consulta relacionada con este sitio puedes escribir a ${RESPONSABLE.email} o llamar al ${RESPONSABLE.telefono}.`,
  },
  {
    h: '4. Propiedad intelectual',
    p: 'Los contenidos de este sitio (textos, imágenes, logotipos, diseño y código) son titularidad de VISUARTE STUDIO o se utilizan con autorización de sus autores. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular.',
  },
  {
    h: '5. Responsabilidad',
    p: 'El titular no se hace responsable del mal uso que se haga de los contenidos de este sitio ni de los contenidos o servicios de terceros a los que se pueda enlazar. Los enlaces externos se ofrecen únicamente como referencia y no implican relación ni respaldo.',
  },
  {
    h: '6. Cookies y datos personales',
    p: 'Este sitio es una vitrina informativa: no usa cookies no esenciales, no incorpora analítica ni publicidad y no recoge datos personales a través de formularios. El contacto se realiza por correo electrónico o teléfono. Para el detalle del tratamiento de datos, consulta la Política de Privacidad enlazada en el pie de página.',
  },
];

export default function AvisoLegal() {
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">Legal</p>
        <h1 className="display" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
          Aviso legal.
        </h1>
        <p className="lede" style={{ marginTop: 'var(--space-lg)' }}>
          Información legal del sitio de VISUARTE STUDIO, en cumplimiento de la
          LSSI.
        </p>
      </section>

      <hr className="rule" />

      <section className="wrap section-tight">
        <div className="prose" style={{ maxWidth: '62ch' }}>
          {AVISO.map((b) => (
            <div key={b.h}>
              <h2 style={{ fontSize: '1.4rem', margin: '2em 0 0.5em' }}>{b.h}</h2>
              <p>{b.p}</p>
            </div>
          ))}

          <h2 style={{ fontSize: '1.4rem', margin: '2em 0 0.5em' }}>7. Responsable</h2>
          <p>
            {RESPONSABLE.marca} — {RESPONSABLE.titular} (NIF {RESPONSABLE.nif}).
            Contacto:{' '}
            <a href={`mailto:${RESPONSABLE.email}`}>{RESPONSABLE.email}</a> ·{' '}
            {RESPONSABLE.telefono}. Jurisdicción: España · Alicante. Autoridad de
            control en materia de protección de datos: Agencia Española de
            Protección de Datos (AEPD).
          </p>

          <p style={{ marginTop: '2em', opacity: 0.7, fontSize: '0.9rem' }}>
            Última actualización: septiembre de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
