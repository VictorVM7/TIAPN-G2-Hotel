// Classes importadas
const ClienteRouter = require('./src/routes/ClienteRoutes');
const bodyParser = require('body-parser');
const Cliente = require('./src/models/Cliente');

const express = require('express');
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/assets'))
app.use("/", ClienteRouter);


// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});

