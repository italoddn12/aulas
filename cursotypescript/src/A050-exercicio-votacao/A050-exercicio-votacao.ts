type VotationOption = {
  numberOfvote: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvote += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addvotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfvote);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('qual sua liguagem de progamção favorita');
votation1.addVotationOption({ option: 'pythob', numberOfvote: 0 });
votation1.addVotationOption({ option: 'javaScript', numberOfvote: 0 });
votation1.addVotationOption({ option: 'typeScript', numberOfvote: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);

const votationApp = new VotationApp();
votationApp.addvotation(votation1);

votationApp.showVotations();
