import ValidarCpf from './ValidarCpf';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        );
    }
    geraNovoCpf() {
        const cpfSemDigito = rand();
        const digito1 = ValidarCpf.pegaDigito(cpfSemDigito);
        const digito2 = ValidarCpf.pegaDigito(cpfSemDigito + digito1);
        
        const novoCpf = this.cpfSemDigito + digito1 + digito2;

        return this.formatado(novoCpf);
    }
}