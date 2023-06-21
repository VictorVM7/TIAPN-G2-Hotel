// Importa a conexão com o banco e carrega arquivo db.js
const Sequelize = require('sequelize');
const reserva = require('./Reserva');
const cliente = require('./Cliente');
const db = require('./db');

// Define a tabela User no DB
const Ocupado = db.define('Ocupado', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ID_Cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ID_Reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Ocupado.belongsTo(cliente, {
    foreignKey: 'ID_Cliente',
    allowNull: false 
});

Ocupado.belongsTo(reserva, {
    foreignKey: 'ID_Reserva',
    allowNull: false,
});

// Cria tabela caso não exista a tabela
Ocupado.sync();

// Altera a tabela de acordo com as mudanças que houver na estrutura,s e houver.
//Ocupado.sync({alter: true});

// Exporta a constante DB referente 
module.exports = Ocupado;