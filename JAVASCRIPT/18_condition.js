// else{
//     console.log("strict else");
// } in js we cant write else without if

// if else is conditional statement which helps to execute particular block of code based on certain condition
if(false){
    console.log("dfj");
}else if(true){
    console.log("Hello, World!");
}else{
    console.log("dfj");
}

// in js 1 treated as true
if(1){
    console.log("dfj");
}
// > < >= <= == != ===(type+value) !==
if("2"===2){
    console.log("triple");
}else{
    console.log("strict");
}

if("2"!==2){
    console.log("triple");
}

if(true)console.log("hello"),console.log("poopo");
// we can write multiple statement using comma in js

// short hand notation
// const variable=(condition)? value1:value2;
const shorthand=(5>6)?"greater":"lesser";
console.log(shorthand);

// console.log(5^5); bitwise