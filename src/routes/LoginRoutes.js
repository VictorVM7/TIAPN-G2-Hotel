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

// Routes
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaLogin.html")
const LoginRouter = Router()

// Página HTML
LoginRouter.get("/login", function(req, res){
  res.sendFile(TelaPath)
});

// Rotas do Login
LoginRouter.post('/login', LoginController.getOneFunc)

// Exportar
module.exports = LoginRouter;