
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaTimes from './components/ListaTimes';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas
import Home from './pages/Home';
import Entrar from './pages/entrar';
import Cadastrar from './pages/Cadastrar';
import Times from './pages/Times';
import Partidas from './pages/Partidas';
import Classificacao from './pages/Classificacao';

const [dark, setDark] = useState(false);
return (
  <main className={dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}>
    <button
      onClick={() => setDark(!dark)}
      className="m-4 p-2 border rounded"
    >
      {dark ? '☀️ Claro' : '🌙 Escuro'}
    </button>
    <ListaTimes />
  </main>
);

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
    
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastrar />} />

        {/* Rotas Protegidas */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/times" element={<ProtectedRoute><Times /></ProtectedRoute>} />
        <Route path="/partidas" element={<ProtectedRoute><Partidas /></ProtectedRoute>} />
        <Route path="/classificacao" element={<ProtectedRoute><Classificacao /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    <ListaTimes/>
    </main>
  );
}

export default App;
