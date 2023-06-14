const Funcionario = require('../models/Funcionario');

// Módulo Express para requisições
const express = require('express');
const app = express();
app.use(express.json());

// Bibliotecas
const { Router } = require("express");
const path = require('path');
const bodyParser = require('body-parser');

// Conversor do body da requisição 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// Routes
const TelaPath = path.join(__dirname + "..", "..", "..","views", "TelaLogin.html")
const TelaMainPath = path.join(__dirname + "..", "..", "..","views", "TelaMain.html")


exports.getOneFunc = async (req, res) => {
    const { ID } = req.params
    const { FuncLogin, FuncSenha } = req.body

    if (FuncLogin || FuncSenha) {
        const funcionario = await Funcionario.findOne({ where: { FuncLogin, FuncSenha } })
        if(!funcionario){
            res.sendFile(TelaPath)
        }
        else {
            res.sendFile(TelaMainPath)
        }   
    } else {
        res.sendFile(TelaPath)
    }
};