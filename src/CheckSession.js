module.exports = {

    LoadUser: (req) => {
        FuncLogin = req.session.user
        return FuncLogin;
    },

    LoadNome: (req) => {
        FuncNome = req.session.nome
        return FuncNome;
    },
    
    SessionLogin: (req, FuncLogin) => {
        console.log(FuncLogin);
        req.session.user = FuncLogin;
        return FuncLogin;
    },

    SessionNome: (req, FuncNome) => {
        console.log(FuncNome);
        req.session.nome = FuncNome;
        return FuncNome;
    },

} 