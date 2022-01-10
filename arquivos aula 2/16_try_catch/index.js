
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}
try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(e) {
    // console.log(e);
    console.log('alguma coisa mais amigavel pro usuario')
}
