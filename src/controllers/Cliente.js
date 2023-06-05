// Importa modelo Cliente.js de Models
const Cliente = require('../models/Cliente');
const mysql = require('../models/db');

// POST - Cadastra usuário
exports.postCliente = async (req, res) => {
    const { CliCPF } = req.body
    try {
        const cliente = await Cliente.findOne({ where: { CliCPF } })

        if (cliente == null) {
            await Cliente.create(req.body)
            res.status(200).json({ message: true })
        }
        else {
            res.status(400).json({ message: "Esse cliente já está cadastrado" })
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
};

// GET - Retorna todos os usuários cadastrados 
exports.getAllCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findAll();

        if (!cliente) {
            res.status(400).json({ message: "Nenhum usuário encontrado" })
        } else {
            res.status(200).json({ cliente })
        }

    } catch (error) {
        res.status(400).json({ error })
    }
};

// GET - Retorna somente um usuário escolhido
exports.getOneCliente = async (req, res) => {
    const { ID } = req.params
    const { CliCPF } = req.body

    try {
        const cliente = await Cliente.findOne({ where: { CliCPF } })

        if (!cliente) {
            res.status(400).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json({ cliente })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
};

// DELETE - Deleta usuário
exports.deleteCliente = async (req, res) => {
    const { ID } = req.body

    try {
        const cliente = await Cliente.findOne({ where: { ID } })

        if (!cliente) {
            res.status(401).json({ message: "Usuário não encontrado!" })
        }
        else {
            const cliente = await Cliente.destroy({ where: { ID } })
            res.status(200).json({ ok: true })
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
}

// UPDATE - Altera algum dado do usuário
exports.updateCliente = async (req, res) => {
    const { ID } = req.body
    const { CliCPF, CliNome, CliSexo, CliTelefone } = req.body
    
    try {
        const cliente = await Cliente.findOne({ where: { ID } })

        if (!cliente) {
            res.status(401).json({ message: "Nenhum usuário encontrado" })
        } else {
            const cliente = await Cliente.update({ CliCPF, CliNome, CliSexo, CliTelefone }, { where: { ID } })
            res.status(200).json({ cliente })
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
}





