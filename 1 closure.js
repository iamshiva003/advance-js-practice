/*
let x = 1; // global scope

const parentFunction = () => {
    let myValue = 2; // local scope
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }
    return childFunction;
}
const result = parentFunction();
console.log(result);

result();
result();
result();
console.log(x);
console.log(myValue); // reference error 
*/


// IIFE (Immediately Lnvoked Function Expression)
/*
const privateCounter = (() => {
    let count = 0;
    counsole.log(`Initial value: $(count)`);
    return () => (count += 1; console.log(count))
})();

privateCounter();
*/

const credits = ((num) => {
    let credits = num;
    console.log('initial credits value: $(credits)');
    return () => {
        credits += 1;
        if (credits > 0) console.log('playing game, $(credits) credits(s)remaining');
        if (credits <= 0) console.log('Not Enough credits');
    }
})(3);

credits();
credits();
credits();