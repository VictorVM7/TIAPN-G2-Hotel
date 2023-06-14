// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());


// Classes importadas
const ClienteRouter = require('./src/routes/ClienteRoutes');
const LoginRouter = require('./src/routes/LoginRoutes');
const FuncionarioRouter = require('./src/routes/FuncionarioRoutes');
const bodyParser = require('body-parser');

// Conversor do body da requisição 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Usar CSS passando para estático
app.use(express.static(__dirname + '/assets'))

// Routers
app.use("/", ClienteRouter);
app.use("/", LoginRouter);
app.use("/", FuncionarioRouter);

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});

