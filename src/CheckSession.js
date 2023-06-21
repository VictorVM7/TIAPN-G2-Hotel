global.FuncLogin = null; // Inicializa a variável global com um valor padrão

module.exports = {
  LoadUser: (req) => {
    global.FuncLogin = req.session.user;
    return global.FuncLogin;
  },

  LoadNome: (req) => {
    global.FuncNome = req.session.nome;
    return global.FuncNome;
  },

  SessionLogin: (req, FuncLogin) => {
    console.log(FuncLogin);
    req.session.user = FuncLogin;
    global.FuncLogin = FuncLogin;
    return FuncLogin;
  },

  SessionNome: (req, FuncNome) => {
    console.log(FuncNome);
    req.session.nome = FuncNome;
    global.FuncNome = FuncNome;
    return FuncNome;
  },
};