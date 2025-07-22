// A function is a reusable block of code designed to perform a specific task.

// function functionName(parameters) {
  // code to execute
//   return value; // optional
// }

function greet(){
    console.log("hello world");
    // return 10;
}
// greet reference
greet();//function calling
console.log(greet());
// if there is no return type then it return undefined

function add(a,b){//parameter: variable define in function declaration or definition
    console.log(a+b);
}
add(10,20);//argument: value that u pass to function
console.log(add(20,30));//return undefined bcz no return function


function logIn(user){
    if(user===undefined){
        console.log("enter valid");
        return;
    }
    return `${user} just logged in`
}
console.log(logIn("kunal"));
console.log(logIn());//return undefined
// undefined=> false
// null=> false
// 0=> false
// ""=> false
// passed value has more priority than default value
function add(a=10){
    console.log(a);
}
add();
add(20);//console 20 bcz passed value has more priority than default value
// function expression
// function expression is a function that is defined inside another expression

// suppose we dont know how many arguments we will pass to function
// then we can use arguments object
function add(...num){//rest operator
    // const num1=[...num]
    return num
}
console.log(add(10,20,30,4));

// rest: Collects multiple elements into a single array or object.
// Used in function parameters or destructuring.

// function add(...num,num1,num2){//rest operator
//     // rest operator must be last parameter
// }
// console.log(add(10,20,30,4));

function handleobject(obj){
    console.log(`my name is ${obj.name}`);
}
handleobject({name:"kunal"});

function handleArray(arr){
    console.log(arr);
}
handleArray([1,2,3,4,5,6,7,8,9]);
