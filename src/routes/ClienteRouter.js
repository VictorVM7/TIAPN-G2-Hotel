const { Router } = require("express");
const ClienteController = require('../controllers/Cliente')
const ClienteRouter = Router()
const Path = "C:\\Users\\victo\\OneDrive\\Área de Trabalho\\TIAPN-G2-Hotel\\views\\"

ClienteRouter.get("/cadastroCliente", function(req, res){
  res.sendFile(Path + "TelaCadastroCliente.html")
});


// Rotas do Cliente
ClienteRouter.get('/get', ClienteController.getAllCliente)
ClienteRouter.post('/cadastrar', ClienteController.postCliente)
ClienteRouter.delete('/delete', ClienteController.deleteCliente)
ClienteRouter.put('/update', ClienteController.updateCliente)



// Exportar
module.exports = ClienteRouter;

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