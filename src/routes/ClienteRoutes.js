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
ClienteRouter.get('/', ClienteController.getAllCliente)
ClienteRouter.post('/cadastrarUsuario', ClienteController.postCliente)
ClienteRouter.delete('/', ClienteController.deleteCliente)
ClienteRouter.put('/', ClienteController.updateCliente)

// Exportar
module.exports = ClienteRouter;