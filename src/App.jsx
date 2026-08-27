import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import ReservarLugar from './pages/ReservarLugar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/reservar" element={<ReservarLugar />} />
      </Routes>
  </BrowserRouter>
  );
}
export default App
