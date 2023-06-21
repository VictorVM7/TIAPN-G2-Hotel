// Importa modelo CheckIn.js de Models
const Cliente = require('../models/Cliente');
const Ocupado = require('../models/Ocupado');
const Reserva = require('../models/Reserva');

// POST - Cadastra usuário
module.exports = {

    postCheckIn: async (req, res) => {
        const { ID_Reserva, CliCPF } = req.body
        try {
            const cliente = await Cliente.findOne({ where: { CliCPF } })
            if (!cliente) {
                res.send('<script>alert("Essa cliente não existe!"); window.location.href = "/checkin"; </script>')
            }
            else {
                const reserva = await Reserva.findOne({ where: { ID: ID_Reserva } });

                if (!reserva) {
                    res.send('<script>alert("Essa reserva não existe!"); window.location.href = "/checkin"; </script>')
                }
                else {
                    const ocupado = await Ocupado.findOne({
                        where: {
                            ID_Cliente: cliente.ID,
                            ID_Reserva: reserva.ID
                        }
                    })

                    if (ocupado) {
                        res.send('<script>alert("Check-in já realizado para esse cliente!"); window.location.href = "/checkin"; </script>');
                    }
                    else {
                        await Ocupado.create({
                            ID_Cliente: reserva.ID_Cliente,
                            ID_Reserva: reserva.ID
                        });
                    }
                }
            }
        } catch (error) {
            res.status(400)
        }
    },

    // GET - Retorna todos os usuários cadastrados 
    getAllCheckIn: async (req, res) => {
        try {
            const checkin = await Reserva.findAll();
            console.log(checkin)
            if (!checkin) {
                res.status(400).json({ message: "Nenhum usuário encontrado" })
            } else {
                res.status(200).json({ checkin })
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // GET - Retorna somente um usuário escolhido
    getOneFunc: async (req, res) => {

    },

    // DELETE - Deleta usuário
    deleteCheckIn: async (req, res) => {

    },

    // UPDATE - Altera algum dado do usuário
    updateCheckIn: async (req, res) => {

    }
}

