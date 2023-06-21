// Bibliotecas
const { Router } = require("express");
const session = require('express-session');
const path = require('path')

// Controller
const CheckInController = require('../controllers/CheckIn');
const SetView = require("../SetView");
const { LoadUser, LoadNome } = require("../CheckSession");

// Routes
const CheckInRouter = Router()

// Chama HTML
CheckInRouter.get("/checkin", function(req, res){
  SetView.ViewTelaCheckIn(res, LoadUser(req), LoadNome(req));
});

// // Rotas
CheckInRouter.get('/checkin', CheckInController.getAllCheckIn)
CheckInRouter.post('/checkin', CheckInController.postCheckIn)
// ReservaRouter.delete('/', ReservaController.deleteReserva)
// ReservaRouter.put('/', ReservaController.updateReserva)

// Exportar
module.exports = CheckInRouter;