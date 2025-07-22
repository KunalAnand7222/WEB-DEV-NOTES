// Arrow function is shorthand function used to reduce the code and make it more readable.
// It is also known as lambda function.
// It is used to define small functions which can take any number of arguments, but can only have one expression.

const user={
    name:"kunal",
    age:54,
    welcome:function(){
        console.log(`${this.name} welcome back`);
        console.log(this);//print current context
        // { name: 'kunal', age: 54, welcome: [Function: welcome] }
    }
}
// user.welcome()//to run method
// // this always refer to current context 
// user.name="Ani"
// user.welcome()//return ani
console.log(this);//inside node environment this refer to empty while in browser this refer to window
// window is global object in browser

function hack(){
    let name="kunal"
    console.log(this.name);
    // this only works inside object not in function
    // if we print this it will print empty object outside of function(globally)
    // but if we print this inside function it will print global object
    // it is a reference to the current context
}
hack()

const hacki= () =>{
    let name="kunal"
    console.log(this);
}
hacki()
// but if we print this inside arrow function it will print empty object while in normal function it will print global object

const add=(n1,n2)=>{
    return n1+n2;
}
console.log(add(5,6));

// if we have only one statement then no need to write return
// if we wrap inside curly braces then return keyword is must
const add1=(n1,n2)=> (n1+n2);//implicit return
console.log(add1(5,6));//return undefined
// explicit return means we have to write return explicitly

const obj=(n1)=> ({name:"kunal"})//object also will be in paranthesis else it will return undefined
console.log(obj(5));

const multipl=(n1,n2,n3)=>{
    let result=n1*n2;
    let res1=result*n3;
    return res1
}
console.log(multipl(5,6,7));


// Immediately Invoked Function Expression(IIFE)
// (function declaration)(calling)

(function info(){
    // named IIFE
    console.log("Hello");
})();//always use semicolon after this else we cant create more than one IIFE in same file
// this is called immediately invoked function expression
// it is called as soon as it is defined
// it is used to prevent global scope pollution
//  helps prevent global scope pollution by creating a new local scope for your variables and functions.
// Global scope pollution happens when too many variables or functions are declared in the global scope (window in browsers)

( (name)=>console.log(`${name}`))("kunal");
// unnamed IIFE
// second paranthesis is same as function calling