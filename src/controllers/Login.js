// Tabelas
const Funcionario = require('../models/Funcionario');

exports.getOneFunc = async (req, res) => {
    const { ID } = req.params
    const { FuncLogin, FuncSenha } = req.body

    if (FuncLogin || FuncSenha) {
        const funcionario = await Funcionario.findOne({ where: { FuncLogin, FuncSenha } })
        if(!funcionario){
            res.render('TelaLogin')
        }
        else {
            res.render('TelaMain')
        }   
    } else {
        res.render('TelaLogin')
    }
};