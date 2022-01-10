// validação de cpf

let cpf = prompt('digite seu cpf');

let cpfLimpo = cpf.replace(/\D+/g, '');
cpfLimpo = cpfLimpo.slice(0, -2);
let arrayCpf = Array.from(cpfLimpo);

let arrayCpfOriginal;

function inicia() {
    pegaDigito();
}

function pegaDigito() {
    let digito1 = 11-(multiplica(arrayCpf, 10) % 11);
    arrayCpf.push(String(digito1));

    let digito2 = 11-(multiplica(arrayCpf, 11) % 11);
    arrayCpf.push(String(digito2));

    console.log(digito1, digito2)
    
    validaCpf(digito1, digito2)
}

function multiplica(arr, multiplicador) {
    let total = 0;
    arr.forEach((valor, indice, array) =>{
        total = total + valor * multiplicador
        multiplicador --;
    })
    return total
}

function trasformaArray() {
    arrayCpfOriginal = cpf
    arrayCpfOriginal = arrayCpfOriginal.replace(/\D+/g, '');
    arrayCpfOriginal = Array.from(arrayCpfOriginal)
    return arrayCpfOriginal
}

function validaCpf(digito1, digito2) {
    multiplica(arrayCpf);
    if(digito1 > 9) digito1 = 0;
    if(digito2 > 9) digito2 = 0;

    arrayCpfOriginal = trasformaArray();
    
    if(arrayCpfOriginal.join() === arrayCpf.join()){
        alert('cpf valido')
    } else {
        alert('cpf invalido')
    }
}
inicia()
