// Arquivo: meuModulo.js
module.exports = {

    AlertClienteInexistente: (res, FuncLogin, FuncNome) => {
        let alerta = true;
        return res.render('TelaRealizarReserva', { FuncLogin, FuncNome, alerta});
    },

} 