const express = require('express');
const app = express();
const soma = require('./soma');

app.get('/', (req, res) => {
    res.send('🚀 Aplicação rodando com DevOps! Deploy atualizado!');
});

app.get('/agradecimento', (req, res) => {
    res.send('Obrigada por assistir o webinar de DevOps - Profa. Letícia!');
});

app.get('/soma', (req, res) => {
    const { a, b } = req.query;
    const resultado = soma(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
