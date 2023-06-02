const { Router } = require("express");
const UserController = require('../controllers/User')

const router = Router()

// Rotas do User
router.get('/', UserController.getAllUser)
router.post('/user-create', UserController.postUser)
router.delete('/user-delete/:id', UserController.deleteUser)
router.put('/user-update/:id', UserController.updateUser)

// Exportar
module.exports = router;

/*
-- 3)
select count(distinct(E.CodUsu))
  from Emprestimo E
 inner join Obra O
    on O.CodObr = E.CodObr
 where O.NomObr = 'Princípios de Sistemas de Banco de Dados Distribuído'
   and E.DatDev is not null

-- 4)
select count(distinct(E.CodUsu))
  from Emprestimo E
 inner join Obra O
    on O.CodObr = E.CodObr
 where O.NomObr = 'Princípios de Sistemas de Banco de Dados Distribuído'
   and exists (select EM.CodUsu
			     from Emprestimo EM
				inner join Obra OB
			       on OB.CodObr = EM.CodObr
				where OB.NomObr = 'Sistemas de Banco de Dados'
				  and E.CodUsu = EM.CodUsu)
*/ 