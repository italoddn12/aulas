const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.paginaInicial);

route.post('/register', loginController.register);
route.post('/login', loginController.login);
route.get('/logout', loginController.logout);

module.exports = route;