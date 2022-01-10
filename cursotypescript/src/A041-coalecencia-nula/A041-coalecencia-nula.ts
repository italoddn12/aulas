type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'o texto',
};

console.log(documento.data?.toDateString() ?? 'ixi, não existe data.');
