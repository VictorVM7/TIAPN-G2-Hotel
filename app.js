// Classes importadas
const express = require('express');
const user = require('./controller/User');

const app = express();
app.use(express.json());


/*EndPoints */ 

// Caminho raiz / await só pode ser usado se houver "async"
app.get("/", async (req, res) => {
    res.send("Página Inicial Teste");
});

app.post("/cadastrar", user.postUser);    // Cadastrar Usuário com método do controller User.js
/*
app.get("/recuperar", user.getUser);      // Cadastrar Usuário com método do controller User.js
app.put("/atualizar", user.putUser);      // Cadastrar Usuário com método do controller User.js
app.delete("/deletar", user.deleteUser);  // Cadastrar Usuário com método do controller User.js
*/

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});