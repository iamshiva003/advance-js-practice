// Recusrion

// a function calls itself

// iterator function
// const countToTen = (num = 3) => {
//     while (num <= 10) {
//         console.log(num);
//         num++;
//     }
// }

// countToTen();

// // recusrive function
// const recurToTen = (num = 1) => {
//     if (num > 10) return;
//     console.log(num);
//     num++;
//     recurToTen(num);
// }

// recurToTen();


// the standars example: Fibonacci sequence
// 0 1 1 2 3 5 8 13 21 etc

// without recursion
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

// console.log(fibonacci(12));


// with recursion
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
}

// console.log(fib(12));




// what number is in the nth position of the fibonacci sequence?
// without recursion
const fibonacciPos = (pos) => {
    if(pos <= 1)
        return pos;
    const seq = [0, 1];
    for(let i=2; i<=pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}

// console.log(fibonacciPos(8));

// with recusrion
const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}
// console.log(fibPos(8));

const fibPosOne = pos => pos < 2 ? pos : fibPosOne(pos - 1) + fibPosOne(pos - 2);
// console.log(fibPosOne(8));



// Real life examples
// 1. continuation token from an API
const getAWSProductIdImages = async () => {
    // get the data with await fetch request
    if (data.IsTruncated) {
        // recursive
        return await getAWSProductIdImages(
            productId,
            s3,
            resultArray, // accumulator
            data.NextContinuationToken
        );
    }
    return resultArray;
}



