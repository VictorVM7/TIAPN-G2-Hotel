// Importa modelo Funcionario.js de Models
const Reserva = require('../models/Reserva');
const Funcionario = require('../models/Funcionario');
const Cliente = require('../models/Cliente');

// POST - Cadastra usuário
module.exports = {

    postReserva: async (req, res) => {
        const { CliCPF, TipoQuarto, Quarto, DataInicio, DataFim } = req.body
        try {
            const cliente = await Cliente.findOne({
                where: { CliCPF }
            })

            if (!cliente) {
                res.status(400).json({ messagem: 'não existe cliente' })
            } else {
                await Reserva.create({
                    ID_Funcionario: 1,
                    ID_Cliente: cliente.ID,
                    TipoQuarto: TipoQuarto,
                    Quarto: Quarto,
                    DataInicio: DataInicio,
                    DataFim: DataFim,
                })
                res.status(204).end()
            }
        } catch (error) {
            res.status(400).json({message: 'erro no post'})
        }
    },

    // GET - Retorna todos os usuários cadastrados 
    getAllReservas: async (req, res) => {
        try {
            const reserva = await Reserva.findAll();

            if (!reserva) {
                res.status(400).json({ message: "Nenhum usuário encontrado" })
            } else {
                res.status(200).json({ reserva })
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // GET - Retorna somente um usuário escolhido
    getOneReserva: async (req, res) => {
        const { ID } = req.params
        const { FuncLogin, FuncSenha } = req.body

        try {
            const reserva = await Reserva.findOne({
                where: { FuncLogin, FuncSenha }
            })

            if (!reserva) {
                res.render('TelaLogin')
            } else {      
                const nomeFunc = reserva.FuncNome;
                const login = funcaoSession.SessionLogin(req, FuncLogin);
                const nome = funcaoSession.SessionNome(req, nomeFunc);
                req.session.authorized = true;
                funcaoSetView.ViewTelaMain(res, login, nome);
            }
        } catch (error) {
            console.log('Erro')
            res.status(400).json({ error: error })
        }
    },

    // DELETE - Deleta usuário
    deleteReserva: async (req, res) => {
        const { ID } = req.body

        try {
            const reserva = await Reserva.findOne({ where: { ID } })

            if (!reserva) {
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
    updateReserva: async (req, res) => {
        const { ID } = req.body
        const { FuncLogin, FuncSenha, FuncNome, FuncIdade, FuncCPF } = req.body

        try {
            const reserva = await Reserva.findOne({ where: { ID } })

            if (!reserva) {
                res.status(401).json({ message: "Nenhum usuário encontrado" })
            } else {
                const reserva = await Reserva.update({ FuncLogin, FuncSenha, FuncNome, FuncIdade, FuncCPF }, { where: { ID } })
                res.status(200).json({ reserva })
            }
        } catch (error) {
            res.status(401).json({ message: error })
        }
    }
}

