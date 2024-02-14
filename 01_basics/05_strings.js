const name = "Gaurav"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log( `Hellow my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gaurav-OP')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Gaurav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20Kolhe"
console.log(url.replace('%20','-'));

console.log(url.includes('gaurav'));

console.log(gameName.split('-'))
