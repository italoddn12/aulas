
(function(){
 
    //function max(x, y) {
    //    maior =  x > y ? x : y;
    //}

    //console.log(max(30, 10));

    //const max = (x, y) => x > y ? x : y; //quando so tem uma linha nn precisa da palavra return 

    //console.log(max(30, 50));

//--------------------------------------------------------//

    
    //const ePaisagem = (a, l) => l >= a; 

    //console.log(ePaisagem(1920, 2560));

//--------------------------------------------------------//

    function check(n1) {
        return !isNaN(n1)
    }

    function divisivel(n1) {

        if (check(n1)) {
            if (n1 % 5 === 0 && n1 % 3 === 0) return `${n1} FizzBuzz`;
            if (n1 % 3 === 0) return `${n1} Fizz`;
            if (n1 % 5 === 0) return `${n1} Buzz`;
            else return n1;
            
        } else {

            return `${n1} não e um numero`;

        }

    }

    for (let i = 0; i <=20; i++){ 
        let result = divisivel(i)
        console.log(result);
    }
})()