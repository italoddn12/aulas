
function Conta(ag, conta, saldo) {
    this.agencia = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`saldo insuficiente -> saldo: R$${this.saldo.toFixed(2)}`);
        return
    }
    this.saldo -= valor;
    console.log(`Saque efetuado valor: ${valor.toFixed(2)},`);
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(`Deposito efetuado valor:${valor.toFixed(2)},`);
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag:${this.agencia} Cont:${this.conta} Saldo atual: ${this.saldo.toFixed(2)}`)
};

const ct = new Conta(11,30, 100);

function ContaCorrente(ag, conta, saldo, limite) {
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
const contaC = new ContaCorrente(20, 10, 50, 100);

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`saldo insuficiente -> Saldo: R$${this.saldo.toFixed(2)} Limite: R$${this.limite.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Saque efetuado valor: ${valor.toFixed(2)},`);
    this.verSaldo();
};

contaC.sacar(151);
ct.sacar(30);