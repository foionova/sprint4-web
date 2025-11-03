import { useEffect, useMemo, useState } from "react";

/**
 * ListaTimes
 * - Consome JSON local (public/dados.json)
 * - DOM dinâmico (map, condicionais)
 * - Eventos: busca, ordenação, favoritar
 */
export default function ListaTimes() {
  const [times, setTimes] = useState([]);
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("pontos"); // 'pontos' | 'nome'
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setErro("");
        const res = await fetch("/dados.json"); // JSON local
        if (!res.ok) throw new Error("Falha ao carregar dados.json");
        const data = await res.json();
        setTimes(data.times || []);
      } catch (e) {
        setErro(e.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function toggleFavorito(id) {
    setTimes(prev =>
      prev.map(t => (t.id === id ? { ...t, favorito: !t.favorito } : t))
    );
  }

  const timesFiltrados = useMemo(() => {
    const f = times.filter(t =>
      t.nome.toLowerCase().includes(busca.toLowerCase())
    );
    if (ordenacao === "pontos") {
      return [...f].sort((a, b) => b.pontos - a.pontos);
    }
    return [...f].sort((a, b) => a.nome.localeCompare(b.nome));
  }, [times, busca, ordenacao]);

  if (loading) return <p role="status" className="p-4">Carregando…</p>;
  if (erro) return <p role="alert" className="p-4 text-red-600">{erro}</p>;
  if (!times.length) return <p className="p-4">Nenhum time disponível.</p>;

  return (
    <section className="p-6 max-w-2xl mx-auto">
      <header className="mb-4">
        <h2 className="text-xl font-semibold">Tabela de Times (JSON local)</h2>
      </header>

      <div className="flex gap-2 mb-4">
        <label className="sr-only" htmlFor="busca">Buscar time</label>
        <input
          id="busca"
          className="border px-2 py-1 flex-1 rounded"
          placeholder="Buscar time…"
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
        <label className="sr-only" htmlFor="ordenacao">Ordenar por</label>
        <select
          id="ordenacao"
          className="border px-2 py-1 rounded"
          value={ordenacao}
          onChange={e => setOrdenacao(e.target.value)}
        >
          <option value="pontos">Pontos (desc)</option>
          <option value="nome">Nome (A→Z)</option>
        </select>
      </div>

      <ul className="space-y-2">
        {timesFiltrados.map(t => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-3 rounded shadow ${
              t.favorito ? "bg-yellow-100" : "bg-white"
            }`}
          >
            <span>
              <strong>{t.nome}</strong> — {t.pontos} pts
            </span>
            <button
              className="text-sm border px-2 py-1 rounded hover:bg-yellow-200"
              onClick={() => toggleFavorito(t.id)}
              aria-label={t.favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              {t.favorito ? "★ Favorito" : "☆ Favoritar"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
