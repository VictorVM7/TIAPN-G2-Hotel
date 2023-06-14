// Importa a conexão com o banco e carrega arquivo db.js
const Sequelize = require('sequelize');
const db = require('./db');

// Define a tabela User no DB
const Funcionario = db.define('Funcionario', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FuncLogin:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    FuncSenha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    FuncNome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    FuncIdade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    FuncCPF: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    FuncSexo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Cria tabela caso não exista a tabela
Funcionario.sync();

// Altera a tabela de acordo com as mudanças que houver na estrutura,s e houver.
//Funcionario.sync({alter: true});

// Exporta a constante DB referente 
module.exports = Funcionario;