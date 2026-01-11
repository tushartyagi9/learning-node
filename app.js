console.log(10+10);
//create a file and write in it..
let fs=require('fs')
fs.writeFileSync("tushar.txt","My name is Tushar")

// let ty=require('fs')
// ty.writeFileSync("data.js","module.exports={username=}")

const user=require('./data');
console.log(user)