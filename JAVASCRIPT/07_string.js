const first="kunal"
const last="Anand"
console.log(first+last+"name");//outdated syntax
// try below syntax each time  (`` and put in ${variable name})
console.log(`My name is ${first} and last name is ${last}`);

// declare string with new keyword
const name=new String("hello");
// return an object(key value pair)
console.log(name);
console.log(name.__proto__);//return an object

console.log(name.length);
// convert uppercase
console.log(name.toUpperCase());
// to check character at given position
console.log(name.charAt(3));
// return index of given character
console.log(name.indexOf("l"));
// substring(start,end) excluding end and including end
console.log(name.substring(1,3));
console.log(name.substring(-1,3));
// if we pass any negative value to substring it will automatically set negative to 
console.log(name.substring(2,-6));
// return starting 2 character and ignore -6

console.log(name.slice(0,4));
// "hello"=> hell excluding end
console.log(name.slice(-3,4))
// treated negative as length-3 i.e (2,4)
console.log(name.substring(-3,4));//starting from 0

// slice treated negative value as length-negative while substring treated as 0 for starting and for ending it just print starting n character
console.log(name.substring(-2,-1));//no output
console.log(name.slice(-2,-1));//(5-2,5-1)

console.log("  haha  ".trim());//remove starting and end space
console.log("    ahha".trimStart());//remove left space
console.log("     sdbhhs  ".trimEnd());//remove right spaces
// replace=> str.replace(search,replaceab)
console.log("Hello world".replace("llo","kkkl"));

console.log("hello".includes("lol"));//check if given substring is present or not
// str.split(" " or "$" or("*"))
console.log("hh  hh  hh  hh".split("  "));

console.log("stys".at(-2));//return y
// Similar to charAt but supports negative indexing.
// if negatve it return from end

// str.indexOf(substr)	Returns the first index of substr, or -1 if not found.
// str.lastIndexOf(substr)	Returns the last index of substr.
console.log("hello".indexOf("l"));//return first index
console.log("hello".lastIndexOf("l"));//return last index

// str.startsWith(prefix)	Checks if string starts with prefix.
// str.endsWith(suffix)	Checks if string ends with suffix.
console.log("hello".startsWith("he"));//return true
console.log("hello".endsWith("o"));//return true

// str.match(regex)	Returns result of matching string with regex.
console.log("hello".match(/l/g).length);
// if we use g it will  Returns an array of matches 
// we can use to count number of particular character in a string using first match then length

// str.substring(startIndex, endindex)	Similar to slice, but does not allow negative indexes.
// str.substr(startIndex, length)	Extracts length characters from start. (deprecated)
console.log("hello".substr(1,3));
console.log("hello".substring(2,4));

console.log("he".repeat(3));//repeat given string n times
console.log("hello".concat("he","ji","*"));//concat to given string
console.log("hello".replaceAll("l","ko"));
// replace all given substring to new one

console.log("Hello".padStart(9,"l"));
// padStart() pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The second argument is the string to pad with.
console.log("hello".padEnd(10,"ku"));//pad at end
// str.split(separator, limit)	Splits string into array based on separator.
console.log("hey i am a goood boy".split(" ",3));
// limit is for how many split we want to do


