const { Router } = require("express");
const UserController = require('../controllers/User')

const router = Router()

// Rotas do User
router.get('/', UserController.getUser)
router.post('/user-create', UserController.postUser)
router.delete('/user-delete/:id', UserController.deleteUser)
router.put('/user-update/:id', UserController.updateUser)

// Exportar
module.exports = router;