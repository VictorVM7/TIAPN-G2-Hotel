// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const ClienteController = require('../controllers/Cliente');
const SetView = require("../SetView");
const { LoadUser, LoadNome } = require("../CheckSession");

// Routes
const ClienteRouter = Router()

// Chama HTML
ClienteRouter.get("/cadastroCliente", function(req, res){
  SetView.ViewTelaCadastroCliente(res, LoadUser(req), LoadNome(req));
});

ClienteRouter.get("/menuPrincipal", function(req, res){
  SetView.ViewTelaMain(res, LoadUser(req), LoadNome(req));
});

// Rotas do Cliente
ClienteRouter.get('/cadastro/get', ClienteController.getAllCliente)
ClienteRouter.post('/cadastroCliente', ClienteController.postCliente)
ClienteRouter.delete('/delete', ClienteController.deleteCliente)
ClienteRouter.put('/put', ClienteController.updateCliente)

// Exportar
module.exports = ClienteRouter;