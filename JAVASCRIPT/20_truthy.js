// truthy: assume it will be always true
// falsey: assume it will be always false

// falsy values:
// 0 (zero)
// empty string ""
// null
// undefined
// NaN (Not a Number)
// BIgInt 0n

const user=[]
if(user){
    console.log("truthy");
}else{
    console.log("falsy");
}
// truthy:
//  "0"  'false'  " " [] {} function(){}
// anything inside string is true even a space or false or 0

// better to use this instead of if(arr)
const arr=[]
if(arr.length==0)console.log("Empty array");

const obj={}
if(Object.keys(obj).length==0){
    console.log("Empty object");
}

// Nullish coalescing operator (??): null undefined
// returns first non null or not undefined value

let val1=null ?? null ?? undefined ?? 15 ?? 20 ?? null;
console.log(val1); // 15

// ternary operator
// condition? true: false
const price=100>20?"greater":"lesser";
console.log(price); // greater