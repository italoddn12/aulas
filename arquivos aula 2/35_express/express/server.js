const express = require('express');
const app = express();

//         Criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPADATE,   DELETE
//         POST    GET   PUT        DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario');
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando da porta 300');
});
