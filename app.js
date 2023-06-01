// Classes importadas
const express = require('express');
const routes = require('./src/routes/Routes');
const user = require('./src/controllers/User');
const app = express();

app.use(express.json());
app.use("/", routes);

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});