// Bibliotecas
const { Router } = require("express");
const session = require('express-session');
const path = require('path')

// Controller
const FuncionarioController = require('../controllers/Funcionario');
const SetView = require("../SetView");
const { LoadUser, LoadNome } = require("../CheckSession");

// Routes
const FuncionarioRouter = Router()

// Chama HTML
FuncionarioRouter.get("/cadastroFuncionario", function(req, res){
  SetView.ViewTelaCadastrarFuncionario(res, LoadUser(req), LoadNome(req));
});

// Rotas do Funcionario
FuncionarioRouter.get('/getallFuncionario', FuncionarioController.getAllFuncionario)
FuncionarioRouter.post('/cadastroFuncionario', FuncionarioController.postFuncionario)
FuncionarioRouter.delete('/deleteFuncionario', FuncionarioController.deleteFuncionario)
FuncionarioRouter.put('/updateFuncionario', FuncionarioController.updateFuncionario)

// Exportar
module.exports = FuncionarioRouter;