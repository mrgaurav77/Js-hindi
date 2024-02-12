const accountId = 144553
let accountEmail = "gkolhe@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed

accountEmail= "gk@gk.com"
accountPassword ="121212"
accountCity = "Bengaluru"


console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and fuctional scope
 */

console.table([accountEmail, accountPassword, accountCity,accountState])