// Importa a conexão com o banco e carrega arquivo db.js
const Sequelize = require('sequelize');
const db = require('./db');

// Define a tabela User no DB
const Cliente = db.define('Cliente', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    CliCPF:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    CliNome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CliIdade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CliSexo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    CliTelefone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Cria tabela caso não exista a tabela
Cliente.sync();

// Altera a tabela de acordo com as mudanças que houver na estrutura,s e houver.
// Cliente.sync({alter: true});

// Exporta a constante DB referente 
module.exports = Cliente;