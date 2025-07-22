// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// A switch statement is used to perform different actions based on different conditions (values of a variable or expression).
// It is often a cleaner alternative to writing many if...else if...else statements.

const amount=9000;
switch (true) {
    case amount>1000:
        console.log("Amount is greater than 1000");
// ++++++++++ INTERESTING +++++++++++++++++
        break;//dont forget break else it will execute all code below that 
    case amount<1000:
        console.log("Amount is less than 1000");
        break;
    default://default is like else of if else
        console.log("Amount is equal to 1000");
        break;
}

// +++++++++++++++++ INTERESTING +++++++++++++++
// if we pass some variable in switch then case will only match to variable
// if we pass just true in switch then we can write conditional statement in case

switch(amount){
    case amount>1000:
        console.log("Amount is greater than 1000");
        break;
    default:
        console.log("Amount is less than 1000");
}
// in this case always default will execute bcz we are passing a varible to switch and case will simple match the variable
// case: true
// case: false

const month="jan"
switch(month){
    case month=="jan" || month=="feb":
        console.log("Month is jan or feb");
        break;
    case month=="mar" || month=="apr":
        console.log("Month is mar or apr");
        break;
    default:
        console.log("Month is not jan or feb or mar or apr");
}

// if we dont write break it will execute all below code 
const age=10;
switch(age){
    case 10:
        console.log("Age is 10");
    case 20:
        console.log("Age is 20");
    case 30:
        console.log("Age is 30");
    default:
        console.log("Age is not 10 or 20 or 30");
}