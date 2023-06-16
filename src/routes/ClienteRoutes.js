// Bibliotecas
const { Router } = require("express");
const path = require('path')

// Controller
const ClienteController = require('../controllers/Cliente')

// Routes
const ClienteRouter = Router()

// Caminhos das páginas HTML
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaCadastroCliente.ejs")
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.ejs")

// Chama HTML
ClienteRouter.get("/cadastroCliente", function(req, res){
  res.render(TelaPath, {
    FuncLogin: req.session.user,
    FuncNome: req.session.name
  })
});

ClienteRouter.get("/menuPrincipal", function(req, res){
  res.render(TelaMainPath, {
    FuncLogin: req.session.user,
    FuncNome: req.session.name
  })
});

// Rotas do Cliente
ClienteRouter.get('/cadastro/get', ClienteController.getAllCliente)
ClienteRouter.post('/cadastroCliente', ClienteController.postCliente)
ClienteRouter.delete('/delete', ClienteController.deleteCliente)
ClienteRouter.put('/put', ClienteController.updateCliente)

// Exportar
module.exports = ClienteRouter;