// ************************* Day 5 *******************************

// Functions --> 

// Functions Decleration --> 

// Write a function to check if a number is even or odd and log the result
// to the console.


function checknum() {
   let num = 5;
   let result = num % 2 == 0 ? 'Even' : 'Odd'
   return result
   
}
console.log(checknum());

// Write a function to calculate the square of a number and return the result.

function square(val) {
    let num = val;  
    result = num * num  
    return result;

}
console.log(square(10));

// Functions Expression --> 

// Write a function expression to find the maximum of two numbers and log
// the result to the console.

let maxvalue = function (a, b) {
    let max =  (a > b) ? a : b
    return `The Max number between ${a} and ${b} is ${max}`
}
console.log(maxvalue(19, 9));

// write a function expression to concatenate two strings and log the result.

let addstr = function () {
    let str1 = 'Shehryar'
    let str2 = 'Ahmed'
    return str1 + ' ' + str2
}
console.log(addstr());

// Arrow Functions --> 

// Write an arrow function to calculate the sum of two numbers and log the
// result to the console.

let arrow = () => {
    let num1 = 5;
    let num2 = 7;
    result = num1 + num2
    return result
}
console.log(arrow());

// write a function that takes two parameters and return thier product.
// provide a default value to the second parameter.

let multiply = (a, b = 1) => {

    return a * b
}
console.log(multiply(3, 8));

// High Order Functions --> 

// Write a high order function that takes a function and a number, and calls
// the function that many times.

function repeatfunction (func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
    
}
let str = () => {
    console.log('Hello World');

}
console.log(repeatfunction(str, 5));

// Write a high order function that takes two functions and a value,
// applies the first function to the value, and then applies  the second
// function to the result .

let main = (func1, func2, val) => {
    let reult1 = func1(val);
    let result2 = func2(10);
    return result2
}
let func1 = (x) => x * 2;
let func2 = (x) => x * x;
let val = 5;
console.log(main(func1, func2, val));





