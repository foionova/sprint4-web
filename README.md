# 🏆 Sprint 4 – Web Development – Passa a Bola

Projeto da Sprint 4 da disciplina de **Web Development**, integrando:

- **Back-end** em Node + Express (API simples de autenticação e dados de futebol);
- **Front-end estático** (HTML + Tailwind + JavaScript) baseado no projeto **Copa Passa a Bola** da disciplina de Front-end;
- Consumo de API com `fetch`, manipulação do DOM e criação de eventos.

A ideia é usar o MESMO projeto para apresentação em **Web Dev** e **Front-end**, mostrando:
- layout responsivo e semântico (front),
- autenticação, consumo de API e interatividade (web).

---

## 🚀 Como rodar / abrir o projeto

### 1. Backend (API – Node/Express)

1. Abrir um terminal na raiz do projeto.
2. Rodar:
3. O projeto sobe em http://localhost:3000
```bash
cd backend
npm install
npm run dev

## 📁 Estrutura do repositório

```text
SPRINT4-WEB-MAIN/
├─ backend/                      # API Node/Express
│  ├─ prisma/                    # (schema e migrações, se necessário)
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ auth.controller.js   # (versão mais completa de auth, se usada)
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
│  ├─ server.js                  # servidor Express usado na sprint 4
│  ├─ server.test.js             # testes da API (opcional)
│  ├─ package.json
│  └─ package-lock.json
│
└─ projeto_passa_bola-main/      # front estático (HTML + Tailwind + JS + React)
   ├─ index.html                 # Dashboard protegido (área logada)
   ├─ src/
   │  └─ pages/
   │     ├─ entrar.html          # Login (consome /login)
   │     ├─ cadastrar.html       # Cadastro (consome /cadastro)
   │     ├─ copa.html            # Home oficial da Copa (front bonito)
   │     ├─ times.html           # Lista dinâmica de times (consome /times)
   │     ├─ partidas.html        # Lista de partidas (consome /partidas)
   │     ├─ classificacao.html   # Tabela de classificação (consome /classificacao)
   │     ├─ meu_time.html        # Conteúdo extra da sprint de front
   │     ├─ noticias.html        # Conteúdo extra da sprint de front
   │     ├─ curiosidades.html    # Conteúdo extra da sprint de front
   │     ├─ regras.html          # Página de regras da Copa
   │     └─ demais *.html        # Demais páginas de conteúdo do projeto original
   ├─ README.md                  # README específico do front (se necessário)
   └─ package-lock.json          # (caso tenha sido usado algum pacote local)
