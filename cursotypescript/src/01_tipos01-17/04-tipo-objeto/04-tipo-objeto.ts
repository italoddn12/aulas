const obetoA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

obetoA.chaveA = 'outro valor';
