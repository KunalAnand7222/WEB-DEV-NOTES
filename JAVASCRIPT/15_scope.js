// global scope
let a=15;
if(true){
    //block scope
    let a=10;
    const b=20
    var c=30
    console.log(a,b,c);
}
// var is global scope variable
console.log(c);
// console.log(b);
console.log(a);
// inside browser and inside vs code have different scope

// outer(); can call before declaration
function outer(){
    const outerName="kunal"
    function inner(){
        const innerName="anand"
        console.log(outerName);
        // for inner function outer is global scope so this can easily access outer function var 
        // child can access parent
    }
    inner()
    // console.log(innerName); throw error
    // parent cant access child property

}
outer()

// +++++++++++++ Interesting +++++++++++++
// function expression is a function which is assigned to a variable
// addTwo(60); cant call before declaration bcz its fun expression
const addTwo=function(num){
    return num+10;
}
addTwo(10)
console.log(addTwo(20));
// if we define function expression we can call before declaration but in case of normal function declaration we can call before declaration known as hoisiting


