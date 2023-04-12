// Value vs Reference
// Primitives pass values:
let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);
// Structural types use references:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);

// Mutable vs Immutable
// Primitives are immutable
let myName = "Shiv";
myName[0] = "W"; // nope!
console.log(myName);
// Reassignment is not the same as mutable
myName = "Shivakumar";
console.log(myName);
// Structures contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);
// still shares reference

// Pure Functions require you to avoid
// mutating the data
// Impure function that mutates the data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
}
const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));
// This mutates the original array.
// This is considered to be a side-effect.
// Notice: "const" does not make the array immutable
// There is much more to Pure Functions that I
// will discuss in my next tutorial.
// We need to modify our function so it does not
// mutate the original data.


// Shallow copy vs. Deep copy (clones)
// Shallow copy
// With the spread operator
const zArray = [...yArray, 10];

console.log(zArray);
console.log(yArray);
console.log(xArray === yArray);
console.log(yArray === ZArray);
// With Object.assign()
const tArray = Object.assign([], zArray);

console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log(tArray);

// But if there are nested arrays or objects....
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
// nested structural data types still share a reference
// Note: Array.from() and slice () create shallow
// copies, too.

// When it comes to objects, what about...
// ...Object.freeze() ??
const scoreObj = {
    "first": 44,
    "second": 12,
    "third": { "a": 1, "b": 2 }
}
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);
// still mutates it is a shallow freeze


// Deep copy is needed to avoid this

// Several libraries like lodash, Ramda, and others

// have this feature built-in

/* Here is a one line Vanilla JS solution,
but it does not work with Dates, functions, undefined, Infinity, RegExps,
Maps, Sets, Blobs, Filelists, ImageDatas, and other complex data types */

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));

console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

// Instead of using a library, here is a Vanilla JS function
// const deepClone = (obj) => {
//     if (typeof obj !== "object" || obj === null) return obj;
//     // Create an array or object to hold the values
//     const newObject = Array.isArray(obj) ? [] = {};
//     for (let key in obj) {
//         const value = obj[key];
//         // recursive call for nested objects & arrays
//         newObject[key] = deepClone(value);
//     }
//     return newObject;
// }
// Now we can make a pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
}
const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);

