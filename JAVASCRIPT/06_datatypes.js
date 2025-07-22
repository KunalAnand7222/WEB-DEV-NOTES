// primitive
// 7 types: String, Number, Boolean, null,undefined,Symbol,BigInt

// reference type(Non primitive)
// Array, Objects, Functions
// JavaScript is a dynamically typed language 
// Variables do not have fixed types
// You can assign any type of value to a variable at runtime
// The type can change later

const id=Symbol("56");
const idd=Symbol("56");//datatype symbol
console.log(id==idd); //uniquely identifies
const bigNum=46564545444n;
// convert to bigInt use n at last
const actors=["ironman","antman"];
// square braces array
let obj={
    name:"kuni"
}
// curly braces with key value pair object
const myFunction=function(){
    console.log("hdhd");
}
myFunction();

// null=> object
// object=>object
// Function=> function
// array=> object
console.log(typeof obj);
console.log(typeof myFunction);
console.log(typeof actors);

// stack(primitive)(return a copy)  Heap(Non primitive)(reference change in original value)
let first="kunal"
let second=first
second="hello"//it will not update original value(returns a copy)
console.log(first);
console.log(second);

let one={
    mail:"kkkk"  //   :  not mail="hell"
}
let two=one;
two.mail="hello";  //update in original value(return reference)
console.log(one.mail);//same
console.log(two.mail);//same