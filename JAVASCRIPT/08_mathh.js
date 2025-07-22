// number can be declare in two way first one simple and second one with new keyword
const num=5656
const num2=new Number(54641);//return an object
console.table([num,num2]);
console.log(num2);
// tostring
console.log(num2.toString());
// fixed precision value
console.log(num2.toFixed(3));

const num3=56.9876
console.log(num3.toPrecision(4));//return 56.99
console.log(num3.toPrecision(3));//return 57
// take number of precision from left and round off else part

const hund=10000000
console.log(hund.toLocaleString("en-IN"));
// return indian style number 1,00,00,000
console.log(Number.MAX_VALUE);//can used to find max in cp
console.log(Number.MIN_VALUE);

console.log(Math.PI);
console.log(Math.SQRT2);//return sqrt of 2
console.log(Math.SQRT1_2);//return sqrt of 1/2

console.log(Math.abs(-10));
console.log(Math.sqrt(9));
console.log(Math.cbrt(64));
console.log(Math.ceil(6.1));
// upper value
console.log(Math.floor(6.1));
// lower value
console.log(Math.round(5.5));
// if >=.5 then ceil else floor
console.log(Math.trunc(5.556));
// trunc remove decimal part

console.log(Math.max(5,6,8,9,7,1));
console.log(Math.min(5,6,8,9,7,1));
console.log(Math.random());//return random number between 0 and 1
let min=1,max=6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// return random number between range
console.log(Math.pow(5,4));
console.log(Math.log(10));//return base e
console.log(Math.log2(10));
console.log(Math.exp(10));//return e^x

console.log(Math.sign(0.1));//return -1 0 1;
// 0.1=> 1

console.log(Math.sin(Math.PI/2));
console.log(Math.cos(0));

// asin return degreee while sin return value
console.log(Math.asin(1));  //return pi/2

// Degree to Radian
let radians = degrees * (Math.PI / 180);

// Radian to Degree
let degrees = radians * (180 / Math.PI);

