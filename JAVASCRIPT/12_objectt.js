// In JavaScript, an object is a non-primitive data type used to store collections of key-value pairs
// Singleton ensures only one instance is created.

const symb=Symbol("helllo");
const info={
    name:"John",
    name:"hello",//name will updated no error
    age:30,
    [symb]:"hell",
    // we have to write symbol key into square braces else its data type change to string or else
    "namee ji": "kiii",//we cant access this using dot operation
    // if there is a space between key we cant access using dot
    address:{
        street:"123 Main St",
        city:"Anytown",
        state:"CA",
        zip:"12345"
        }
}
// accessing object in two ways
// 1 using square braces
console.log(info.name);
console.log(info["address"]["state"]);
// using object dot
console.log(info.address.zip);
console.log(info["namee ji"]);
// always try to access symbol using square braces without double quote
console.log(typeof info[symb]);//we are checking value i.e string so it return string
console.log(typeof symb);

info.name="kunal"
// Object.freeze(info);//it will freeze the object (no updation allow)
info.name="nai"
console.log(info);
// adding function to object
info.greet=function(){
    console.log("Hello welcome to myObject");
}
console.log(info.greet);//return function
console.log(info.greet());
// function return undefined

// this keyword refers to the object that is currently executing the function
info.greet2=function(){
    console.log(`My name is ${this.name}`);
}
console.log(info.greet2());

