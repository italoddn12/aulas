export default class ValidarCpf {
    constructor(cpf) {
        this.cpf = cpf;
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf
        })
    }
    valida() {
        if(this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo === 'undefined') return 0;
        if(this.isSequencia(this.cpfLimpo)) return false;
        
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        
        const digito1 = ValidarCpf.pegaDigito(cpfParcial);
        const digito2 = ValidarCpf.pegaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        
        if(novoCpf === this.cpfLimpo) return true;
    }

    static pegaDigito(cpfParcial) {
        const arrayCpf = Array.from(cpfParcial);
        let multiplicador = arrayCpf.length + 1;

        const total = arrayCpf.reduce((acumulador, valor) => {

            acumulador += (Number(valor) * multiplicador);
            multiplicador --;
            return acumulador;
        },0)

        let digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia(cpfLimpo) {
        const sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
        return cpfLimpo === sequencia;
    }
}
