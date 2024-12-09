const authService = require('../services/authService');

// Registrar usuário
const register = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const user = await authService.registerUser(nome, email, senha);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login de usuário
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const token = await authService.loginUser(email, senha);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };
