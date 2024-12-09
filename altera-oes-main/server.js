const express = require('express');
const prisma = require('@prisma/client').PrismaClient;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Para carregar variáveis do arquivo .env

const app = express();
const prismaClient = new prisma();

// Middleware
app.use(express.json());
app.use(cors());

// Configurações do JWT
const JWT_SECRET = process.env.JWT_SECRET || 'seuSegredoAqui'; // Usando a variável de ambiente

// Função para gerar JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
}

// Rota de Registro
app.post('/api/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await prismaClient.user.create({
      data: {
        name: nome,
        email: email,
        password: hashedPassword
      }
    });

    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
});

// Rota de Login
app.post('/api/authenticate', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prismaClient.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    const validPassword = await bcrypt.compare(senha, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao autenticar.' });
  }
});
// Rota para salvar uma nova mensagem de contato
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  try {
    const newContact = await prismaClient.contact.create({
      data: {
        name: name,
        email: email,
        message: message
      }
    });

    res.status(201).json({ contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar mensagem de contato.' });
  }
});


// Função middleware para verificar o JWT
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extrair o token do cabeçalho
  
  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verifica o token com a chave secreta
    req.userId = decoded.id; // Supondo que o userId está no token
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido.' });
  }
};

// Rota para adicionar um comentário
app.post('/api/comments', verifyToken, async (req, res) => {
  const { content } = req.body; // O conteúdo do comentário enviado no corpo da requisição
  
  if (!content) {
    return res.status(400).json({ error: 'Conteúdo do comentário é obrigatório.' });
  }

  try {
    const newComment = await prismaClient.comment.create({
      data: {
        content,
        userId: req.userId, // Associando o comentário ao usuário logado
      },
    });

    res.status(201).json({ comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar comentário.' });
  }
});

// Rota para buscar os comentários
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await prismaClient.comment.findMany({
      include: {
        user: {
          select: { email: true }, // Incluir o e-mail do usuário que fez o comentário
        },
      },
    });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar comentários.' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
