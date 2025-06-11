const pool = require('../db/pool');

const listarServicos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM servicos");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao listar serviços" });
  }
};

module.exports = { listarServicos };