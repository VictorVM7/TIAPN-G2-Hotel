// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());

// Bibliotecas
const { Router } = require("express");
const path = require('path');
const bodyParser = require('body-parser');

// Conversor do body da requisição 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Controller
const LoginController = require('../controllers/Login');
const FuncionarioController = require('../controllers/Funcionario');

// Routes
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaLogin.html")
const LoginRouter = Router()
const FuncionarioRouter = Router()

// Página HTML
LoginRouter.get("/login", function(req, res){
  res.sendFile(TelaPath)
});

// Rotas do Login
LoginRouter.post('/menuPrincipal', FuncionarioController.getOneFunc)

// Exportar
module.exports = LoginRouter;