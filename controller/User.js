// Importa modelo User.js de Models
const user = require('../models/User');

// POST - Método de cadastrar usuário
exports.postUser = async (req, res) => {
    await user.create(req.body)
    .then(() => {
        return res.status(200).json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: usuário não cadastrado!"
        })
    })    
};






