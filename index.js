
const express = require('express');

const app = express();

app.get('/', (req, res) => {
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


const express = require('express');

const porta = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo a tela inicia do nosso site')
});

app.get('/inspectionar', (req, res) => {
    console.log('nova requisicação recebida!')
    console.log('method: ', req.method);
    console.log('URL: ', req.URL);
    console.log('method: ', req.header);
});


app.get('/api/produts', (res) =>  {
    res.json([
        {
            "id": "1", 
            "nome" : "notebook",
        },
        {
            "id": "2", 
            "nome" : "mouse",
        },
        {
            "id": "3", 
            "nome" : "desk",
        },
        {
            "id": "4", 
            "nome" : "monitor",
        }

    ])
    
});



