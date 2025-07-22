// const user=new Object();//singleton object
const user={}//not singleton
user.id=10
user.age=56
user.in=false
const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
const obj2={
    1:"a",
    2:"b",
    3:"c",
    5:"f"
}
// can combine two objects using spread operator
const obj3={...obj1,...obj2}
console.log(obj3);
// also combine using assign
// assign(target,source,source1)  always prefer target as empty object
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);

console.log(Object.keys(obj4));//return an array
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
// return an array of key value pair
// [
//   [ '1', 'a' ],
//   [ '2', 'b' ],
// ]
// to check if key is present or not
// can simpley check using in
console.log('1' in obj4);
// or using hasownproperty
console.log(obj4.hasOwnProperty("1"));

// Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
// Destructuring is a shorthand way to assign values from an array or object to variables.

const obj5={
    name:"John",
    age:30,
    address:{
        street:"123 Main St",
        city:"Anytown",
    }
}
// Destructuring an object
const {name:n1,age:a1}=obj5;
// n1 and a1 is nickname use to acces name and age
console.log(n1,a1);
const arr=[50,12,65];
const [a,b]=arr; // a and b is nickname use to acces 50 and 12
console.log(a,b);

// API stands for Application Programming Interface.
// It allows two software systems to communicate with each other.
// API is a set of defined rules that enables different applications to communicate with each other.

// {
//     "name": "John",
// }//json every key is in double quote

// [
//     {},
//     {}
// ]