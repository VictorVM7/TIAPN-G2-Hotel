module.exports = {

    VerificaReserva: (ocupado, inicio, fim) => {
        console.log(1)
        let isDisponivel = false;
        for (let i = 0; i < ocupado.length; i++) {
            console.log(2);
            let ocuapdoInicio = new Date(ocupado[i].DataInicio);
            let ocupadoFim = new Date(ocupado[i].DataFim);

            console.log(3);
            if (inicio >= ocuapdoInicio) {
                if (fim <= ocupadoFim) {
                    console.log(`Entre o ocupado -> Reserva disponível somente em: ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    break;
                } else if (fim > ocupadoFim) {
                    console.log(`Começa no dia ou depois e termina depois do ocupado -> Reserva disponível somente em: ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    break;
                }
            } else if (inicio < ocuapdoInicio) {
                if (fim >= ocuapdoInicio && fim <= ocupadoFim) {
                    console.log(`Começa antes, termina depois do início do ocupado, antes do fim do ocupado. Reserva disponível somente em ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    break;
                } else if (inicio < ocuapdoInicio && fim >= ocuapdoInicio && fim >= ocupadoFim) {
                    console.log(`Atravessa o ocupado, começa antes e termina depois do ocupado. Reserva disponível somente em ${ocupadoFim.toISOString()}`);
                    isDisponivel = true;
                    break;
                }
            }
        }
        return isDisponivel;

    }

} 