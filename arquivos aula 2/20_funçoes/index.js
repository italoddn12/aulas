// declaração de função (function hoisting)
function falaOi() {
    console.log('oi');
}

// First-class obejects (Objetos de primeira classe)
// function expression
const souUmDado = function() {
    console.log('sou um dado.');
};

// Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

// Dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando');
    }
};
//obj.falar();