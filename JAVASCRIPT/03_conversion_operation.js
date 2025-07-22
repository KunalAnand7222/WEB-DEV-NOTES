let age=98.2;
console.log(typeof age);// number
console.log(typeof(age));

let score="56abc";
let inNumber=Number(score);
console.log(typeof inNumber);//number
console.log(inNumber);  //NaN(not a number)
// it will even convert abs to number but value is NaN
let nullCheck=null;
let undefinedCheck=undefined;
console.log(Number(nullCheck));//0
// if we convert null to number it will show 0
console.log(Number(undefinedCheck));//NaN
// if we convert undefined to number it will be NaN
let booleanCheck=true;
console.log(Number(booleanCheck));////1 true 0 false

// "33" =>33
// "33dhf"=> NaN but type number

let logIn=1;  
console.log(Boolean(logIn));//convert to true

let logIncheck=""
// empty string false else true
console.log(Boolean(logIncheck));
// "" =>false
// "dsh"=>true

let NumCheck=54;
console.log(String(NumCheck));

let boolCheck=true;
console.log(String(boolCheck));
console.log(String(boolCheck)==true);//false
// 54=> "54"
// true=> "true"
