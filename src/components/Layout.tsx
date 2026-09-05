import { NavLink, Outlet } from 'react-router-dom';
import { nav, contacto } from '../data/site';

function Wordmark() {
  // Imagotipo + texto VISUARTE en Poppins (marca, Diego 5 Sep)
  return (
    <NavLink to="/" aria-label="VISUARTE — inicio" className="brand-link">
      <img className="brand-mark" src="/logo/imagotipo-visuarte.png" alt="" />
      <span className="brand-txt">
        VISUARTE<span className="brand-txt-sub"> STUDIO</span>
      </span>
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
