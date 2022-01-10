
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'ja ligado');
            return;
        };

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'ja desligado');
            return;
        };

        this.ligado = false;
    }
}
// smarthphone extend a dispositov eletronico
class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new SmartPhone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('vc altero o metodo ligar');
    }
}

const t1 = new Tablet('ipad', true);
t1.ligar()

