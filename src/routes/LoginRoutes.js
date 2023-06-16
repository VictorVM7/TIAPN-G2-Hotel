// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());
const session = require('express-session');

// Bibliotecas
const { Router } = require("express");
const path = require('path');
const bodyParser = require('body-parser');

// Conversor do body da requisição 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Controller
const FuncionarioController = require('../controllers/Funcionario');
const SetView = require('../SetView');
const { LoadNome, LoadUser } = require('../CheckSession');

// Routes
const LoginRouter = Router()

// Página HTML
LoginRouter.get("/login", function(req, res){
   SetView.ViewTelaLogin(res, LoadUser(req), LoadNome(req));
});

// Rotas do Login
LoginRouter.post('/menuPrincipal', FuncionarioController.getOneFunc)

// Exportar
module.exports = LoginRouter;