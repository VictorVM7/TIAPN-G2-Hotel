// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());
const session = require('express-session');

// Arquivo: meuModulo.js
module.exports = {
     minhaFuncao: (FuncLogin, FuncNome) => {
        console.log(FuncLogin, FuncNome)
        req.session.user = FuncLogin;
        req.session.name = FuncNome;
        req.session.authorized = true;
        return {FuncLogin, FuncNome};
    }
} 