// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const FuncionarioController = require('../controllers/Funcionario')

// Routes
const FuncionarioRouter = Router()

// Página HTML
FuncionarioRouter.get("/cadastroFuncionario", function(req, res){
  const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastrarFuncionario.html")
  res.sendFile(TelaPath)
});

// Rotas do Funcionario
FuncionarioRouter.get('/cadastroFuncionario', FuncionarioController.getAllFuncionario)
FuncionarioRouter.post('/cadastroFuncionario', FuncionarioController.postFuncionario)
FuncionarioRouter.delete('/delete', FuncionarioController.deleteFuncionario)
FuncionarioRouter.put('/put', FuncionarioController.updateFuncionario)

// Exportar
module.exports = FuncionarioRouter;