// Bibliotecas
const { Router } = require("express");
const session = require('express-session');
const path = require('path')

// Controller
const ReservaController = require('../controllers/Reserva');
const SetView = require("../SetView");
const { LoadUser, LoadNome } = require("../CheckSession");

// Routes
const ReservaRouter = Router()

// Chama HTML
ReservaRouter.get("/reserva", function(req, res){
  SetView.ViewTelaRealizarReserva(res, LoadUser(req), LoadNome(req));
});

ReservaRouter.get("/verReserva", function(req, res){
  SetView.ViewTelaVerReserva(res, LoadUser(req), LoadNome(req));
});

// // Rotas
ReservaRouter.get('/reservas', ReservaController.getAllReservas)
ReservaRouter.post('/reserva', ReservaController.postReserva)
// ReservaRouter.delete('/', ReservaController.deleteReserva)
// ReservaRouter.put('/', ReservaController.updateReserva)

// Exportar
module.exports = ReservaRouter;