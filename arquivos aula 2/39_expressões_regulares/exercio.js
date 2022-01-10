const { ips, cpfs } = require('./base');

console.log(ips.match(/[\d.]+/g))
console.log(cpfs.match(/\d+.\d+.\d+-\d+/g))