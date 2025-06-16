const pool = require('../db');

const listarOficinas = async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM oficinas');
    res.json(resultado.rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar oficinas' });
  }
};

module.exports = { listarOficinas };
