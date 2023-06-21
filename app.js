// Classes e funções
global.funcaoSession = require('./src/CheckSession');
global.funcaoSetView = require('./src/SetView');

// Módulo Express para requisições
global.express = require('express');
global.app = express();
global.session = require('express-session');
app.use(express.json());

// Classes importadas
const ClienteRouter = require('./src/routes/ClienteRoutes');
const LoginRouter = require('./src/routes/LoginRoutes');
const FuncionarioRouter = require('./src/routes/FuncionarioRoutes');
const ReservaRouter = require('./src/routes/ReservaRoutes');

const bodyParser = require('body-parser');
const CheckInRouter = require('./src/routes/CheckInRoutes');
const CheckOutRouter = require('./src/routes/CheckOutRoutes');

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
app.use("/", ReservaRouter);
app.use("/", CheckInRouter);
app.use("/", CheckOutRouter)

// Porta que está executando o projeto
app.listen(8080, () => {
    console.log("Servidor na porta 8080: http://localhost:8080");
});

