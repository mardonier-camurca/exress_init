
const express = require('express');

const app = express();

app.get('/Home', (req, res) => {
    res.send('Olá, Mundo')
});

app.get('/Contact', (req, res) => {
    res.send('email: mardonier@gmail.com')
});

app.get('/Features', (req, res) => {
    res.send('Dev Mardonier S Camurça')
});

app.get('/About', (req, res) => {
    res.send('Dev Mardonier S Camurça')
});