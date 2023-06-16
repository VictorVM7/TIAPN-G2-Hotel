// Bibliotecas
const { Router } = require("express");
const session = require('express-session');
const path = require('path')

// Controller
const FuncionarioController = require('../controllers/Funcionario')

// Routes
const FuncionarioRouter = Router()

// Caminhos das páginas HTML
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastrarFuncionario.ejs")
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.ejs")

// Chama HTML
FuncionarioRouter.get("/cadastroFuncionario", function(req, res){
  res.render(TelaPath)
});

FuncionarioRouter.get("/menuPrincipal", function(req, res){

  if(req.session.authorized) {
    res.render(TelaPath, {
      FuncLogin: req.session.user,
      FuncNome: req.session.name
    })
  }
  else {
    res.render(TelaPath, {
      FuncLogin: req.session.user,
      FuncNome: req.session.name
    })
  }
});

// Rotas do Funcionario
FuncionarioRouter.get('/getallFuncionario', FuncionarioController.getAllFuncionario)
FuncionarioRouter.post('/cadastroFuncionario', FuncionarioController.postFuncionario)
FuncionarioRouter.delete('/deleteFuncionario', FuncionarioController.deleteFuncionario)
FuncionarioRouter.put('/updateFuncionario', FuncionarioController.updateFuncionario)

// Exportar
module.exports = FuncionarioRouter;