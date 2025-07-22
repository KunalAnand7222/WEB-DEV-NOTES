// for of loop
// [{},{},{}]
const arr=[1,2,3,4,5,6]
for(const i of arr)console.log(i);
// for (const element of object) {
    
// }
const greet="Kunal anand"
for(const i of greet)console.log(i);//string is also an object so it print k u n and so on

// for in loop used to iterate over object(keys) and dont recommend to use with array
for(let i in arr)console.log(i);//it will print index of array
const obj={
    name:"kunal",
    age:20

}
for(let i in obj)console.log(i);//iterate over keys
for(let i in obj)console.log(`${i} value: ${obj[i]}`);
console.log(obj.name);

// Maps:In JavaScript, a Map is a built-in object that holds key-value pairs and remembers the original insertion order of the keys.it contains unique values only
const map=new Map();
map.set("name","kunal");
map.set("age",20);
map.set("name","anan")
console.log(map.get("name")); //kunal
// set is to insert into map and get is used to print something
console.log(map);

// by destructuring we can print both key and value
for(const [key,value] of map)console.log(`${key} : ${value}`);
// destructuring only works in map it donot work with object

const obj1={
    name:"kunal",
    age:20
}
// for(const [key,value] of obj1)console.log(key);//obj1 is not iterable
// arrays have also keys i.e. index

// ++++++++++++++++++++ INTERESTING++++++++++++++++++++
for(const key in map)console.log(i);//map is iterable but it print nothing
// for...in is for enumerating object properties, not iterating over Map entries.


// For Each loop: The forEach() loop is a method available on arrays, Maps, and Sets in JavaScript. It executes a provided function once for each element.

const arr1=[9,8,7,9,54,65];
arr1.forEach((key,val)=>console.log(val,key));
// val is the value and key is the index
// forEach takes a callback function with argument key and val can also take array
arr1.forEach(function(val){//function without name
    console.log(val);
})
// takes three argument key value and array
arr1.forEach((key,val,arr)=>console.log(key,val,arr));

const coding=[
    {name:"kunal",age:20},
    {name:"Ani",age:40},
    {name:"Ana",age:30},
]
coding.forEach((key,val)=>console.log(key.age,val));//can access like this
// val store index
