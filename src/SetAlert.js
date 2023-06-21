// Arquivo: meuModulo.js
module.exports = {

    AlertClienteInexistente: (res, FuncLogin, FuncNome) => {
        let alerta1 = true;
        let alerta2 = false;
        return res.render('TelaRealizarReserva', { FuncLogin, FuncNome, alerta1, alerta2});
    },

    AlertQuartoOcupado: (res, FuncLogin, FuncNome) => {
        let alerta1 = false;
        let alerta2 = true;
        return res.render('TelaRealizarReserva', { FuncLogin, FuncNome, alerta1, alerta2});
    }

} 