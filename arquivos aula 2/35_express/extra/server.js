const express = require('express');
const app = express();

const rotas = require('./routes');

app.use(rotas);

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('servidor iniciado com sucesso');
})