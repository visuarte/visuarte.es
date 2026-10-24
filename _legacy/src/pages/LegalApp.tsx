import { contacto } from '../data/site';

const RESPONSABLE = {
  marca: 'VISUARTE STUDIO',
  titular: 'Diego Gómez García',
  nif: '48550448R',
  email: 'visuarte.creativos@gmail.com',
};

const PRIVACIDAD = [
  {
    h: '1. Qué hace esta página',
    p: 'Esta es la política de privacidad y la página de borrado de datos de las aplicaciones de Instagram operadas por VISUARTE STUDIO (Diego Gómez García, NIF 48550448R). Alcanza a todas las aplicaciones propias del estudio que se conectan a Instagram (p. ej. "Visuarte_vision" y las que se creen en el futuro), que se detallan en cada caso en los ajustes de Instagram.',
  },
  {
    h: '2. Qué datos trata',
    p: 'Las aplicaciones de VISUARTE se conectan únicamente a cuentas de Instagram del propio estudio o de las marcas que gestiona, siempre con el consentimiento de su titular. Leen y publican contenido (publicaciones, reels y comentarios) de esas cuentas con la única finalidad de gestionar la presencia de la marca en Instagram. No recogen ni tratan datos de terceros, no rastrean usuarios ajenos y no ceden datos a terceros.',
  },
  {
    h: '3. Base de legitimación',
    p: 'El tratamiento se ampara en el interés legítimo del responsable (art. 6.1.f RGPD): la gestión de sus propias cuentas corporativas de Instagram. El consentimiento se obtiene de forma visible al vincular cada cuenta a una aplicación. No se realiza elaboración de perfiles ni cesión de datos a terceros.',
  },
  {
    h: '4. Conservación y derechos',
    p: 'Los datos tratados son los de las cuentas corporativas del responsable y se conservan mientras la aplicación esté vinculada. El titular puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al correo indicado abajo. También puede desconectar cualquier aplicación en cualquier momento desde los ajustes de Instagram, lo que revoca su acceso de inmediato.',
  },
];

export default function LegalApp() {
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">Legal</p>
        <h1 className="display" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
          Privacidad de las apps de VISUARTE.
        </h1>
        <p className="lede" style={{ marginTop: 'var(--space-lg)' }}>
          Información sobre el tratamiento de datos de las aplicaciones de
          Instagram de VISUARTE STUDIO y cómo solicitar el borrado de datos.
        </p>
      </section>

      <hr className="rule" />

      <section className="wrap section-tight">
        <div className="prose" style={{ maxWidth: '62ch' }}>
          {PRIVACIDAD.map((b) => (
            <div key={b.h}>
              <h2 style={{ fontSize: '1.4rem', margin: '2em 0 0.5em' }}>{b.h}</h2>
              <p>{b.p}</p>
            </div>
          ))}

          <h2 style={{ fontSize: '1.4rem', margin: '2em 0 0.5em' }}>5. Borrado de datos</h2>
          <p>
            Para solicitar el borrado de los datos vinculados a cualquiera de las
            aplicaciones de VISUARTE, escribe a{' '}
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a> con el
            asunto "Borrado de datos". El responsable atenderá la solicitud en el
            plazo legal. También puedes eliminar la aplicación desde los ajustes
            de Instagram, lo que revoca el acceso y detiene todo tratamiento.
          </p>

          <h2 style={{ fontSize: '1.4rem', margin: '2em 0 0.5em' }}>6. Responsable</h2>
          <p>
            {RESPONSABLE.marca} — {RESPONSABLE.titular} (NIF {RESPONSABLE.nif}).
            Contacto: <a href={`mailto:${RESPONSABLE.email}`}>{RESPONSABLE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
