import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Estudio from './pages/Estudio';
import Trabajo from './pages/Trabajo';
import Proyecto from './pages/Proyecto';
import Contacto from './pages/Contacto';

const MOOD_POR_RUTA: Record<string, 'brasa' | 'llama'> = {
  '/': 'brasa',
  '/estudio': 'brasa',
  '/trabajo': 'llama',
  '/contacto': 'brasa',
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
      <Routes>
        <Route element={<MoodShell />}>
          <Route index element={<Home />} />
          <Route path="estudio" element={<Estudio />} />
          <Route path="trabajo" element={<Trabajo />} />
          <Route path="trabajo/:id" element={<Proyecto />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
