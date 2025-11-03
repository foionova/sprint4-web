import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Entrar from "./pages/entrar";
import Cadastrar from "./pages/Cadastrar";
import Times from "./pages/Times";
import Partidas from "./pages/Partidas";
import Classificacao from "./pages/Classificacao";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-50 text-black min-h-screen"}>
      <BrowserRouter>
        <div className="p-4">
          <button
            onClick={() => setDark(v => !v)}
            className="m-1 p-2 border rounded"
          >
            {dark ? "☀️ Claro" : "🌙 Escuro"}
          </button>
        </div>

        <Routes>
          {/* Públicas */}
          <Route path="/login" element={<Entrar />} />
          <Route path="/cadastro" element={<Cadastrar />} />

          {/* Protegidas */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/times" element={<ProtectedRoute><Times /></ProtectedRoute>} />
          <Route path="/partidas" element={<ProtectedRoute><Partidas /></ProtectedRoute>} />
          <Route path="/classificacao" element={<ProtectedRoute><Classificacao /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
