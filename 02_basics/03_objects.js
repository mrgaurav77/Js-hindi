// singleton

// object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name:"Hitesh" ,
    "full name" : "Hitesh Choudhary",
    [mySym]:"mykey1",
    age : 18,
    Location: "Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hellow JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
