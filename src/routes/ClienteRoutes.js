// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const ClienteController = require('../controllers/Cliente')

// Routes
const ClienteRouter = Router()

// Caminhos das páginas HTML
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastroCliente.html")
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.html")

// Chama HTML
ClienteRouter.get("/cadastroCliente", function(req, res){
  res.sendFile(TelaPath)
});

ClienteRouter.get("/menuPrincipal", function(req, res){
  res.sendFile(TelaMainPath)
});

// Rotas do Cliente
ClienteRouter.get('/cadastro/get', ClienteController.getAllCliente)
ClienteRouter.post('/cadastroCliente', ClienteController.postCliente)
ClienteRouter.delete('/delete', ClienteController.deleteCliente)
ClienteRouter.put('/put', ClienteController.updateCliente)

// Exportar
module.exports = ClienteRouter;