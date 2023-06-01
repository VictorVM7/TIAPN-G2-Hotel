const { Sequelize } = require('sequelize');

// Conexão com o banco
const sequelize = new Sequelize("hoteldb", "root", "33559098",{
    host:'localhost',
    dialect: 'mysql'
});

// Autenticar conexão com o banco
sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco OK!");
}).catch(function(){
    console.log("Erro: Conexão não funcionou");
});

// Exporta conexão com o banco
module.exports = sequelize