// sao funçoes q c auto chama
function recursiva(max){
    if (max > 10) return;
    max++
    console.log(max);
    recursiva(max);
}

recursiva(0)