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
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.html")
const LoginRouter = Router()

// Página HTML
LoginRouter.get("/login", function(req, res){
  res.sendFile(TelaPath)
});

// Rotas do Login
LoginRouter.post('/login/logar', function(req, res){
    const { FuncLogin, FuncSenha } = req.body
    if(!FuncLogin && !FuncSenha){
        console.log("Opa")
    } else {
        console.log(FuncLogin)
        console.log(FuncSenha)
    }

    res.sendFile(TelaMainPath)
})

// Exportar
module.exports = LoginRouter;