// Importa modelo Funcionario.js de Models
const Funcionario = require('../models/Funcionario');
const session = require('express-session');

// POST - Cadastra usuário
module.exports = {

    postFuncionario: async (req, res) => {
        const { FuncLogin } = req.body
        try {
            const funcionario = await Funcionario.findOne({ where: { FuncLogin } })
            if (funcionario) {
                res.status(204).json({messagem: false})
            } else {
                await Funcionario.create(req.body)         
                res.status(204).end()         
            }
        } catch (error) {
            res.status(401)
        }
    },
    
    // GET - Retorna todos os usuários cadastrados 
    getAllFuncionario: async (req, res) => {
        try {
            const funcionario = await Funcionario.findAll();
    
            if (!funcionario) {
                res.status(400).json({ message: "Nenhum usuário encontrado" })
            } else {
                res.status(200).json({ funcionario })
            }
    
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    // GET - Retorna somente um usuário escolhido
    getOneFunc: async (req, res) => {
        const { ID } = req.params
        const { FuncLogin, FuncSenha } = req.body
    
        try {
            const funcionario = await Funcionario.findOne({ 
                where: { FuncLogin, FuncSenha } 
            })
    
            if (!funcionario) {
                res.render('login')
            } else {
                req.session.FuncLogin = FuncLogin;
                req.session.authorized = true;
                res.render('profile', {FuncLogin})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    // DELETE - Deleta usuário
    deleteFuncionario: async (req, res) => {
        const { ID } = req.body
    
        try {
            const funcionario = await Funcionario.findOne({ where: { ID } })
    
            if (!funcionario) {
                res.status(401).json({ message: "Usuário não encontrado!" })
            }
            else {
                res.status(200).json({ ok: true })
            }
        } catch (error) {
            res.status(401).json({ message: error })
        }
    },
    
    // UPDATE - Altera algum dado do usuário
    updateFuncionario: async (req, res) => {
        const { ID } = req.body
        const { FuncLogin, FuncSenha, FuncNome, FuncIdade, FuncCPF } = req.body
        
        try {
            const funcionario = await Funcionario.findOne({ where: { ID } })
    
            if (!funcionario) {
                res.status(401).json({ message: "Nenhum usuário encontrado" })
            } else {
                const funcionario = await Funcionario.update({ FuncLogin, FuncSenha, FuncNome, FuncIdade, FuncCPF }, { where: { ID } })
                res.status(200).json({ funcionario })
            }
        } catch (error) {
            res.status(401).json({ message: error })
        }
    }  
}

