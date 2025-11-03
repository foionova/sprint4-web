# Sprint 4 — Web Development

Projeto React consumindo **JSON local**, com **manipulação do DOM** e **criação de eventos**, reaproveitando a base da Sprint 3 (API Node/Express + JWT).  
Front e back rodam separadamente. O deploy é **somente do front** (Vercel).

## ✅ Requisitos atendidos (Sprint 4)

- [x] **Projeto React** (base existente em `frontend-novo/`)
- [x] **Consumo de API via JSON local** (`public/dados.json`)
- [x] **Revisão do DOM** (renderização dinâmica, condicionais)
- [x] **Criação de eventos** (busca, ordenação, favoritar; toggle de tema)
- [x] **Estrutura semântica / W3C** (labels/aria/role)
- [x] **Versionamento no GitHub** (commits temáticos)
- [x] **Deploy do front no Vercel**
- [x] **Entrega:** `.zip` **sem** `node_modules`

## 📂 Estrutura do repositório

```text
SPRINT4-WEB-MAIN/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ auth.controller.js
│  │  ├─ middleware/
│  │  │  ├─ auth.middleware.js
│  │  │  └─ errorHandler.js
│  │  ├─ routes/
│  │  │  ├─ auth.routes.js
│  │  │  └─ profile.routes.js
│  │  ├─ seed/
│  │  │  └─ seed.js
│  │  └─ services/
│  │     └─ auth.service.js
│  ├─ server.js
│  └─ package.json
└─ frontend-novo/
   ├─ public/
   │  └─ dados.json               # JSON local consumido pelo React
   ├─ src/
   │  ├─ components/
   │  │  ├─ ListaTimes.jsx        # lista dinâmica + eventos
   │  │  └─ ProtectedRoute.jsx
   │  ├─ pages/
   │  │  └─ Home.jsx              # renderiza a ListaTimes
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  └─ index.css
   ├─ index.html
   └─ package.json
```

## Como rodar localmente
1) Backend 
cd backend
npm install
npm run dev
disponível em http://localhost:3000
(Swagger se configurado)

3) Frontend
cd frontend-novo
npm install
npm run dev
disponível em http://localhost:5173

## 🧩 Funcionalidades
Consumo de JSON local

Arquivo: frontend-novo/public/dados.json

O componente ListaTimes.jsx consome via:
const res = await fetch('/dados.json');
const data = await res.json();
setTimes(data.times);

## DOM dinâmico

## Mapeamento do JSON em lista de cards
Estados de loading, erro e lista vazia com renderização condicional
Estilos condicionais (ex.: item favorito destacado)

## Eventos (interatividade)

Busca por nome (input onChange)
Ordenação (select: pontos desc / nome A→Z)
Favoritar (toggle em cada item)
Tema claro/escuro (botão global no App.jsx)

## Rotas protegidas (bônus integrado à Sprint 3)

ProtectedRoute.jsx verifica token no localStorage
Páginas protegidas: /, /times, /partidas, /classificacao
Páginas públicas: /login, /cadastro

## 👨‍💻 Grupo 
Cristian Belasco Arancibia – RM: 565710

João Lucas Ferreira dos Santos – RM: 562608

Felipe Yamaguchi Mesquita – RM: 556170

Samuel de Oliveira da Silva – RM: 566244

Rafael Felix – RM: 565855
