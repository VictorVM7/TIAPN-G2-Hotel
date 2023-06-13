const Funcionario = require('../models/Funcionario');

exports.getOneFunc = async (req, res) => {
    const { ID } = req.params
    const { FuncLogin, FuncSenha } = req.body

    try {
        const funcionario = await Funcionario.findOne({ where: { FuncLogin, FuncSenha } })

        if (!funcionario) {
            res.status(400).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json({ funcionario })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
};