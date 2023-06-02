// Importa modelo User.js de Models
const user = require('../models/User');
const mysql = require('../models/db');

// POST - Cadastra usuário
exports.postUser = async (req, res) => {
    const { email } = req.body

    try {
        const usuario = await user.findOne({ where: { email } })
        if (usuario == null) {
            await user.create(req.body)
            res.status(200).json({ message: true })
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
};

// GET - Retorna todos os usuários cadastrados 
exports.getUser = async (req, res) => {
    try {
        const usuario = await user.findAll();

        if(!usuario){
            res.status(400).json({ message: "Nenhum usuário encontrado" })
        } else {
            res.status(200).json({ usuario })
        }
        
    } catch (error) {
        res.status(400).json({ error })
    }
};

// GET - Retorna somente um usuário escolhido
exports.getUser = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    try {
        const usuario = await user.findOne({ where: { name, email } })

        if (!usuario) {
            res.status(400).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json({ usuario })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
};

// DELETE - Deleta usuário
exports.deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const usuario = await user.findOne({ where: { id } })

        if (!usuario) {
            res.status(401).json({ message: "Usuário não encontrado!" })
        }
        else {
            const usuario = await user.destroy({ where: { id } })
            res.status(200).json({ ok: true })
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
}

// UPDATE - Altera algum dado do usuário
exports.updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    try {
        const usuario = await user.findOne({ where: { id } })
        
        if (!user) {
            res.status(401).json({ message: "Nenhum usuário encontrado" })
        } else {
            const usuario = await user.update({ name, email },)
        }
    } catch (error) {
        res.status(401).json({ message: error })
    }
}





