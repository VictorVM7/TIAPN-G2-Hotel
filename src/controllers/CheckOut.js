// Importa modelo CheckOut.js de Models
const Cliente = require('../models/Cliente');
const Ocupado = require('../models/Ocupado');
const Reserva = require('../models/Reserva');

// POST - Cadastra usuário
module.exports = {

    deleteCheckOut: async (req, res) => {
        const { ID_Reserva, CliCPF } = req.body
        try {
            const cliente = await Cliente.findOne({ where: { CliCPF } })
            if (!cliente) {
                res.send('<script>alert("Essa cliente não existe!"); window.location.href = "/checkout"; </script>')
            }
            else {
                const reserva = await Reserva.findOne({ where: { ID: ID_Reserva } });

                if (!reserva) {
                    res.send('<script>alert("Essa reserva não existe!"); window.location.href = "/checkout"; </script>')
                }
                else {
                    const ocupado = await Ocupado.findOne({
                        where: {
                            ID_Cliente: cliente.ID,
                            ID_Reserva: reserva.ID
                        }
                    })

                    if (!ocupado) {
                        res.send('<script>alert("Check-Out já realizado para essa reserva!"); window.location.href = "/checkout"; </script>');
                    }
                    else {
                        await Ocupado.destroy({
                            where: { ID: ocupado.ID }
                        });
                        res.status(204).end();
                    }
                }
            }
        } catch (error) {
            res.status(400);
        }
    }
}

