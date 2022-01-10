const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)


app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="idade">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:senhaUsuario?', (req, res) => {
    // /profiles/3 req.params
    // /profiles/?chave=valor1&chave2=valor2  req.query
    // /
    console.log(req.params);
    console.log(req.query);
    res.send(`seja bem vindo: ${req.params.idUsuarios}`);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`oque vc mi enviou foi ${req.body.idade}`);
})


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando da porta 300');
});
