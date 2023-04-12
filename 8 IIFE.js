// IIFE - Immediately-Invoked Function Expression
// Pronounced "Iffy" by Ben Alman who introduced the acronym
// Variations:
// with anonymous arrow function inside:
(() => {
    // do stuff
})();
// with the function keyword:
(function () {
    // do stuff
})();
// with a function name (allows for recursion):
(function myIIFE() {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log("finished!");
})(num = 0);




// Reason 1) Does not pollute the global object namespace
// global
const x = "whatever";
const helloWorld = () => "Hello World!";
// isolate declarations within the function
(() => {
    const x = "iife whatever";
    const helloworld = () => "Hello IIFE!";
    console.log(x);
    console.log(helloWorld());
})();
console.log(x);
console.log(helloWorld());



