const accountId = 1061024
let accountEmail = "Ayush@google.com"
var accountPassword = "12345"
accountCity = "NewYork"
let accountState;

// accountId = 23 // can't modify const value NOT ALLOWED
accountEmail = "hc@hc.com"
accountPassword = "678910"
accountCity = "GothamCity"
console.log(accountId);

/*
Prefer not to use var 
beacause of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail,accountPassword, accountCity,accountState])

