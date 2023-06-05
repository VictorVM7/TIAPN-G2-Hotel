const { Router } = require("express");
const ClienteController = require('../controllers/Cliente')

const router = Router()

router.get("/cadastro", function(req, res){
  res.sendFile("C:\\Users\\ti\\Desktop\\TIAPN-G2-Hotel\\TelaCadastroCliente.html")
});


// Rotas do Cliente
router.get('/', ClienteController.getAllCliente)
router.post('/cadastrarUsuario', ClienteController.postCliente)
router.delete('/', ClienteController.deleteCliente)
router.put('/', ClienteController.updateCliente)



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