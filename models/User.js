// Importa a conexão com o banco e carrega arquivo db.js
const Sequelize = require('sequelize');
const db = require('./db');

// Define a tabela User no DB
const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Cria tabela caso não exista a tabela
//User.sync();

// Altera a tabela de acordo com as mudanças que houver na estrutura,s e houver.
//User.sync({alter: true});

// Exporta a constante DB referente 
module.exports = User;