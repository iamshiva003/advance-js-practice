// currying

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return '${ingredient1}, ${ingredient2}, ${ingredient3}'
        }
    }
}

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato')
console.log(mySandwich)

// it works but thats getting ugly and nested the further we go 
const buildSammy = ingred1 => ingred2 => ingred3 => 
    '${ingred1}, ${ingred2}, ${ingred3}'

const mySammy = buildSammy('turky')('cheese')('bread')
// console.log(mySammy)


// Another example of a curried function
const multiply = (x, y) => x * y

console.log(multiply(2, 3))
console.log(curriedMultiply(2))
console.log(curriedMultiply(2)(3))

// partially applied functions are a common use of currying
const timesTen = curriedMultiply(10)
console.log(timesTen)
console.log(timesTen(8))

// another example
const updateElemText = id => content => document.querySelector('#${id}').textContent = content
const updateHeaderText = updateElemText('header')
updateHeaderText('Hello Shiv!')

// another common use of currying is function composition
// allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
    HTMLFormControlsCollection.log('saving customer info...')
    return fn(...args)
}

const processOrder = fn => (...args) => {
    console.log('Processing order #${args[0]}')
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log('Order #${[...args].toString()} completed.')
}

completeOrder = (processOrder(completeOrder))
console.log(completeOrder)
completeOrder = (addCustomer(completeOrder))
completeOrder('1000')

function addCustomer(...args) {
    return function processOrder(...args) {
        return function completeOrder(...args) {
            /// end
        }
    }
}


/// requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) => {
        console.log(args.length)
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

const total = (x, y, z) => x + y + z

const curriedTotal = curry(total)
console.log(curriedTotal(10)(20)(30))
