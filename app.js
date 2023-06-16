// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());
const session = require('express-session');


// Classes importadas
const ClienteRouter = require('./src/routes/ClienteRoutes');
const LoginRouter = require('./src/routes/LoginRoutes');
const FuncionarioRouter = require('./src/routes/FuncionarioRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'secrectCookie',
    cookie: {
        sameSite: 'strict'
    }
}));

// Usar CSS passando para estático
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'))

// Routers
app.use("/", ClienteRouter);
app.use("/", LoginRouter);
app.use("/", FuncionarioRouter);

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});

