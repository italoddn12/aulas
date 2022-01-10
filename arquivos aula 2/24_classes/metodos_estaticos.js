class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodo instancia troca so do filho q chama
    aumentarVolume() {
        this.volume +=2;
    }

    diminuirVolume() {
        this.volume -=2;
    }

    // metodo estatico
    static trocaPilha() {
        console.log('ok, vou trocar')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();

console.log(controle1)