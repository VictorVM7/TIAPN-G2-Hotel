// Arquivo: meuModulo.js
module.exports = {

    ViewTelaCadastrarFuncionario: (res, FuncLogin, FuncNome) => {
        return res.render('TelaCadastrarFuncionario', { FuncLogin, FuncNome });
    },

    ViewTelaCadastroCliente: (res, FuncLogin, FuncNome) => {
        return res.render('TelaCadastroCliente', { FuncLogin, FuncNome });
    },

    ViewTelaCheckIn: (res, FuncLogin, FuncNome) => {
        return res.render('TelaCheckIn', { FuncLogin, FuncNome });
    },

    ViewTelaCheckOut: (res, FuncLogin, FuncNome) => {
        return res.render('TelaCheckOut', { FuncLogin, FuncNome });
    },

    ViewTelaLogin: (res, FuncLogin, FuncNome) => {
        return res.render('TelaLogin', { FuncLogin, FuncNome });
    },
    
    ViewTelaMain: (res, FuncLogin, FuncNome) => {
        let alerta1 = false;
        let alerta2 = false;
        return res.render('TelaMain', { FuncLogin, FuncNome });
    },

    ViewTelaRealizarReserva: (res, FuncLogin, FuncNome) => {
        let alerta1 = false;
        let alerta2 = false;
        return res.render('TelaRealizarReserva', { FuncLogin, FuncNome, alerta1, alerta2 });
    },

    ViewTelaVerReserva: (res, FuncLogin, FuncNome, dados) => {
        console.log(dados);
        const dadosReserva = dados;
        return res.render('TelaVerReserva', { FuncLogin, FuncNome, dados});
    },

} 