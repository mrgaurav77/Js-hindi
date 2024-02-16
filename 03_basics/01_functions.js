function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
        // let result = number1+number2
        // return result
        return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result:" , result);

function loginUserMessage(Username="sam"){
    if(!Username){
        console.log("Please enter a username");
        return
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage('Hitesh'))
// console.log(loginUserMessage("hitesh"))






function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log((`Username is ${anyobject.username} and price is ${anyobject.price}`));
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 300
})


const myNewArray = [200, 300, 100, 600]
function returnSecondValue(getArry){
    return getArry[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));