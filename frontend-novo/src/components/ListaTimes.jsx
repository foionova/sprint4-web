import { useEffect, useState } from 'react';

export default function ListaTimes() {
  const [times, setTimes] = useState([]);
  const [busca, setBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState('pontos');

  useEffect(() => {
    fetch('/dados.json')
      .then((res) => res.json())
      .then((data) => setTimes(data.times))
      .catch((err) => console.error('Erro ao carregar dados:', err));
  }, []);

  function toggleFavorito(id) {
    setTimes((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, favorito: !t.favorito } : t
      )
    );
  }

  const timesFiltrados = times
    .filter((t) =>
      t.nome.toLowerCase().includes(busca.toLowerCase())
    )
    .sort((a, b) =>
      ordenacao === 'pontos'
        ? b.pontos - a.pontos
        : a.nome.localeCompare(b.nome)
    );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tabela de Times</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 flex-1 rounded"
          placeholder="Buscar time..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select
          className="border px-2 py-1 rounded"
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
        >
          <option value="pontos">Ordenar por Pontos</option>
          <option value="nome">Ordenar por Nome</option>
        </select>
      </div>

      <ul className="space-y-2">
        {timesFiltrados.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-3 rounded shadow-md ${
              t.favorito ? 'bg-yellow-100' : 'bg-white'
            }`}
          >
            <span>
              <strong>{t.nome}</strong> — {t.pontos} pts
            </span>
            <button
              className="text-sm border px-2 py-1 rounded hover:bg-yellow-200"
              onClick={() => toggleFavorito(t.id)}
            >
              {t.favorito ? '★ Favorito' : '☆ Favoritar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
