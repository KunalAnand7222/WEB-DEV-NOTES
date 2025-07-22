// date start from 1st january 1970
// month start from 0
// return type is date
const date=new Date();
// return current date and time
console.log(date);// millisecond
console.log(date.toString());//  with time
console.log(date.toDateString());// return date fri jul 21 2023
console.log(date.toLocaleString());//return date style of local
console.log(typeof date);// object

let createDate=new Date(2025,0,12);// year month day
let createDatee=new Date(2025,15,12);// year month day
// if greater than 11 then counting again start from 0(15-11=4 april)
let createDatee2=new Date(2025,-5,12);// year month day
// if negative month then from end(-5 means august)
// 0 for first month
console.log(createDate.toDateString().split(" "));
// [ 'Sun', 'Jan', '12', '2025' ]
console.log(createDatee.toDateString());
console.log(createDatee2.toDateString());

let createDateTime=new Date(2025,12,11,15,45,10);
// year month day hour min sec
console.log(createDateTime.toString());

// create date in sting format
let createDateTimeString=new Date("2025-12-12");
// year month(should be less than 13 else invalid date) day
let createDateTimeString2=new Date("10-14-2025");
console.log(createDateTimeString.toString());
console.log(createDateTimeString2.toString());
// can declare in two ways year month day or day month year
// but month should be less than 13 else invalid date

let timeStamp=Date.now();//return in millisecond
// return timeStamp
console.log(timeStamp);
console.log(Math.floor(timeStamp/1000));
//convert to second
console.log(createDateTimeString2.getTime());
// used to convert date to millisecond

let date1=new Date();
console.log(date1.getMonth());
// month start from 0
console.log(date1.getDay());
// monday=1
console.log(date1.getFullYear());

// let now = new Date();                        // Current date and time
// let d1 = new Date("2023-07-19");            // Date from string
// let d2 = new Date(2023, 6, 19);             // Year, month (0-indexed), day
// let d3 = new Date(2023, 6, 19, 15, 30, 0);  // Y, M, D, h, m, s
// let d4 = new Date(0);                       // Epoch time (Jan 1, 1970)
// let d5 = new Date(Date.now());             // Current timestamp

// date.getFullYear();    // 2023
// date.getMonth();       // 0-11 (0 = Jan)
// date.getDate();        // 1-31
// date.getDay();         // 0-6 (0 = Sunday)
// date.getHours();       // 0-23
// date.getMinutes();     // 0-59
// date.getSeconds();     // 0-59
// date.getMilliseconds();// 0-999
// date.getTime();        // Milliseconds since Jan 1, 1970
// date.getTimezoneOffset(); // Difference from UTC in minutes

// date.setFullYear(2025);
// date.setMonth(11);         // December
// date.setDate(25);
// date.setHours(14);
// date.setMinutes(30);
// date.setSeconds(45);
// date.setMilliseconds(500);
// date.setTime(1624381230000); // Set using timestamp

// let future = new Date();
// future.setDate(future.getDate() + 7); // Add 7 days
// let diffMs = future - now;            // Milliseconds between dates
// let diffDays = diffMs / (1000 * 60 * 60 * 24);


// date1.getTime() === date2.getTime() // Check equality
// first convert to time then compare