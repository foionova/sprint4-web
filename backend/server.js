import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// --- CONFIGURAÇÃO DO SWAGGER ---
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Projeto Passa a Bola',
      version: '1.0.0',
      description: 'Documentação da API de teste para o frontend',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./server.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// --- FIM DA CONFIGURAÇÃO ---

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// "Banco" em memória só pra testar integração
const times = [
  { id: '1', nome: 'Corinthians', logoUrl: 'url_logo_corinthians' },
  { id: '2', nome: 'Palmeiras', logoUrl: 'url_logo_palmeiras' },
  { id: '3', nome: 'São Paulo', logoUrl: 'url_logo_sao_paulo' },
];

const jogadoras = [];

// --- ROTAS DA API ---

// Documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota de teste para verificar se a API está no ar
 */
app.get('/', (req, res) => {
  res.send('Servidor backend rodando');
});

/**
 * @swagger
 * /cadastro:
 *   post:
 *     summary: Rota de cadastro (simulada)
 */
app.post('/cadastro', (req, res) => {
  const dados = req.body;
  console.log('Dados recebidos no cadastro:', dados);
  res.json({
    sucesso: true,
    mensagem: 'Cadastro realizado com sucesso!',
    dados,
  });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Rota de login (simulada)
 */
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  // Aceita QUALQUER email + senha e devolve um "fake token"
  return res.status(200).json({
    message: 'Login bem-sucedido!',
    token: 'fake-jwt-token-123',
  });
});

/**
 * @swagger
 * /times:
 *   get:
 *     summary: Retorna uma lista de times de teste
 */
app.get('/times', (req, res) => {
  res.json(times);
});

/**
 * @swagger
 * /times:
 *   post:
 *     summary: Cadastra um novo time (simulado)
 */
app.post('/times', (req, res) => {
  const { nome, numeroJogadoras, corUniforme, treinadora, historia } = req.body;

  if (!nome || !numeroJogadoras || !corUniforme || !treinadora) {
    return res
      .status(400)
      .json({ message: 'Campos obrigatórios do time não enviados.' });
  }

  const novoTime = {
    id: String(times.length + 1),
    nome,
    numeroJogadoras,
    corUniforme,
    treinadora,
    historia: historia || '',
  };

  times.push(novoTime);
  console.log('Novo time cadastrado:', novoTime);

  return res.status(201).json(novoTime);
});

/**
 * @swagger
 * /jogadoras:
 *   get:
 *     summary: Lista jogadoras cadastradas (simulado)
 */
app.get('/jogadoras', (req, res) => {
  res.json(jogadoras);
});

/**
 * @swagger
 * /jogadoras:
 *   post:
 *     summary: Cadastra uma nova jogadora (simulado)
 */
app.post('/jogadoras', (req, res) => {
  const {
    nome,
    email,
    telefone,
    numeroCamiseta,
    posicao,
    timeAfiliado,
    experiencia,
    jogadoraLivre,
  } = req.body;

  if (!nome || !email || !numeroCamiseta || !posicao) {
    return res
      .status(400)
      .json({ message: 'Campos obrigatórios da jogadora não enviados.' });
  }

  const novaJogadora = {
    id: String(jogadoras.length + 1),
    nome,
    email,
    telefone: telefone || '',
    numeroCamiseta,
    posicao,
    timeAfiliado: timeAfiliado || '',
    experiencia: experiencia || 1,
    jogadoraLivre: !!jogadoraLivre,
  };

  jogadoras.push(novaJogadora);
  console.log('Nova jogadora cadastrada:', novaJogadora);

  return res.status(201).json(novaJogadora);
});

// --- ROTA PARTIDAS ---
app.get('/partidas', (req, res) => {
  const partidas = [
    {
      id: '1',
      data: '2025-09-20',
      local: 'Arena Corinthians',
      timeCasa: 'Corinthians',
      golsCasa: 2,
      timeFora: 'Palmeiras',
      golsFora: 1,
    },
    {
      id: '2',
      data: '2025-09-22',
      local: 'Allianz Parque',
      timeCasa: 'Palmeiras',
      golsCasa: 3,
      timeFora: 'São Paulo',
      golsFora: 2,
    },
  ];
  res.json(partidas);
});

// --- ROTA CLASSIFICAÇÃO ---
app.get('/classificacao', (req, res) => {
  const tabela = [
    { posicao: 1, time: 'Palmeiras', pontos: 45, jogos: 20, vitorias: 14 },
    { posicao: 2, time: 'Corinthians', pontos: 42, jogos: 20, vitorias: 13 },
    { posicao: 3, time: 'São Paulo', pontos: 38, jogos: 20, vitorias: 12 },
  ];
  res.json(tabela);
});

// Iniciar servidor
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Documentação da API em http://localhost:${PORT}/api-docs`);
  });
}

export default app;
