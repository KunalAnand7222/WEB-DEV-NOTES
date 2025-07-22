console.log(5**5);//power

console.log("2"+2);//22
console.log(2+"65");//265
console.log(2+2+"5");//45
console.log("4"+2+5);//425
// primitive: stored by value,single simple values like number string 
//non primitive: stored by reference, complex structure like object Array function

console.log(5+4+"5"+5+9+1);
// left to right if got string then after that perform concat operation
// if got number then perform addition operation
// always use paranthesis
console.log(true+5+"po");//6po

console.log(true);  //true
console.log(+true);//1
// console.log(true+);//error
console.log(+"");//0
console.log(+"12");//12
console.log(+"dsfnj");//NaN
// console.log(+"dsfnj"+5);//error

let a,b,c,d;
a=b=c=d=5/9;
console.log(Number(a));
console.log(Math.trunc(a));//division

let counter=0;
console.log(counter++);//0
console.log(++counter);//2
let x=4,y=6;
console.log(++x + y++);//11
