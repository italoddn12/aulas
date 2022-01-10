const express = require('express');
const rota = express.Router();
const homeController = require('./controller/homeController');

rota.get('/', homeController.paginaInicial);
rota.get('/contato/:nome?/:idade?', homeController.pegaDados)

module.exports = rota;