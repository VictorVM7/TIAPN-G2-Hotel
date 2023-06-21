// Bibliotecas
const { Router } = require("express");
const session = require('express-session');
const path = require('path')

// Controller
const CheckOutController = require('../controllers/CheckOut');
const SetView = require("../SetView");
const { LoadUser, LoadNome } = require("../CheckSession");

// Routes
const CheckOutRouter = Router()

// Chama HTML
CheckOutRouter.get("/checkout", function(req, res){
  SetView.ViewTelaCheckOut(res, LoadUser(req), LoadNome(req));
});

// // Rotas
CheckOutRouter.post('/checkout', CheckOutController.deleteCheckOut)
// CheckOutRouter.post('/checkin', CheckOutRouter.postReserva)
// CheckOutRouter.delete('/checkout', CheckOutController.deleteCheckOut)
// ReservaRouter.put('/', ReservaController.updateReserva)

// Exportar
module.exports = CheckOutRouter;