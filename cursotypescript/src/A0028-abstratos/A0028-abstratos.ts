export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perdeVida(this.ataque);
  }

  perdeVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'GUERREIRAAAAAA AOOOOO ATAAAAAQUEEEE!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'MONNNNNNNNSTERRRRRRRRR');
  }
}

export class Zombie extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'aghrrrrrrrrrr');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);
const zombie = new Zombie('Zoombie', 87, 100);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
zombie.atacar(guerreira);
