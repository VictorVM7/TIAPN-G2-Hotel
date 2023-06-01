// Importa modelo User.js de Models
const user = require('../models/User');
const mysql = require('../models/db');

// POST - Cadastra usuário
exports.postUser = async (req, res) => {
    const { email } = req.body
    const usuario = await user.findOne({ where: { email } })
    if (usuario == null) {
        await user.create(req.body)
        res.status(200).json({ message: true })
    }
    else {
        res.status(401).json({ message: false })
    }
};

// GET - Retorna todos os usuários cadastrados 
exports.getUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json({ users })
    } catch (err) {
        res.status(400).json({ err })
    }
};

// DELETE - Deleta usuário
exports.deleteUser = async (req, res) => {
    const { id } = req.params
    const usuario = await user.findOne({ where: { id } })

    if (!usuario) {
        res.status(401).json({ message: "Usuário não encontrado!" })
    }
    else {
        const usuario = await user.destroy({ where: { id } })
        res.status(200).json({ ok: true })
    }
}

exports.updateUser = async (req, res) => {

}





