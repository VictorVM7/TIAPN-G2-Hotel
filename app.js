const express = require('express');
const app = express();

//
const db = require('./models/db');

// Caminho raiz
app.get("/", async (req, res) => {
    res.send("Página Inicial Teste");
});

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});