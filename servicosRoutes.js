const express = require('express');
const router = express.Router();
const { listarServicos } = require('../controllers/servicosController');

router.get('/', listarServicos);

module.exports = router;