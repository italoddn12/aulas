const data = new Date('2019-04-20 20:20:59');

//numero do dia
console.log('dia', data.getDate());
console.log('mes', data.getMonth() + 1); // mês começa do zero
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds()); // 0 - Domingo, 6 - sábado
console.log('dia semana', data.getDay());
console.log(Date.now()); //milesimos de segundos ate hj
console.log(data.toString());