const arr1=[4,5,"fd","fhu"]
const arr2=["dshbj","ds","dsh"]
// console.log(arr1.push(arr2));
// it will push entire array into arr1 like [1,2,3,[df,fd]]
// console.log(arr1[4][1]);
// while concat used to concat two array element

// spread operator: used to expand elements of an array or iterable into individual element
const arr3=[...arr1,...arr2]
console.log(arr3);
// we can concat element of array using spread operator

const check=[1,2,3,[4,5,[6,7,[9,10]]]]
// flat(how many level u want to flat) or pass Infinity(not infinity)
console.log(check.flat(3));
console.log(check.flat(Infinity));

console.log(Array.isArray("Kunal"));//check given is array or not
console.log(Array.from("Kunal"));//if not convert to array
console.log(Array.from({name: "kunal"}));//if it not able to create array then it return empty object
console.log(Object.values({name:"kunal"}));
// can convert to value array .... first fetch value from object then pass it to .from
// also used to convert to array
console.log(Array.of(1,2,3,4,5));

// Creates array from arguments	(of)
// Converts iterable or array-like to array (from)