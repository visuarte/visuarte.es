import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { nav, contacto } from '../data/site';

function Wordmark() {
  const { pathname } = useLocation();
  const oscuro = pathname.startsWith('/trabajo');
  return (
    <NavLink to="/" aria-label="VISUARTE — inicio" className="brand-link">
      {oscuro ? (
        <img className="brand-mark" src="/logo/1t-crema.svg" alt="VISUARTE" />
      ) : (
        <img className="brand-mark" src="/logo/1t-brasa.svg" alt="VISUARTE" />
      )}
    </NavLink>
  );
}

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Wordmark />
          <nav className="main-nav" aria-label="Principal">
            {nav.map((item) => (
              <NavLink key={item.path} to={item.path} end>
                {item.nombre}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span className="footer-word">{contacto.marca}</span>
          <span className="footer-word">
            © {new Date().getFullYear()} — {contacto.eslogan}
          </span>
        </div>
      </footer>
    </>
  );
}
