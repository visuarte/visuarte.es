import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
// Home se carga de entrada (es la primera pintura). El resto, BAJO DEMANDA (lazy loading):
// quien entra a la portada no descarga el código de /cine, /legal ni /trabajo.
// Medido 24 oct 2026: chunk inicial 262 kB -> ver después.
import Home from './pages/Home';
const Estudio = lazy(() => import('./pages/Estudio'));
const Trabajo = lazy(() => import('./pages/Trabajo'));
const Proyecto = lazy(() => import('./pages/Proyecto'));
const Cine = lazy(() => import('./pages/Cine'));
const Contacto = lazy(() => import('./pages/Contacto'));
const LegalApp = lazy(() => import('./pages/LegalApp'));
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'));
const NoEncontrado = lazy(() => import('./pages/NoEncontrado'));

const MOOD_POR_RUTA: Record<string, 'brasa' | 'llama'> = {
  // Decisión Diego 5 Sep: TODO el sitio en La Llama (oscuro).
  // Diferencia al estudio de mapicp.com (que es claro) manteniendo la retícula.
  '/': 'llama',
  '/estudio': 'llama',
  '/trabajo': 'llama',
  '/contacto': 'llama',
};

function MoodShell() {
  const location = useLocation();
  const mood = MOOD_POR_RUTA[location.pathname] ?? 'llama';

  useEffect(() => {
    document.documentElement.setAttribute('data-mood', mood);
  }, [mood]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div data-mood={mood}>
      <div className="grano" aria-hidden="true" />
      <Layout />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="wrap" style={{ minHeight: '60vh' }} aria-busy="true" />}>
        <Routes>
        <Route element={<MoodShell />}>
          <Route index element={<Home />} />
          <Route path="estudio" element={<Estudio />} />
          <Route path="trabajo" element={<Trabajo />} />
          <Route path="trabajo/:id" element={<Proyecto />} />
          <Route path="cine" element={<Cine />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="legal/aviso" element={<AvisoLegal />} />
          <Route path="legal/privacidad-app" element={<LegalApp />} />
          {/* catch-all (24 oct 2026): sin esto, una URL inexistente devolvía la portada vacía */}
          <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
