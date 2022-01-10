const express = require('express');

exports.paginaInicial = (req, res) => {
    res.send('ola mundo')
}

exports.pegaDados = (req, res) => {
    res.send(`Pagina de contatos`)
    console.log(req.params)
}