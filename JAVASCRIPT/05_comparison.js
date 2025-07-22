console.log("5">56);//autotype conversion fron string to int
console.log("054">54);// it will also work

console.log(Number("054")); //54
console.log(null>0); //false
console.log(null==0);//false
console.log(null<0);//false
console.log(null>=0);//true
console.log(null<=0);//true
// js convert null to different value with different coomparison
// null >= 0 → !(null < 0) → !false → true ✅

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);

// === strict check data type aswell as value
console.log("5"===5);
console.log("5"==5);