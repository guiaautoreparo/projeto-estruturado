const express = require('express');
const app = express();
const pool = require('./db');
const oficinaRoutes = require('./routes/oficinas');

app.use(express.json());
app.use('/oficinas', oficinaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
