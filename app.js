// var http = require('http');
// http.createServer(function(req, res){
//     res.end("Funcionando!")
// }).listen(8080, 'localhost')

// Classes importadas
const express = require('express');
const routes = require('./src/routes/Routes');
const user = require('./src/controllers/Cliente');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use("/", routes);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});

