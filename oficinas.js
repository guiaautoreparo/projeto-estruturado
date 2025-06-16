const express = require('express');
const router = express.Router();
const { listarOficinas } = require('../controllers/oficinasController');

router.get('/', listarOficinas);

module.exports = router;
