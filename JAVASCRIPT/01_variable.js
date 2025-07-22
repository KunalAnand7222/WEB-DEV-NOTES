// let var const
// variable name should be in camelCase(optional but preferrable)
const firstName="kunal"
let lastName="Anand"
var pass="12356"
variable=54

// firstName="pooo" cant update const variable
lastName="kiii"
pass=546
variable=987
console.table([lastName,pass,variable])
// used to print multiple variable at once
console.log(firstName);
// block: {} inside curly braces
// say no to var bcz of block and functional scope

let acc; //unintialised return undefine

// let: block scope, can be updated but not redeclare in same scope,hoisted but not initialised
// var: function scope, can be updated and re declare. gets hoisted
// const: block scope,cant redeclare or updated, must be initialised at declaration
// const ki; throw error

let x=10;
// let x=50; cant redeclare
var y=10;
var y=50;//work fine for var keyword

// If a const holds an object or array, you can change the contents, but not reassign the variable.

