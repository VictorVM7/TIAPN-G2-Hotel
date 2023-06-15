// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const FuncionarioController = require('../controllers/Funcionario')

// Routes
const FuncionarioRouter = Router()

// Caminhos das páginas HTML
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastrarFuncionario.html")
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.html")

// Chama HTML
FuncionarioRouter.get("/cadastroFuncionario", function(req, res){
  res.sendFile(TelaPath)
});

FuncionarioRouter.get("/menuPrincipal", function(req, res){
  res.sendFile(TelaMainPath)
});

// Rotas do Funcionario
FuncionarioRouter.get('/getallFuncionario', FuncionarioController.getAllFuncionario)

FuncionarioRouter.post('/cadastroFuncionario', FuncionarioController.postFuncionario)

FuncionarioRouter.delete('/deleteFuncionario', FuncionarioController.deleteFuncionario)

FuncionarioRouter.put('/updateFuncionario', FuncionarioController.updateFuncionario)

// Exportar
module.exports = FuncionarioRouter;