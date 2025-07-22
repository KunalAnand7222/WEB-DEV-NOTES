// A loop in JavaScript  allows you to execute a block of code repeatedly as long as a specified condition is true.
// types of loops:
// for	=> Repeats code a fixed number of times
// while  => Repeats code while a condition is true
// do...while =>	Like while, but always runs at least once
// for...of	=> Loops over iterable objects (arrays, strings)
// for...in =>	Loops over object keys

for(let j=0;j<10;j++)console.log(j);
// ctrl d to select all duplicate
for(let i=0;i<10;i++){
    console.log(`outer loop ${i}`);
    for(let j=0;j<10;j++){
        console.log(`inner loop ${j}`);
    }
}
// there is no out of bound exception in js.... it will show undefined for this
// break and continue
// break => stops the execution of the loop and transfers control to the next statement
// continue => skips the current iteration and moves on to the next one
for(let i=0;i<10;i++){
    if(i==2)continue;//skip
    if(i==5)break;//exit
    console.log(i);
}

// while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

do{//first do then check condition
    console.log(i);
    i++;
}while(i<20);
// atleast execute once even the initial condition is false
