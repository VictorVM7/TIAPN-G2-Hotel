// Importa a conexão com o banco e carrega arquivo db.js
const Sequelize = require('sequelize');
const funcionario = require('./Funcionario');
const cliente = require('./Cliente');
const db = require('./db');

// Define a tabela User no DB
const Reserva = db.define('Reserva', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ID_Funcionario:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ID_Cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    TipoQuarto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Quarto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DataInicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    DataFim:{
        type: Sequelize.DATE,
        allowNull: false,
    }
});

Reserva.belongsTo(cliente, {
    foreignKey: 'ID_Cliente',
    allowNull: false 
});

Reserva.belongsTo(funcionario, {
    foreignKey: 'ID_Funcionario',
    allowNull: false 
});

// Cria tabela caso não exista a tabela
Reserva.sync();

// Altera a tabela de acordo com as mudanças que houver na estrutura,s e houver.
//Reserva.sync({alter: true});

// Exporta a constante DB referente 
module.exports = Reserva;