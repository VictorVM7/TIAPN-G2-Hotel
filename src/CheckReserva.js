module.exports = {

    VerificaReserva: (ocupado, inicio, fim) => {
        let isDisponivel = false;
        let isDisponivelReservar = true;

        for (let i = 0; i < ocupado.length; i++) {

            console.log(ocupado)
            let ocuapdoInicio = new Date(ocupado[i].DataInicio);
            let ocupadoFim = new Date(ocupado[i].DataFim);

            if (inicio >= ocuapdoInicio) {
                if (fim <= ocupadoFim) {
                    console.log(`Entre o ocupado -> Reserva disponível somente em: ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    isDisponivelReservar = true;
                    break
                } else if (fim > ocupadoFim) {
                    console.log(`Começa no dia ou depois e termina depois do ocupado -> Reserva disponível somente em: ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    isDisponivelReservar = true;
                    break;
                } else if (inicio > ocupadoFim && fim > ocupadoFim) {
                    console.log(`Quarto livre`);
                    isDisponivel = false;
                    isDisponivelReservar = false;
                }
            } else if (inicio < ocuapdoInicio) {
                if (fim >= ocuapdoInicio && fim <= ocupadoFim) {
                    console.log(`Começa antes, termina depois do início do ocupado, antes do fim do ocupado. Reserva disponível somente em ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    isDisponivelReservar = true;
                    break;
                } else if (inicio < ocuapdoInicio && fim >= ocuapdoInicio && fim >= ocupadoFim) {
                    console.log(`Atravessa o ocupado, começa antes e termina depois do ocupado. Reserva disponível somente em ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    isDisponivelReservar = true;
                    break;
                }
            }
        }

        if (isDisponivel && isDisponivelReservar) {
            return isDisponivel;
        } else {
            return isDisponivelReservar;
        }
    }
} 