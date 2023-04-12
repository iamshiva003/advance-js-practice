// Javascript Decorator functions
// wraps a function in another function

// Example 1:
// using closure to log how many times a function is called
let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {
    let count = 0;

    return (...args) => {
        // write to logs, console, db etc
        console.log("sum has been called ${count += 1} times");
        return fn(...args);
    }
}

sum = callCounter(sum);

console.log(sum(2,3,5));
console.log(sum(1,5));
console.log(sum(14,5));


// Exmaple 2:
// check for valid data and valid number of params

let rectangleArea = (fn) => {
    return (...params) => {
        if(params.length != fn.length) {
            throw new Error("Incorrect number of parameters for ${fn.name}");
        }
        return fn(...params);
    }
}

const requireIntegers = (fn) => {
    return (...params) => {
        params.forEach(param => {
            if (!number.isInteger(param)) {
                throw new TypeError("Params for ${fn.name} mus tbe integrs");
            }
        });
        return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));
console.log(rectangleArea(20, 'hey'));




// Exmaple 3:
// Decorating an async API call function 
// time data requests during development

let requestData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch (err) {
        console.log(err);
    }
}

const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn')
        const data = await fn(url)
        console.timeEnd('fn')
        return data
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData)
    const data = await requestData('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
}

myTestFunction()