(function(){
    const mostrador = document.querySelector('.hora');

    let data = new Date();
    let day = data.getDay();
    let dayStr;

    switch(day){
        case 0:
            dayStr = 'domingo'
            break;
        case 1:
            dayStr = 'segunda-feira'
            break; 
        case 2:
            dayStr = 'terça-feira'
            break; 
        case 3:
            dayStr = 'quarta-feira'
            break; 
        case 4:
            dayStr = 'quinta-feira'
            break; 
        case 5:
            dayStr = 'sexta-feira'
            break;
        case 6:
            dayStr = 'sabado' 
    }

    mostrador.innerHTML = `${dayStr}, ${data.getDate()} de ${data.getMonth()+1} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

    // h1.innerHTML = data.toLocaleDateString('pt-br',{dateStyle: 'full', timeStyle: 'short' });

    
})();