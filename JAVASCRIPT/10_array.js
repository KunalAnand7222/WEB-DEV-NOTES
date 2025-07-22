// An array in JavaScript is a single variable that is used to store a list of values.
// Arrays are denoted by square brackets `[]` and are zero-indexed, meaning the first element is at index 0.

const myArr=[5,9,7,true];//can cotain different type element in js
// array in js is resizable
// shallow copy: points to the same reference and change in original
// deep copy: copy the value and change in original does not affect the copy

const arr1=new Array(4,5,9,true);
console.log(typeof myArr); //object
console.log(typeof arr1);

// Array methods
// 1. push() - adds one or more elements to the end of an array and returns the new length of the array.
console.log(myArr.push(5,6,7,8,99));//return length of new array
console.log(myArr);

// 2.pop()- remove last element and return last element
console.log(myArr.pop());//return last element
console.log(myArr);

// 3. unshift: add element to first index and return length of new array
console.log(myArr.unshift(100,20,30));
console.log(myArr);

// 4. shift: remove first element and return first element
console.log(myArr.shift());
console.log(myArr);

// includes()	Check if value exists	[1,2,3].includes(2) → true
console.log(myArr.includes(9));

// indexOf()	First index of value	[1,2,3].indexOf(2) → 1
console.log(myArr.indexOf(9));//if not present then it return -1

// lastIndexOf()	Last index of value	[1,2,2].lastIndexOf(2) → 2
console.log(myArr.lastIndexOf(9));

// find()	First element matching condition	arr.find(x => x > 3)
console.log(myArr.find(x=>x<90));//it will return the first element which satisfies the condition us with arrow function

// findIndex()	Index of first match	arr.findIndex(x => x > 3)
console.log(myArr.findIndex(x=>x<90));
// it will return the index of first element

// join()	Join with separator	arr.join("-")
// toString()	Convert to string	arr.toString()
// toLocaleString()	Localized string rep	arr.toLocaleString()
console.log(myArr.join("*"));
console.log(myArr.toString());
console.log(myArr.toLocaleString());

// slice splice
// slice: return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where negative index used to access from end

const arr3=[1,2,3,4,50,6,7,8,9]
console.log(arr3.slice(0,3)); //start to end-1
console.log(arr3);

// splice is used to remove between given index and it also change the original array
// console.log(arr3.splice(0,3));//start to end-1
// console.log(arr3);

// splice(starting index,how many u want to remove, what u want to add)
// console.log(arr3.splice(3,4,"a","b"));
// // remove element from 
// console.log(arr3);

console.log(arr3.sort((a,b)=>b-a));//sort in decreasing order
console.log(arr3.sort((a,b)=>a-b));//sort in increasing order

console.log(arr3.reverse()); //reverse the array

const arr4=arr3.slice(0,4)
arr4.push(900)
console.log(arr4);
console.log(arr3);

// slice() gives a new array, but:
// Primitives are copied by value
// Objects/arrays inside are copied by reference

const arr5=new Array(10);
// arr.fill(value,start,end)
arr5.fill(1,2,10);//excluding last index
console.log(arr5);

// concat used to join two arrays
console.log(arr4.concat(arr5));

// 	Flatten nested arrays
console.log(arr5.flat());

console.log(arr4);//[ 50, 9, 8, 7, 900 ]
// same as find but it searches from last and return value while lastIndex return index of matching condition
console.log(arr4.findLast(x=>x<10));
console.log(arr4.findLastIndex(x=>x<10));

// using at we can access array using both positive and  negative index
console.log(arr4.at(-2));//second last

// arr.with(index,what u want to set)
console.log(arr4.with(1,500));
// return a new array i.e copy of original one and dont update the actual array
// used to update at given index
console.log(arr4);
// return a new array
console.log(arr4.toReversed());
console.log(arr4.toSorted((a,b)=>a-b));
console.log(arr4.toSpliced(1,3));

