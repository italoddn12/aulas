function ValidaCPF(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        } 
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia(this.cpfLimpo)) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + String(digito1));
    const novocpf = cpfParcial + String(digito1) + String(digito2);
    console.log(novocpf)
    console.log(this.cpfLimpo)
    return novocpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const arrayCpf = Array.from(cpfParcial);
    let regressivo = arrayCpf.length + 1;

    const total = arrayCpf.reduce((ac, valor,) =>{
        ac += (valor * regressivo);
        regressivo --;
        return ac
    },0)
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

ValidaCPF.prototype.isSequencia = function(cpf){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('825.395.112-44');

if(cpf.valida()){
    console.log('cpf valido');
} else {
    console.log('cpf invalido')
}