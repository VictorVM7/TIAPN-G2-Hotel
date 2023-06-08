// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const ClienteController = require('../controllers/Cliente')

// Routes
const ClienteRouter = Router()

// Página HTML
ClienteRouter.get("/cadastro", function(req, res){
  const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastroCliente.html")
  res.sendFile(TelaPath)
});

// Rotas do Cliente
ClienteRouter.get('/cadastro/get', ClienteController.getAllCliente)
ClienteRouter.post('/cadastro/cadastrar-cliente', ClienteController.postCliente)
ClienteRouter.delete('/delete', ClienteController.deleteCliente)
ClienteRouter.put('/put', ClienteController.updateCliente)

// Exportar
module.exports = ClienteRouter;