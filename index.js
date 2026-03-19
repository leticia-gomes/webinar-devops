const express = require('express');
const soma = require('./soma');

const app = express();

app.get('/', (req, res) => {
    res.send('Aplicação rodando ...');
});

app.get('/agradecimento', (req, res) => {
    res.send('Obrigada por assistirem até aqui. Profa. Letícia!');
});

app.get('/soma', (req, res) => {
    const {a, b} = req.query;
    const resultado = soma(Number(a), Number(b));

    res.send(`Resultado: ${resultado}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});