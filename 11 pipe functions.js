// functional programming
// often uses pip and compose = higher order function

// a higher order function is any function which takes a function as an argument returns a function or both

// compose function
const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiply = (x) => x * 5;

// notice how the function execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

// the above is not a compose function lets make one



// making our own compose and pipe functions
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);

// read from right we use
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

// we will often see the functions on separate lines
const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(6);
console.log(pipeResult2);



// this is a "pointer free" style where you do not see the unary parameter passed between each function
// example with 2nd parameter
const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult3);



// or you should curry the divideby function for a custom unary function
const diviBy = (divisor) => (num) => num / divisor;
const divideBy2 = diviBy(2); // partially applied

const pipeResult4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4);




// another example
const lorem = "ghghg jhghg hghjgg hkhh jkhkhy fgfg fgft uttt ghgjgyytg guytt ggjgjh ftftf iyui fffu yuygbg yugygg gtftf ftfkuf fukftt ftkutu ftkutf vbgt tyyvv ftfkf kfyfftf tftftt ggfgkkg gjkgyu guygkuyg fgyukgy ftfytg fftuf uyfguyhg";

const splitOnSpace = (string) => string.split(" ");
const count = (array) => array.length;

const wordCount = pipe(
    splitOnSpace,
    count
);

console.log(wordCount(lorem));


// the pipe function is reusable
const egbdf = "Every good boy does fine";
console.log(wordCount(egbdf));

// combine processes: check for palindrome
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Dave";

const split = (string) => string.split(" ");
const join = (string) => string.join(' ');
const lower = (string) => string.toLowerCase();
const reverse = (string) => string.reverse();

const fwd = pipe(
    splitOnSpace,
    join,
    lower
);

const rev = pipe(
    fwd,
    split,
    reverse,
    join
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));



// copy / close function within a pipe or compose function
// 3 approaches

// approach 1: clone the object before an impure function mutates it
const scoreObj = {home: 0, away: 0};

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : { ...obj };

const incrementHome = (obj) => {
    obj.home += 1;
    return obj;
}

const homeScore = pipe(
    shallowClone,
    incrementHome
    // another function
    // and another functioin
);

console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj);

// position: fewer function calls
// negative: create impure functions and testing difficulties



// approach 2: curry the function to create a partia; that is unary
let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
}

// creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHome
    // another function
    // and another function
);

console.log(homeScoreB(scoreObj));
console.log(scoreObj);




// approach 3: insert the clone function as a dependency
const incrementHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
}

const homeScoreC = pipe(
    x => incrementHomeC(x, shallowClone)
);
console.log(homeScoreC(scoreObj));
console.log(scoreObj);
