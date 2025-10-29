Sprint 4 — Web Development

Projeto React consumindo JSON local, com manipulação do DOM e criação de eventos, reaproveitando a base da Sprint 3 (API Node/Express + JWT).
Front e back rodam separadamente. O deploy é somente do front (Vercel).

✅ Requisitos atendidos (Sprint 4)

 Projeto React (base existente em frontend-novo/)

 Consumo de API via JSON local (public/dados.json)

 Revisão do DOM (renderização dinâmica, condicionais)

 Criação de eventos (busca, ordenação, favoritar; toggle de tema)

 Estrutura semântica / W3C (labels/aria/role)

 Versionamento no GitHub (commits temáticos)

 Deploy do front no Vercel

 Entrega: .zip sem node_modules

📂 Estrutura do repositório
SPRINT4-WEB-MAIN/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/ (auth.controller.js)
│  │  ├─ middleware/  (auth.middleware.js, errorHandler.js)
│  │  ├─ routes/      (auth.routes.js, profile.routes.js)
│  │  ├─ seed/        (seed.js)
│  │  └─ services/    (auth.service.js)
│  ├─ server.js
│  ├─ package.json
│  └─ (tests, prisma, etc.)
└─ frontend-novo/
   ├─ public/
   │  └─ dados.json         ← JSON local consumido pelo React
   ├─ src/
   │  ├─ components/
   │  │  ├─ ListaTimes.jsx  ← lista dinâmica + eventos
   │  │  └─ ProtectedRoute.jsx
   │  ├─ pages/
   │  │  └─ Home.jsx        ← renderiza a ListaTimes
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  └─ index.css / App.css
   ├─ index.html
   └─ package.json

🚀 Como rodar localmente
1) Backend (Sprint 3)
cd backend
npm install
npm run dev
# disponível em http://localhost:3000
# (Swagger se configurado)


JWT: as rotas protegidas usam Authorization: Bearer <token>; middleware em src/middleware/auth.middleware.js.

2) Frontend (Sprint 4)
cd frontend-novo
npm install
npm run dev
# disponível em http://localhost:5173

🧩 Funcionalidades (Sprint 4)
Consumo de JSON local

Arquivo: frontend-novo/public/dados.json

O componente ListaTimes.jsx consome via:

const res = await fetch('/dados.json');
const data = await res.json();
setTimes(data.times);

DOM dinâmico

Mapeamento do JSON em lista de cards

Estados de loading, erro e lista vazia com renderização condicional

Estilos condicionais (ex.: item favorito destacado)

Eventos (interatividade)

Busca por nome (input onChange)

Ordenação (select: pontos desc / nome A→Z)

Favoritar (toggle em cada item)

Tema claro/escuro (botão global no App.jsx)

Rotas protegidas (bônus integrado à Sprint 3)

ProtectedRoute.jsx verifica token no localStorage

Páginas protegidas: /, /times, /partidas, /classificacao

Páginas públicas: /login, /cadastro
