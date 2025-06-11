const pool = require('../db/pool');

const listarOficinas = async (req, res) => {
  try {
    const { servico, cidade } = req.query;

    const result = await pool.query(
      `SELECT * FROM oficinas
       WHERE ($1::text IS NULL OR servicos @> ARRAY[$1])
       AND ($2::text IS NULL OR cidade ILIKE $2)`,
      [servico || null, cidade ? `%${cidade}%` : null]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar oficinas" });
  }
};

module.exports = { listarOficinas };