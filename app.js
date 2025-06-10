require('dotenv').config();
const express = require('express');
const app = express();

const agendamentosRoutes = require('./routes/agendamentosRoutes');
const oficinasRoutes = require('./routes/oficinasRoutes');
const servicosRoutes = require('./routes/servicosRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

// Rotas
app.use('/agendamentos', agendamentosRoutes);
app.use('/oficinas', oficinasRoutes);
app.use('/servicos', servicosRoutes);

// Middleware global de erro
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});