// Premitive
// 7 types : string, number , boolean , null , undefined , symbol , bigint

const score = 100
const scoreValue = 100.3
const isLoggedIN = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
 
// console.log(id === anotherId);

// const bigNumber = 123456789098765432n

// nonpremitive/refranceType


// array , object , function 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj={
    name: "Hitesh",
    age : 21
}

const myFunction = function(){
//console.log("Hello World");
}

//console.log( typeof anotherId);


//************************************************************************************************* */


// stack (primitive) , heap ( non-primitive)

let myYoutbeName = "HiteshChowdharidotcom"

let anotherName = myYoutbeName;
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutbeName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1;

user2.email = "Gaurav@gmail.com"

console.log(user1.email);
console.log(user2.email);